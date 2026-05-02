const blogPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500',
    category: 'Education',
    categoryClass: 'green',
    date: 'December 15, 2024',
    title: '500 Students Receive Scholarships at Annual Ceremony',
    excerpt: 'ShriSSSSanstha distributed scholarships worth ₹25 lakhs to deserving students across Maharashtra, helping them continue education with confidence.',
    author: 'Amit Sharma',
    authorAvatar: 'https://i.pravatar.cc/40?img=3',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500',
    category: 'Healthcare',
    categoryClass: 'saffron',
    date: 'November 28, 2024',
    title: 'Free Medical Camp Serves 2000+ Patients in Rural Areas',
    excerpt: 'Our healthcare team conducted a 3-day medical camp in Beed district with checkups, medicines, and specialist referrals.',
    author: 'Dr. Neha Kulkarni',
    authorAvatar: 'https://i.pravatar.cc/40?img=7',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500',
    category: 'Welfare',
    categoryClass: 'blue',
    date: 'October 10, 2024',
    title: 'Winter Clothing Drive Reaches 10,000 Families',
    excerpt: 'This winter, we distributed blankets and warm clothes across 15 districts with support from donors, schools, and local teams.',
    author: 'Kavita Joshi',
    authorAvatar: 'https://i.pravatar.cc/40?img=11',
  },
];

/**
 * Latest news and stories section rendered from hardcoded blog data.
 */
function Blog() {
  return (
    <section id="blog" className="section-padding blog-section">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="section-title">Latest News & Stories</h2>
          <div className="title-underline mx-auto" />
        </div>
        <div className="row g-4">
          {blogPosts.map((post, index) => (
            <div className="col-md-6 col-lg-4" key={post.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <article className="blog-card">
                <img src={post.image} alt={post.title} loading="lazy" />
                <div className="blog-body">
                  <div className="blog-meta">
                    <span className={`category-badge ${post.categoryClass}`}>{post.category}</span>
                    <time>{post.date}</time>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href="#contact">Read More →</a>
                  <div className="blog-author">
                    <img src={post.authorAvatar} alt={post.author} loading="lazy" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-outline-primary-custom" type="button">View All Articles</button>
        </div>
      </div>
    </section>
  );
}

export default Blog;
