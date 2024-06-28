import "../css/Home.css";
import TeachersSlider from "../components/TeachersSlider";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <TeachersSlider />
    </div>
  )
}

export default Home