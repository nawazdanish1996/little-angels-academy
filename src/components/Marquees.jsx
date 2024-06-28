import Marquee from "react-fast-marquee";

const Marquees = () => {
  return (
    <Marquee
      pauseOnHover={true}
      direction="left"
      speed={50}
      style={{
        fontWeight: "bold", 
        color: "white",
        fontSize: "15px",
        backgroundColor: "#320d96",
        padding: "5px",
        position: "fixed",
        zIndex: "10000"
      }}
    >
      Admission is going on 15/05/2055 - 25-25-2056
    </Marquee>
  )
}

export default Marquees