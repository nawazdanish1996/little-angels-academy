import {useState} from "react";
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import "../css/ArrowButton.css";

const ArrowButton = () => {
    const [isTrue, setIsTrue] = useState(false)
  return (
    <div className='arrow-button'>
        {
            isTrue == true ?
            <button><FaCaretLeft /></button> : 
            <button><FaCaretRight /></button>
        }
    </div>
  )
}

export default ArrowButton