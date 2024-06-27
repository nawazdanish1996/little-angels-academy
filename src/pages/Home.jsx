import "../css/Home.css";
import Marquees from "../components/Marquees";
import TeachersSlider from "../components/TeachersSlider";

const Home = () => {
  return (
    <div className="home">
      <Marquees />
      <TeachersSlider />
    </div>
  )
}

export default Home