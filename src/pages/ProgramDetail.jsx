import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaHeart, FaRegImages, FaRupeeSign } from 'react-icons/fa';
import { getProgramBySlug, programDetails } from '../data/programs';
import { programIconMap } from '../utils/icons';
import { openRazorpayPayment } from '../utils/payment';

/**
 * Detailed service page for each ShriSSSSanstha program with specific donation options.
 */
function ProgramDetail() {
  const { slug } = useParams();
  const program = getProgramBySlug(slug);
  const [form, setForm] = useState({
    amount: program?.donationOptions?.[0]?.amount ? String(program.donationOptions[0].amount) : '500',
    name: '',
    email: '',
    phone: '',
    note: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!program) {
    return (
      <section className="program-detail-empty">
        <div className="container text-center">
          <h1>Program not found</h1>
          <p>The program you are looking for is not available.</p>
          <Link to="/" className="btn btn-primary-custom">Back to Home</Link>
        </div>
      </section>
    );
  }

  const Icon = programIconMap[program.icon];

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitDonation = (event) => {
    event.preventDefault();
    openRazorpayPayment();
    setSubmitted(true);
  };

  return (
    <>
      <section className={`program-detail-hero program-detail-${program.theme}`}>
        <img src={program.heroImage} alt={program.title} loading="eager" />
        <div className="program-detail-overlay" />
        <div className="container program-detail-hero-content">
          <Link to="/" className="back-link"><FaArrowLeft /> Back to Home</Link>
          <div className="program-detail-icon"><Icon /></div>
          <h1>{program.title}</h1>
          <p>{program.shortDescription}</p>
        </div>
      </section>

      <section id="donation" className="section-padding program-story-section">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-7">
              <span className="eyebrow">What We Do</span>
              <h2 className="section-title">{program.title} at ShriSSSSanstha</h2>
              <p className="section-subtitle">{program.overview}</p>

              <div className="program-detail-list">
                {program.whatWeDo.map((item) => (
                  <div key={item}><FaCheckCircle /> {item}</div>
                ))}
              </div>

              <div className="program-impact-panel">
                <h3>Impact So Far</h3>
                {program.impact.map((item) => (
                  <p key={item}><FaCheckCircle /> {item}</p>
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="program-side-card">
                <h3>Service Donation Options</h3>
                <p>Choose an amount dedicated only to {program.title}.</p>
                <form onSubmit={submitDonation}>
                  <div className="service-amount-grid">
                    {program.donationOptions.map((option) => (
                      <button
                        type="button"
                        className={form.amount === String(option.amount) ? 'service-amount active' : 'service-amount'}
                        key={option.label}
                        onClick={() => setForm((current) => ({ ...current, amount: String(option.amount) }))}
                      >
                        <strong><FaRupeeSign /> {option.amount}</strong>
                        <span>{option.label}</span>
                      </button>
                    ))}
                  </div>
                  <input name="amount" value={form.amount} onChange={updateField} placeholder="Custom amount" inputMode="numeric" />
                  <input name="name" value={form.name} onChange={updateField} placeholder="Full name" required />
                  <input type="email" name="email" value={form.email} onChange={updateField} placeholder="Email address" required />
                  <input name="phone" value={form.phone} onChange={updateField} placeholder="Phone number" required />
                  <textarea name="note" value={form.note} onChange={updateField} rows="3" placeholder={`Message for ${program.title}`} />
                  <button className="btn btn-secondary-custom w-100" type="submit">Donate to {program.title} <FaHeart /></button>
                  {submitted && <div className="success-message">Thank you. Your donation interest for {program.title} has been recorded.</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding program-gallery-section">
        <div className="container">
          <div className="section-heading text-center">
            <h2 className="section-title"><FaRegImages /> Program Gallery</h2>
            <p className="section-subtitle">A closer look at the work, people, and moments behind this service.</p>
            <div className="title-underline mx-auto" />
          </div>
          <div className="row g-4">
            {program.gallery.map((image, index) => (
              <div className="col-md-4" key={image}>
                <img className="program-gallery-img" src={image} alt={`${program.title} activity ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding related-programs-section">
        <div className="container">
          <div className="section-heading text-center">
            <h2 className="section-title">Explore More Services</h2>
            <div className="title-underline mx-auto" />
          </div>
          <div className="row g-3">
            {programDetails.filter((item) => item.slug !== program.slug).slice(0, 4).map((item) => {
              const RelatedIcon = programIconMap[item.icon];
              return (
                <div className="col-sm-6 col-lg-3" key={item.slug}>
                  <Link to={`/programs/${item.slug}`} className="related-program-card">
                    <RelatedIcon />
                    <strong>{item.title}</strong>
                    <span>{item.shortDescription}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProgramDetail;
