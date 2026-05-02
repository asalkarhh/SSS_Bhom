import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Objectives from './components/Objectives';
import Gallery from './components/Gallery';
import Donation from './components/Donation';
import Testimonials from './components/Testimonials';
import Volunteer from './components/Volunteer';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import FloatingDonate from './components/FloatingDonate';
import ProgramDetail from './pages/ProgramDetail';

/**
 * Homepage section composition for the ShriSSSSanstha landing page.
 */
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Objectives />
      <Gallery />
      <Donation />
      <Testimonials />
      <Volunteer />
      <Blog />
      <Contact />
    </>
  );
}

/**
 * Root application for the ShriSSSSanstha NGO website.
 * Initializes animation behavior, loader timing, and page composition.
 */
function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });

    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs/:slug" element={<ProgramDetail />} />
        </Routes>
      </main>
      <Footer />
      <FloatingDonate />
    </div>
  );
}

export default App;
