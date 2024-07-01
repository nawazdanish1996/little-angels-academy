import "../css/GoToTop.css";
import { GoMoveToTop } from 'react-icons/go';

const GoToTop = () => {

    const goTo = () => {
        window.scrollTo({top:0, left:0, behavior: "smooth"})
    }

  return (
    <button className="go-to-top" onClick={goTo}>
        <GoMoveToTop />
    </button>
  )
}

export default GoToTop