import { useState } from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaRegClock, FaTwitter } from 'react-icons/fa';

const contactItems = [
  { icon: FaMapMarkerAlt, label: 'Address', value: 'Pune, Maharashtra, India' },
  { icon: FaPhoneAlt, label: 'Phone', value: '+91 98765 43210' },
  { icon: FaEnvelope, label: 'Email', value: 'info@shrisssanstha.com' },
  { icon: FaRegClock, label: 'Hours', value: 'Mon-Sat, 9AM - 6PM' },
];

/**
 * Contact details, embedded map, social links, and controlled contact form.
 */
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitContact = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline mx-auto" />
        </div>
        <div className="row g-5">
          <div className="col-lg-5" data-aos="fade-right">
            <div className="contact-grid">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="contact-mini glass-card" key={item.label}>
                    <Icon />
                    <div>
                      <strong>{item.label}</strong>
                      <span>{item.value}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="social-row">
              <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
            <iframe
              className="map-frame"
              title="Pune Maharashtra map"
              src="https://maps.google.com/maps?q=Pune+Maharashtra&output=embed"
              loading="lazy"
            />
          </div>
          <div className="col-lg-7" data-aos="fade-left">
            <form className="contact-form form-card" onSubmit={submitContact}>
              <div className="row g-3">
                <div className="col-md-6"><input name="name" value={form.name} onChange={updateField} placeholder="Name" required /></div>
                <div className="col-md-6"><input type="email" name="email" value={form.email} onChange={updateField} placeholder="Email" required /></div>
                <div className="col-md-6"><input name="phone" value={form.phone} onChange={updateField} placeholder="Phone" /></div>
                <div className="col-md-6"><input name="subject" value={form.subject} onChange={updateField} placeholder="Subject" required /></div>
                <div className="col-12"><textarea name="message" value={form.message} onChange={updateField} placeholder="Message" rows="6" required /></div>
              </div>
              <button className="btn btn-primary-custom mt-3" type="submit">Send Message</button>
              {sent && <div className="success-message">Thank you. Your message has been received.</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
