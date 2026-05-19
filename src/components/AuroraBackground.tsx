"use client";

const AuroraBackground = () => {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-black" />
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      <div className="aurora-blob aurora-blob-4" />

      <style jsx>{`
        .aurora-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
          mix-blend-mode: screen;
          will-change: transform;
        }

        .aurora-blob-1 {
          top: -10%;
          left: -10%;
          width: 60vw;
          height: 60vw;
          background: radial-gradient(
            circle,
            rgba(193, 43, 231, 0.55) 0%,
            rgba(193, 43, 231, 0) 70%
          );
          animation: drift-1 28s ease-in-out infinite alternate;
        }

        .aurora-blob-2 {
          top: 20%;
          right: -15%;
          width: 55vw;
          height: 55vw;
          background: radial-gradient(
            circle,
            rgba(140, 30, 200, 0.5) 0%,
            rgba(140, 30, 200, 0) 70%
          );
          animation: drift-2 34s ease-in-out infinite alternate;
        }

        .aurora-blob-3 {
          bottom: -20%;
          left: 10%;
          width: 70vw;
          height: 70vw;
          background: radial-gradient(
            circle,
            rgba(193, 43, 231, 0.4) 0%,
            rgba(193, 43, 231, 0) 70%
          );
          animation: drift-3 40s ease-in-out infinite alternate;
        }

        .aurora-blob-4 {
          top: 50%;
          left: 40%;
          width: 45vw;
          height: 45vw;
          background: radial-gradient(
            circle,
            rgba(220, 100, 240, 0.3) 0%,
            rgba(220, 100, 240, 0) 70%
          );
          animation: drift-4 22s ease-in-out infinite alternate;
        }

        @keyframes drift-1 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(20vw, 15vh) scale(1.2);
          }
        }

        @keyframes drift-2 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(-15vw, 20vh) scale(0.9);
          }
        }

        @keyframes drift-3 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(10vw, -15vh) scale(1.15);
          }
        }

        @keyframes drift-4 {
          0% {
            transform: translate(0, 0) scale(0.9);
          }
          100% {
            transform: translate(-20vw, -10vh) scale(1.1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .aurora-blob {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default AuroraBackground;
