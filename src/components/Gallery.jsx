import { useState } from 'react';
import { FaSearchPlus } from 'react-icons/fa';

const galleryItems = [
  { category: 'Education', title: 'Scholarship Distribution', image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&h=360&fit=crop' },
  { category: 'Healthcare', title: 'Rural Health Camp', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=520&fit=crop' },
  { category: 'Welfare', title: 'Food Distribution Drive', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=420&fit=crop' },
  { category: 'Events', title: 'Volunteer Meet', image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=500&h=520&fit=crop' },
  { category: 'Education', title: 'Digital Learning Session', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&h=360&fit=crop' },
  { category: 'Healthcare', title: 'Blood Donation Camp', image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=500&h=430&fit=crop' },
  { category: 'Events', title: 'Community Awareness Program', image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=500&fit=crop' },
  { category: 'Welfare', title: 'Winter Relief Support', image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&h=360&fit=crop' },
  { category: 'Education', title: 'School Supplies', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=470&fit=crop' },
  { category: 'Welfare', title: 'Women Skill Workshop', image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&h=390&fit=crop' },
];

const filters = ['All', 'Education', 'Healthcare', 'Events', 'Welfare'];

/**
 * Filterable masonry gallery for impact photographs.
 */
function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleItems = activeFilter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="section-padding gallery-section">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="section-title">Our Impact in Action</h2>
          <div className="title-underline mx-auto" />
        </div>
        <div className="gallery-filters" role="tablist" aria-label="Gallery filters">
          {filters.map((filter) => (
            <button
              className={activeFilter === filter ? 'filter-btn active' : 'filter-btn'}
              type="button"
              key={filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="masonry-grid">
          {visibleItems.map((item, index) => (
            <figure className="gallery-item" key={`${item.title}-${item.category}`} data-aos="fade-up" data-aos-delay={index * 60}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <figcaption>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <FaSearchPlus />
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-primary-custom" type="button">View All Photos</button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
