import { LanguageProvider } from '../i18n/LanguageProvider';
import ParticleField from '../components/ParticleField';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Manifesto from '../components/Manifesto';
import Problem from '../components/Problem';
import AiReadiness from '../components/AiReadiness';
import DataKnowledge from '../components/DataKnowledge';
import Layer from '../components/Layer';
import Operations from '../components/Operations';
import Method from '../components/Method';
import Deliverables from '../components/Deliverables';
import Projects from '../components/Projects';
import TechDelivery from '../components/TechDelivery';
import Industries from '../components/Industries';
import Recognition from '../components/Recognition';
import AboutFooter from '../components/AboutFooter';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-clip bg-black text-white antialiased">
        {/* living particle field — fixed behind the entire site */}
        <ParticleField className="pointer-events-none fixed inset-0 z-0 h-full w-full" />
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <Manifesto />
            <Problem />
            <DataKnowledge />
            <AiReadiness />
            <Layer />
            <Operations />
            <Method />
            <Deliverables />
            <Projects />
            <TechDelivery />
            <Industries />
            <Recognition />
          </main>
          <AboutFooter />
        </div>
      </div>
    </LanguageProvider>
  );
}
