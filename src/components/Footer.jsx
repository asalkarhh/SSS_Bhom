import { Link } from 'react-scroll';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const quickLinks = ['Home', 'About', 'Programs', 'Gallery', 'Blog', 'Contact', 'Privacy Policy'];
const programs = ['Education', 'Healthcare', 'Social Welfare', 'Disaster Relief', 'Volunteer', 'Donate'];

/**
 * Dark multi-column footer with brand, links, programs, and newsletter form.
 */
function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="footer-brand"><span>ShriSSS</span>Sanstha</div>
            <p>Empowering lives, building futures, and serving communities across Maharashtra since 2005.</p>
            <div className="footer-social">
              <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link to={link === 'Privacy Policy' ? 'home' : link.toLowerCase().replace(' ', '-')} smooth duration={500} offset={-78}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>Our Programs</h3>
            <ul>
              {programs.map((item) => (
                <li key={item}>
                  <Link to={item === 'Volunteer' ? 'volunteer' : item === 'Donate' ? 'donation' : 'programs'} smooth duration={500} offset={-78}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>Stay Updated</h3>
            <p>Join 5000+ subscribers receiving impact updates.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Email address" aria-label="Email address" />
              <button type="submit">Subscribe</button>
            </form>
            <address>Pune, Maharashtra<br />+91 98765 43210</address>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 ShriSSSSanstha. All Rights Reserved.</span>
          <span>Developed by <a href="https://www.asalkar.in" target="_blank">Asalkar Techworks</a></span>
          <span>80G Registered | NGO Certified</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
