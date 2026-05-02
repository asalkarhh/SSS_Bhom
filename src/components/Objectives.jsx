import { useEffect, useRef, useState } from 'react';
import { FaFemale, FaGraduationCap, FaHospital, FaLeaf, FaShieldAlt, FaUsers } from 'react-icons/fa';

const objectives = [
  { id: '01', icon: FaGraduationCap, title: 'Educate the Underprivileged', description: 'Providing quality education, scholarships, supplies, and skill development to break the cycle of poverty.' },
  { id: '02', icon: FaHospital, title: 'Universal Healthcare Access', description: 'Ensuring free medical services reach every corner of rural and urban Maharashtra through camps and partner doctors.' },
  { id: '03', icon: FaShieldAlt, title: 'Disaster Relief & Rehabilitation', description: 'Rapid response teams provide food, shelter, medicine, and rebuilding support during floods, droughts, and emergencies.' },
  { id: '04', icon: FaFemale, title: 'Women Empowerment', description: 'Skill programs, self-help groups, confidence training, and legal aid help women build safer independent lives.' },
  { id: '05', icon: FaUsers, title: 'Community Welfare Programs', description: 'Food drives, elder care, disability support, and local partnerships strengthen vulnerable families.' },
  { id: '06', icon: FaLeaf, title: 'Environmental Sustainability', description: 'Tree plantation drives, clean water initiatives, and eco-awareness campaigns protect shared community resources.' },
];

/**
 * Alternating timeline describing the core objectives of ShriSSSSanstha.
 */
function Objectives() {
  const timelineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    let frameId = 0;

    const updateTimelineProgress = () => {
      if (!timelineRef.current) return;

      const items = [...timelineRef.current.querySelectorAll('.timeline-item')];
      const triggerLine = window.innerHeight * 0.58;
      const nextActiveIndex = items.reduce((currentIndex, item, index) => {
        const marker = item.querySelector('.timeline-marker');
        const markerTop = marker?.getBoundingClientRect().top ?? item.getBoundingClientRect().top;
        return markerTop <= triggerLine ? index : currentIndex;
      }, -1);

      setActiveIndex((currentIndex) => (currentIndex === nextActiveIndex ? currentIndex : nextActiveIndex));
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateTimelineProgress);
    };

    updateTimelineProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section id="objectives" className="section-padding objectives-section">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="section-title">Our Core Objectives</h2>
          <div className="title-underline mx-auto" />
        </div>
        <div className="timeline" ref={timelineRef}>
          {objectives.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${index < activeIndex ? 'is-past' : ''} ${index === activeIndex ? 'is-active' : ''}`}
                key={item.id}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              >
                <div className="timeline-marker"><Icon /></div>
                {index < objectives.length - 1 && <span className="timeline-segment" aria-hidden="true" />}
                <article className="timeline-card">
                  <span>{item.id}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Objectives;
