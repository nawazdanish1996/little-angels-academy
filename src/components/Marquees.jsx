import Marquee from "react-fast-marquee";

const Marquees = () => {
  return (
    <Marquee
      pauseOnHover={true}
      direction="left"
      speed={50}
      style={{
        fontWeight: "bold", 
        color: "green",
        fontSize: "18px"
      }}
    >
      Admission is going on
    </Marquee>
  )
}

export default Marquees