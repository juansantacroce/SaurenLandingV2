import Header from './components/layout/Header';
import MobileNav from './components/layout/MobileNav';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Stack from './sections/Stack';
import Team from './sections/Team';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Stack />
        <Team />
        <Contact />
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}

export default App;
