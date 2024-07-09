import "../css/Teachers.css";
import img from "/TeachersSlider/nd.jfif"

const Teachers = () => {
    const teachersDetails = [
        {
            name: "Nawaz Danish",
            qualification: "Graduation",
            teaching: "Social Science",
            img: img
        },
        {
            name: "Naa",
            qualification: "Graduation",
            teaching: "Science, English, Urdu",
            img: img
        },
        {
            name: "Nawaz Danish",
            qualification: "Graduation",
            teaching: "Social Science",
            img: img
        },
        {
            name: "Naa",
            qualification: "Graduation",
            teaching: "Science, English, Urdu",
            img: img
        }
    ]
  return (
    <div className="teachers">
        <table>
            <thead>
                <tr>
                    <th className="tp">Name</th>
                    <th className="tp">Qualification</th>
                    <th className="tp">Teaching</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {
                    teachersDetails.map((val, ind)=>{
                        return(
                            <tr key={ind}>
                                <td className="tp">{val.name}</td>
                                <td className="tp">{val.qualification}</td>
                                <td className="tp">{val.teaching}</td>
                                <td><img src={val.img} alt={val.name} /></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Teachers