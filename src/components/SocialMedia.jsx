import "../css/SocialMedia.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className="social-media">
        <div className="social-slide-icon">
            <a href="https://www.facebook.com/littleanglesacademy/" target="blank" aria-label="Facebook"><FaFacebook /></a>
        </div>
        <div className="social-slide-icon">
            <a href="/" target="blank" aria-label="Twitter"><FaTwitter /></a>
        </div>
        <div className="social-slide-icon">
            <a href="/" target="blank" aria-label="Instagram"><FaInstagram /></a>
        </div>
        <div className="social-slide-icon">
            <a href="/" target="blank" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>

    </div>
  )
}

export default SocialMedia