import "../css/Teachers.css";
import img from "/TeachersSlider/1.jpeg"

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
                    <th>Name</th>
                    <th>Qualification</th>
                    <th>Teaching</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {
                    teachersDetails.map((val, ind)=>{
                        return(
                            <tr key={ind}>
                                <td>{val.name}</td>
                                <td>{val.qualification}</td>
                                <td>{val.teaching}</td>
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