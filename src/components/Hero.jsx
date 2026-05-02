import CountUpModule from 'react-countup';
import { Link } from 'react-scroll';
import { FaArrowDown, FaHandshake, FaHeart } from 'react-icons/fa';

const CountUp = CountUpModule.default || CountUpModule;

const heroStats = [
  { value: 50000, suffix: '+', label: 'Lives Impacted' },
  { value: 200, suffix: '+', label: 'Camps' },
  { value: 15, suffix: '+', label: 'Years' },
  { value: 1000, suffix: '+', label: 'Volunteers' },
];

/**
 * First viewport hero section with emotional messaging, CTAs, and impact stats.
 */
function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-copy text-center text-white">
          <div className="hero-badge" data-aos="fade-up">
            Making a Difference Since 2005
          </div>
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="120">
            <span>Empowering Lives,</span>
            <span>Building Futures</span>
          </h1>
          <div className="typing-wrap" data-aos="fade-up" data-aos-delay="220">
            <span className="typing-text" />
          </div>
          <p className="hero-lead" data-aos="fade-up" data-aos-delay="320">
            Rooted in Maharashtra, ShriSSSSanstha brings education, healthcare, dignity, and hope to families who need a steady hand beside them.
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="420">
            <Link to="donation" smooth duration={500} offset={-78} className="btn btn-secondary-custom btn-lg">
              <FaHeart /> Donate Now
            </Link>
            <Link to="volunteer" smooth duration={500} offset={-78} className="btn btn-outline-light btn-lg">
              <FaHandshake /> Join as Volunteer
            </Link>
          </div>
        </div>
      </div>
      <div className="container hero-stats-wrap">
        <div className="hero-stats glass-card" data-aos="fade-up" data-aos-delay="520">
          {heroStats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <strong>
                <CountUp end={stat.value} duration={2.2} separator="," />
                {stat.suffix}
              </strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <Link to="about" smooth duration={500} offset={-78} className="scroll-indicator" aria-label="Scroll to about section">
        <FaArrowDown />
      </Link>
    </section>
  );
}

export default Hero;
