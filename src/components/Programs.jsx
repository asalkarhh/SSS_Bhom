import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { primaryPrograms, supportingPrograms } from '../data/programs';
import { programIconMap } from '../utils/icons';

/**
 * Programs section showcasing primary and supporting NGO initiatives.
 */
function Programs() {
  return (
    <section id="programs" className="section-padding programs-section">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="section-title">Our Programs & Services</h2>
          <p className="section-subtitle">Creating lasting change through focused initiatives</p>
          <div className="title-underline mx-auto" />
        </div>
        <div className="row g-4">
          {primaryPrograms.map((program, index) => {
            const Icon = programIconMap[program.icon];
            return (
              <div className="col-md-6 col-lg-4" key={program.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <article className={`program-card program-${program.theme}`}>
                  <div className="program-icon"><Icon /></div>
                  <h3>{program.title}</h3>
                  <p>{program.shortDescription}</p>
                  <ul>
                    {program.whatWeDo.slice(0, 4).map((item) => (
                      <li key={item}><FaCheckCircle /> {item}</li>
                    ))}
                  </ul>
                  <Link to={`/programs/${program.slug}`} className="program-link">Know More <span>→</span></Link>
                </article>
              </div>
            );
          })}
        </div>
        <div className="row g-3 mt-4">
          {supportingPrograms.map((item, index) => {
            const Icon = programIconMap[item.icon];
            return (
              <div className="col-6 col-md-4 col-lg-2" key={item.title} data-aos="zoom-in" data-aos-delay={index * 60}>
                <Link to={`/programs/${item.slug}`} className="small-program-card">
                  <Icon />
                  <span>{item.title}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Programs;
