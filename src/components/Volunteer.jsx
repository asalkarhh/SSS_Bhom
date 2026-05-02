import { useState } from 'react';
import { FaCheckCircle, FaHandshake } from 'react-icons/fa';

const interestOptions = ['Education', 'Healthcare', 'Social Work', 'IT Support', 'Event Management', 'Other'];
const benefits = ['Make Real Difference', 'Certificate of Appreciation', 'Networking Opportunities', 'Skill Development', 'Community Recognition'];

/**
 * Volunteer recruitment section with controlled form and benefit highlights.
 */
function Volunteer() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', profession: '', interests: [], message: '' });

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const toggleInterest = (interest) => {
    setForm((current) => ({
      ...current,
      interests: current.interests.includes(interest)
        ? current.interests.filter((item) => item !== interest)
        : [...current.interests, interest],
    }));
  };

  const submitVolunteer = (event) => {
    event.preventDefault();
  };

  return (
    <section id="volunteer" className="section-padding volunteer-section">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <span className="eyebrow">Join the Movement</span>
            <h2 className="section-title">Be the Change You Wish to See</h2>
            <p className="section-subtitle">
              Volunteers are the heartbeat of ShriSSSSanstha. Whether you teach, organize, counsel, design, drive, or simply show up with care, your time can become someone’s turning point.
            </p>
            <div className="benefits-list">
              {benefits.map((benefit) => (
                <div key={benefit}><FaCheckCircle /> {benefit}</div>
              ))}
            </div>
            <div className="volunteer-image">
              <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=720" alt="Volunteers working together" loading="lazy" />
              <span><FaHandshake /> 1000+ volunteers serving</span>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <form className="volunteer-form form-card" onSubmit={submitVolunteer}>
              <h3>Join Our Family</h3>
              <div className="row g-3">
                <div className="col-md-6"><input name="name" value={form.name} onChange={updateField} placeholder="Full Name" required /></div>
                <div className="col-md-6"><input type="email" name="email" value={form.email} onChange={updateField} placeholder="Email" required /></div>
                <div className="col-md-6"><input name="phone" value={form.phone} onChange={updateField} placeholder="Phone" required /></div>
                <div className="col-md-6"><input name="city" value={form.city} onChange={updateField} placeholder="City" /></div>
                <div className="col-12"><input name="profession" value={form.profession} onChange={updateField} placeholder="Profession" /></div>
              </div>
              <div className="interest-grid">
                {interestOptions.map((interest) => (
                  <label key={interest} className="check-pill">
                    <input
                      type="checkbox"
                      checked={form.interests.includes(interest)}
                      onChange={() => toggleInterest(interest)}
                    />
                    <span>{interest}</span>
                  </label>
                ))}
              </div>
              <textarea name="message" value={form.message} onChange={updateField} placeholder="Message" rows="4" />
              <button className="btn btn-primary-custom w-100" type="submit">Join Our Family <FaHandshake /></button>
              <p>Already 1000+ volunteers serving</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Volunteer;
