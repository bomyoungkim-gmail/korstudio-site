import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Collections } from './components/Collections';
import { Personalization } from './components/Personalization';
import { Applications } from './components/Applications';
import { Materials } from './components/Materials';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Collections />
        <Personalization />
        <Applications />
        <Materials />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
