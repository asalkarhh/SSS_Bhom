import SliderModule from 'react-slick';
import { FaQuoteLeft } from 'react-icons/fa';

const Slider = SliderModule.default || SliderModule;

const testimonials = [
  {
    id: 1,
    text: "ShriSSSSanstha gave my daughter a scholarship that changed our family's destiny. Today she is a nurse helping others.",
    name: 'Sunita Patil',
    location: 'Nashik, Maharashtra',
    category: 'Education Beneficiary',
    avatar: 'https://i.pravatar.cc/80?img=5',
  },
  {
    id: 2,
    text: "The free medical camp saved my father's life. We couldn't afford surgery, but Sanstha arranged everything.",
    name: 'Ramesh Shinde',
    location: 'Pune, Maharashtra',
    category: 'Healthcare Beneficiary',
    avatar: 'https://i.pravatar.cc/80?img=12',
  },
  {
    id: 3,
    text: 'Volunteering here for 3 years has been the most fulfilling experience of my life. True impact work.',
    name: 'Priya Deshmukh',
    location: 'Mumbai, Maharashtra',
    category: 'Volunteer',
    avatar: 'https://i.pravatar.cc/80?img=9',
  },
  {
    id: 4,
    text: 'During floods, ShriSSSSanstha was first to arrive with food and shelter. They are true heroes.',
    name: 'Vijay Jadhav',
    location: 'Kolhapur, Maharashtra',
    category: 'Disaster Relief',
    avatar: 'https://i.pravatar.cc/80?img=15',
  },
  {
    id: 5,
    text: 'The skill development workshop helped me start my own tailoring business. I am now independent.',
    name: 'Meena Kadam',
    location: 'Solapur, Maharashtra',
    category: 'Skill Development',
    avatar: 'https://i.pravatar.cc/80?img=20',
  },
];

const sliderSettings = {
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4200,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 1 } },
  ],
};

/**
 * Autoplaying carousel of beneficiary and volunteer stories.
 */
function Testimonials() {
  return (
    <section id="testimonials" className="section-padding testimonials-section">
      <div className="container">
        <div className="section-heading text-center" data-aos="fade-up">
          <h2 className="section-title">Stories of Impact</h2>
          <div className="title-underline mx-auto" />
        </div>
        <Slider {...sliderSettings} className="testimonial-slider">
          {testimonials.map((item) => (
            <article className="testimonial-slide" key={item.id}>
              <div className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <p>{item.text}</p>
                <div className="testimonial-author">
                  <img src={item.avatar} alt={item.name} loading="lazy" />
                  <div>
                    <h3>{item.name}</h3>
                    <span>{item.location}</span>
                    <strong>{item.category}</strong>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
