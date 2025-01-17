import {useState} from "react";
import "../css/SocialMedia.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import useSound from "use-sound";
import sound from "/sound/sucess_sound.mp3"

const SocialMedia = () => {
    const [isTrue, setIsTrue] = useState(false);
    const [play] = useSound(sound);

    const toggleIsTrue = () =>{
        if(isTrue === true){
            setIsTrue(false);
            return  play();
        }else{
            setIsTrue(true);
            return  play();
        }
    }

  return (
    <div className="social-media">
        <div className="social-slide-icon" onClick={toggleIsTrue}>
        {
            isTrue == true ?
            <button ><GoArrowRight /></button>:
            <button ><GoArrowLeft /></button>
        }
        </div>
        <div className={`${isTrue ? 'social-slide-icon' : 'social-change'}`}>
            <a href="https://www.facebook.com/littleanglesacademy/" target="blank" aria-label="Facebook"><FaFacebook /></a>
        </div>
        <div className={`${isTrue ? 'social-slide-icon' : 'social-change'}`}>
            <a href="/" target="blank" aria-label="Twitter"><FaTwitter /></a>
        </div>
        <div className={`${isTrue ? 'social-slide-icon' : 'social-change'}`}>
            <a href="/" target="blank" aria-label="Instagram"><FaInstagram /></a>
        </div>
        <div className={`${isTrue ? 'social-slide-icon' : 'social-change'}`}>
            <a href="/" target="blank" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>

    </div>
  )
}

export default SocialMedia