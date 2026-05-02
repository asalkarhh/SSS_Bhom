import { useState } from 'react';
import { FaAward, FaCheckCircle, FaHeart, FaLock, FaQrcode, FaRupeeSign } from 'react-icons/fa';

const amounts = [100, 500, 1000, 2000, 5000];
const impacts = [
  '₹100 = Feeds 1 child for a week',
  '₹500 = School supplies for 1 student',
  '₹1000 = Medical camp for 5 patients',
  '₹5000 = Scholarship for 1 student/year',
];

/**
 * Donation appeal and controlled donation form with quick amount selection.
 */
function Donation() {
  const [form, setForm] = useState({ amount: '500', name: '', email: '', phone: '', pan: '', purpose: 'Education' });

  const updateField = (event) => {
    const { name } = event.target;
    const value = name === 'pan' ? event.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 10) : event.target.value;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitDonation = (event) => {
    event.preventDefault();
  };

  return (
    <section id="donation" className="section-padding donation-section">
      <div className="donation-shape shape-one" />
      <div className="donation-shape shape-two" />
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 text-white" data-aos="fade-right">
            <span className="donation-kicker">Every rupee becomes action</span>
            <h2 className="donation-quote">Your ₹100 can feed a family today</h2>
            <div className="impact-list">
              {impacts.map((impact) => (
                <div className="impact-row" key={impact}><FaRupeeSign /> {impact}</div>
              ))}
            </div>
            <div className="trust-badges">
              <span><FaLock /> 100% Secure</span>
              <span><FaCheckCircle /> 80G Tax Exempt</span>
              <span><FaAward /> Certified NGO</span>
              <span><FaHeart /> 15 Years Trust</span>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <form className="donation-form glass-card" onSubmit={submitDonation}>
              <h3>Make a Donation</h3>
              <div className="amount-buttons">
                {amounts.map((amount) => (
                  <button
                    className={form.amount === String(amount) ? 'amount-btn active' : 'amount-btn'}
                    type="button"
                    key={amount}
                    onClick={() => setForm((current) => ({ ...current, amount: String(amount) }))}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
              <label className="form-floating-custom">
                <input name="amount" value={form.amount} onChange={updateField} placeholder=" " inputMode="numeric" />
                <span>Custom Amount</span>
              </label>
              <label className="form-floating-custom">
                <input name="name" value={form.name} onChange={updateField} placeholder=" " required />
                <span>Donor Name</span>
              </label>
              <label className="form-floating-custom">
                <input type="email" name="email" value={form.email} onChange={updateField} placeholder=" " required />
                <span>Email Address</span>
              </label>
              <label className="form-floating-custom">
                <input name="phone" value={form.phone} onChange={updateField} placeholder=" " required />
                <span>Phone Number</span>
              </label>
              <label className="form-floating-custom">
                <input
                  name="pan"
                  value={form.pan}
                  onChange={updateField}
                  placeholder=" "
                  pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                  title="Enter PAN in format ABCDE1234F"
                  maxLength="10"
                  required
                />
                <span>PAN Number (ABCDE1234F)</span>
              </label>
              <select name="purpose" value={form.purpose} onChange={updateField} aria-label="Donation purpose">
                <option>Education</option>
                <option>Healthcare</option>
                <option>Food</option>
                <option>General</option>
              </select>
              <button className="btn btn-secondary-custom w-100 donation-submit" type="submit">Donate Now <FaHeart /></button>
              <p className="donation-note"><FaQrcode /> Donations are 80G Tax Exempt. UPI and QR code payment support available.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Donation;
