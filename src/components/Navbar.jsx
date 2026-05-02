import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Programs', to: 'programs' },
  { label: 'Gallery', to: 'gallery' },
  { label: 'Volunteer', to: 'volunteer' },
  { label: 'Blog', to: 'blog' },
  { label: 'Contact', to: 'contact' },
];

/**
 * Fixed responsive navigation with route-aware smooth scrolling.
 */
function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50 || location.pathname !== '/');
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (section) => {
    closeMenu();

    const performScroll = () => {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -78,
      });
    };

    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(performScroll, 120);
      return;
    }

    performScroll();
  };

  return (
    <header>
      <nav className={`navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container nav-inner">
          <button className="brand-logo brand-button" type="button" onClick={() => scrollToSection('home')}>
            <span>ShriSSS</span>Sanstha
          </button>

          <button
            className={`hamburger ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-menu ${menuOpen ? 'show' : ''}`}>
            <div className="nav-links">
              {navLinks.map((item) => (
                <button
                  key={item.to}
                  type="button"
                  className="nav-link-custom nav-button"
                  onClick={() => scrollToSection(item.to)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="nav-actions">
              <button
                className="theme-toggle"
                type="button"
                aria-label="Toggle dark mode"
                onClick={() => setDarkMode((value) => !value)}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
              <button type="button" className="btn btn-secondary-custom nav-donate" onClick={() => scrollToSection('donation')}>
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
