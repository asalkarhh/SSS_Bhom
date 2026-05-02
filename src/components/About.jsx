import CountUpModule from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaBullseye, FaEye } from 'react-icons/fa';

const CountUp = CountUpModule.default || CountUpModule;

const stats = [
  { number: 50000, suffix: '+', label: 'Lives Impacted' },
  { number: 200, suffix: '+', label: 'Medical Camps' },
  { number: 5000, suffix: '+', label: 'Scholarships' },
  { number: 1000, suffix: '+', label: 'Volunteers' },
  { number: 15, suffix: '+', label: 'Years of Service' },
  { number: 25, suffix: '+', label: 'Districts Covered' },
];

/**
 * About section describing the NGO identity, mission, vision, and counters.
 */
function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="section-title">About ShriSSSSanstha</h2>
          <div className="title-underline mx-auto" />
        </div>
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-images">
              <img
                src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=620"
                alt="Children receiving educational support"
                loading="lazy"
                className="about-img-main"
              />
              <img
                src="https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?w=420"
                alt="Volunteer helping community members"
                loading="lazy"
                className="about-img-float"
              />
              <div className="est-badge">Est. 2005</div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <span className="eyebrow">Who We Are</span>
            <h3 className="about-subtitle">A community-first NGO serving Maharashtra with compassion and accountability.</h3>
            <p className="section-subtitle">
              ShriSSSSanstha works with underprivileged children, families, patients, women, elderly citizens, and rural communities. Our teams connect generous donors and trained volunteers with programs that create practical, lasting change.
            </p>
            <div className="row g-3 mt-3">
              <div className="col-sm-6">
                <div className="mini-card">
                  <FaBullseye />
                  <h4>Our Mission</h4>
                  <p>To deliver education, healthcare, food, and dignity where support is needed most.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mini-card">
                  <FaEye />
                  <h4>Our Vision</h4>
                  <p>A stronger Maharashtra where every family can live with safety, opportunity, and hope.</p>
                </div>
              </div>
            </div>
            <a href="#programs" className="btn btn-outline-primary-custom mt-4">Learn More</a>
          </div>
        </div>
      </div>
      <div className="counter-band" ref={ref}>
        <div className="container">
          <div className="row g-4">
            {stats.map((stat) => (
              <div className="col-6 col-md-4 col-lg-2" key={stat.label}>
                <div className="counter-item">
                  <strong>{inView ? <CountUp end={stat.number} duration={2.5} separator="," suffix={stat.suffix} /> : `0${stat.suffix}`}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
