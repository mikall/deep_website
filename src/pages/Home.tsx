import { LanguageProvider } from '../i18n/LanguageProvider';
import ParticleField from '../components/ParticleField';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Manifesto from '../components/Manifesto';
import Knowledge from '../components/Knowledge';
import Workflows from '../components/Workflows';
import Critical from '../components/Critical';
import Sectors from '../components/Sectors';
import AboutFooter from '../components/AboutFooter';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white antialiased">
        {/* living particle field — fixed behind the entire site */}
        <ParticleField className="pointer-events-none fixed inset-0 z-0 h-full w-full" />
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <Manifesto />
            <Knowledge />
            <Workflows />
            <Critical />
            <Sectors />
          </main>
          <AboutFooter />
        </div>
      </div>
    </LanguageProvider>
  );
}
