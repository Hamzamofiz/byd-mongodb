import { Link } from 'react-router-dom'
import './nav.css'

const Footer = () => (
  <footer className="main-footer">
    <div className="footer-grid">

      {/* Brand */}
      <div className="footer-column branding-column">
        <div className="footer-logos">
          <span className="byd-brand-logo">BYD</span>
          <span className="divider-bar">|</span>
          <span className="mega-motor-logo">PAKISTAN</span>
        </div>
        <p className="company-subtext">New Energy Vehicles — Pakistan</p>
        <div className="social-icons">
          <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#youtube" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          <a href="#linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="footer-column">
        <h4>QUICK LINKS</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/vehicles">Vehicles</Link></li>
          <li><Link to="/store">Store</Link></li>
        </ul>
      </div>

      {/* Customer Support */}
      <div className="footer-column">
        <h4>CUSTOMER SUPPORT</h4>
        <ul>
          <li><a href="mailto:support@byd.com.pk">support@byd.com.pk</a></li>
          <li><a href="tel:+922111293111">+92 21 111 293 111</a></li>
        </ul>
      </div>

    </div>

    <div className="footer-bottom">
      <div className="copyright-text">BYD Pakistan © 2026</div>
      <div className="legal-links">
        <a href="#terms">Terms & Conditions</a>
        <span className="bottom-divider">|</span>
        <a href="#privacy">Privacy Policy</a>
      </div>
    </div>
  </footer>
)

export default Footer
