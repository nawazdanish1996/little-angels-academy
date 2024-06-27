import "../css/footer.css";
import logo from '/logo/logo2.jpg'; // Make sure to replace this with the correct path to your logo
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-social-icons">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/littleanglesacademy/" target="blank" aria-label="Facebook"><FaFacebook /></a>
            <a href="/" target="blank" aria-label="Twitter"><FaTwitter /></a>
            <a href="/" target="blank" aria-label="Instagram"><FaInstagram /></a>
            <a href="/" target="blank" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;