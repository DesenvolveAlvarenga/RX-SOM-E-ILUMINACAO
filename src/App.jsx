import { useTheme } from './hooks/useTheme.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import EventStrip from './components/EventStrip.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Equipment from './components/Equipment.jsx';
import Portfolio from './components/Portfolio.jsx';
import Differentials from './components/Differentials.jsx';
import Instagram from './components/Instagram.jsx';
import Quote from './components/Quote.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';

export default function App() {
  const { theme, toggle } = useTheme();
  return (
    <>
      <a className="sr-only" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header theme={theme} onToggleTheme={toggle} />
      <main id="conteudo">
        <Hero theme={theme} />
        <EventStrip />
        <About />
        <Services />
        <Equipment />
        <Portfolio />
        <Differentials />
        <Instagram />
        <Quote />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
