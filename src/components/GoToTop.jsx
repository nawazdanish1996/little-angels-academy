import "../css/GoToTop.css";
import { GoMoveToTop } from 'react-icons/go';
import useSound from "use-sound";
import sound from "/sound/sucess_sound.mp3"

const GoToTop = () => {
  const [play] = useSound(sound);

  const goTo = () => {
    window.scrollTo({top:0, left:0, behavior: "smooth"})
    return play();
  }

  return (
    <button className="go-to-top" onClick={goTo}>
        <GoMoveToTop />
    </button>
  )
}

export default GoToTop