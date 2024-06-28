import ReactFinalMarquee from "react-final-marquee";
import "../css/TeachersSlider.css";
import img1 from "/TeachersSlider/1.jpeg"
import img2 from "/TeachersSlider/2.jpeg"

const TeachersSlider = () => {
  const teachers = [
    img1,
    img2,
    img2,
    img2,
    img2,
    img2,
    img2,
    img2,
    img2,
    img2,
  ];

  return (
    <div className="teachersSlider">
      <h1 className="title">Our Teachers</h1>
      <div className="slider-img-box">
        <ReactFinalMarquee speed="30">
          <div className="teachers-box">
            {teachers.map((val, ind)=>{
              return(
                <img key={ind} src={val} alt="Teachers" />
              )
            })}
          </div>
        </ReactFinalMarquee>
      </div>
    </div>
  );
};

export default TeachersSlider;
