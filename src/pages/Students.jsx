import "../css/Students.css";
import AdmissionForm  from "/Form/AdmissionForm2024.pdf"

const Students = () => {
  return (
    <div className="school-me">
      <h2>For further queries, contact to the School Authority.</h2>
    <div className="students">
      <div className="students-box">
        <h2>Main Section</h2>
        <a href="admission_form">Online Admission 2024</a>
        <a href={AdmissionForm} target="blank">Offline Admission Form 2024</a>
        <a href="" target="blank">Registration Form 2024</a>
      </div>
      <div className="students-box">
        <h2>Result 2024</h2>
        <a href="">Nursery</a>
        <a href="">Pre-Nursery</a>
        <a href="">LKG</a>
        <a href="">UKG</a>
        <a href="">CLASS I</a>
        <a href="">CLASS II</a>
        <a href="">CLASS III</a>
        <a href="">CLASS IV</a>
        <a href="">CLASS V</a>
        <a href="">CLASS VI</a>
      </div>
      <div className="students-box">
        <h2>Notice</h2>
        <a href="">Admission 2024 Notice</a>
        <a href="">Registration 2024 Notice</a>
        <a href="">Guardain{"'"}s Meeting April 2024</a>
      </div>
    </div>
    </div>
  )
}

export default Students