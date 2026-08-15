import { useEffect, useRef } from 'react';

/**
 * Canvas that renders a word built from live particles.
 * When it enters the viewport the particles fly in from a scattered
 * state and assemble into the wordmark; they gently breathe forever.
 * A safety timer guarantees assembly even if the IntersectionObserver
 * never fires (e.g. inside sandboxed preview iframes).
 */
export default function ParticleWord({ word }: { word: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | null = null;
    let cancelled = false;

    const setup = (canvas: HTMLCanvasElement): (() => void) | null => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      if (W < 10 || H < 10) return null;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);

      // sample the word into target points
      const sample = () => {
        const off = document.createElement('canvas');
        const octx = off.getContext('2d')!;
        off.width = W;
        off.height = H;
        const fontSize = Math.min(W / (word.length * 0.66), H * 0.92);
        octx.font = `800 ${fontSize}px Archivo, sans-serif`;
        octx.textAlign = 'center';
        octx.textBaseline = 'middle';
        octx.fillStyle = '#fff';
        octx.fillText(word, W / 2, H / 2);
        const data = octx.getImageData(0, 0, W, H).data;
        const gap = Math.max(4, Math.round(W / 340));
        const pts: { x: number; y: number }[] = [];
        for (let y = 0; y < H; y += gap) {
          for (let x = 0; x < W; x += gap) {
            if (data[(y * W + x) * 4 + 3] > 128) pts.push({ x, y });
          }
        }
        return pts;
      };

      let targets = sample();
      // if the display font was not ready yet, targets may be wrong/empty —
      // re-sample once webfonts settle
      if (targets.length < 40 && document.fonts?.ready) {
        document.fonts.ready.then(() => {
          const again = sample();
          if (again.length > targets.length) {
            targets = again;
            retarget();
          }
        });
      }

      interface P {
        x: number; y: number; tx: number; ty: number;
        vx: number; vy: number; phase: number; size: number;
      }
      const make = (t: { x: number; y: number }): P => ({
        x: Math.random() * W,
        y: Math.random() * H,
        tx: t.x,
        ty: t.y,
        vx: 0,
        vy: 0,
        phase: Math.random() * Math.PI * 2,
        size: 1.1 + Math.random() * 1.7,
      });

      let parts: P[] = targets.map(make);
      function retarget() {
        parts = targets.map((t, i) => {
          const old = parts[i];
          return old ? { ...old, tx: t.x, ty: t.y } : make(t);
        });
      }

      let assembled = false;
      let raf = 0;
      let time = 0;
      const mouse = { x: -9999, y: -9999 };

      const assemble = () => {
        assembled = true;
      };

      const io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            assemble();
            io.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      io.observe(canvas);
      // safety net: never leave the wordmark scattered
      const safety = setTimeout(assemble, 2200);

      // track the pointer at window level so the repulsion works
      // even when the cursor enters from neighbouring elements
      const onMove = (ev: PointerEvent) => {
        const r = canvas.getBoundingClientRect();
        mouse.x = ev.clientX - r.left;
        mouse.y = ev.clientY - r.top;
      };
      const onLeave = () => {
        mouse.x = -9999;
        mouse.y = -9999;
      };
      window.addEventListener('pointermove', onMove, { passive: true });
      document.documentElement.addEventListener('pointerleave', onLeave);

      const tick = () => {
        raf = requestAnimationFrame(tick);
        time += 0.016;
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = '#ffffff';

        for (const p of parts) {
          // spring toward target (once assembled), otherwise drift
          const k = assembled ? 0.055 : 0.0006;
          p.vx += (p.tx - p.x) * k;
          p.vy += (p.ty - p.y) * k;

          // cursor repulsion
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 16900) {
            const d = Math.sqrt(d2) || 1;
            const f = ((130 - d) / 130) * 3.0;
            p.vx += (dx / d) * f;
            p.vy += (dy / d) * f;
          }

          // organic breathing jitter
          p.vx += Math.sin(time * 1.7 + p.phase) * 0.018;
          p.vy += Math.cos(time * 1.3 + p.phase) * 0.018;

          p.vx *= 0.86;
          p.vy *= 0.86;
          p.x += p.vx;
          p.y += p.vy;

          const tw = 0.55 + 0.45 * Math.sin(time * 2 + p.phase);
          ctx.globalAlpha = 0.45 + tw * 0.55;
          ctx.fillRect(p.x, p.y, p.size, p.size);
        }
        ctx.globalAlpha = 1;
      };
      tick();

      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(safety);
        io.disconnect();
        window.removeEventListener('pointermove', onMove);
        document.documentElement.removeEventListener('pointerleave', onLeave);
      };
    };

    const init = () => {
      if (cancelled || cleanup) return;
      const canvas = canvasRef.current;
      if (canvas) cleanup = setup(canvas) ?? null;
    };

    // wait for the display font so the sampled glyph shapes are correct,
    // but never block the wordmark on the font loading
    if (document.fonts?.load) {
      document.fonts
        .load('800 100px Archivo')
        .then(() => document.fonts.ready)
        .then(init)
        .catch(init);
      const fallback = setTimeout(init, 1200);
      return () => {
        cancelled = true;
        clearTimeout(fallback);
        cleanup?.();
      };
    }
    init();
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [word]);

  return <canvas ref={canvasRef} className="block h-[30vw] w-full md:h-[22vw]" aria-label={word} role="img" />;
}
