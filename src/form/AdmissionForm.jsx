import { useState, useEffect } from 'react';
import '../css/AdmissionForm.css'; // Assuming you have a CSS file for styling

const AdmissionForm = () => {
    const [form, setForm] = useState({
        serialNumber: '',
        name: '',
        fathersName: '',
        mothersName: '',
        class: 'Nursery',
        dob: '',
        presentAddress: '',
        permanentAddress: '',
        mobileNumber: '',
        email: '',
        lastSchool: '',
        yearPassing: '',
        agreed: false
    });

    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        // Generate a 4-digit random serial number
        const randomNumber = Math.floor(1000 + Math.random() * 9000);
        setForm(prevForm => ({
            ...prevForm,
            serialNumber: randomNumber.toString()
        }));
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.agreed) {
            setSubmitted(true);
        } else {
            alert("Please agree to the terms and conditions before submitting.");
        }
    };

    const handleReset = () => {
        const randomSerialNumber = Math.floor(1000 + Math.random() * 9000);
        setForm({
            serialNumber: randomSerialNumber.toString(),
            name: '',
            fathersName: '',
            mothersName: '',
            class: 'Nursery',
            dob: '',
            presentAddress: '',
            permanentAddress: '',
            mobileNumber: '',
            email: '',
            lastSchool: '',
            yearPassing: '',
            agreed: false
        });
        setSubmitted(false);
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="admission-form-container">
            <h1>Admission Form</h1>
            {!submitted ? (
                <form onSubmit={handleSubmit} className="admission-form">
                    <label>
                        Name:
                        <input pattern="[A-Za-z ]+" type="text" name="name" value={form.name} onChange={handleChange} required />
                    </label>
                    <label>
                        Father{"'"}s Name:
                        <input pattern="[A-Za-z ]+" type="text" name="fathersName" value={form.fathersName} onChange={handleChange} required />
                    </label>
                    <label>
                        Mother{"'"}s Name:
                        <input pattern="[A-Za-z ]+" type="text" name="mothersName" value={form.mothersName} onChange={handleChange} required />
                    </label>
                    <label>
                        Applying for Class:
                        <select name="class" value={form.class} onChange={handleChange} required>
                            <option value="Nursery">Nursery</option>
                            <option value="Pre-Nursery">Pre-Nursery</option>
                            <option value="LKG">LKG</option>
                            <option value="UKG">UKG</option>
                            <option value="I">I</option>
                            <option value="II">II</option>
                            <option value="III">III</option>
                            <option value="IV">IV</option>
                            <option value="V">V</option>
                            <option value="VI">VI</option>
                        </select>
                    </label>
                    <label>
                        Date of Birth:
                        <input type="date" name="dob" value={form.dob} onChange={handleChange} required />
                    </label>
                    <label>
                        Present Address:
                        <textarea name="presentAddress" value={form.presentAddress} onChange={handleChange} required />
                    </label>
                    <label>
                        Permanent Address:
                        <textarea name="permanentAddress" value={form.permanentAddress} onChange={handleChange} required />
                    </label>
                    <label>
                        Mobile Number:
                        <input type="tel" pattern="[0-9]{10}" name="mobileNumber" value={form.mobileNumber} onChange={handleChange} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={form.email} onChange={handleChange} required />
                    </label>
                    <label>
                        From Which School Did You Pass Last Year:
                        <input pattern="[A-Za-z ]+" type="text" name="lastSchool" value={form.lastSchool} onChange={handleChange} />
                    </label>
                    <label>
                        Year of Passing:
                        <input pattern="[0-9]{4}" name="yearPassing" value={form.yearPassing} onChange={handleChange} type="text" />
                        {/* <input  type="text"    required /> */}
                    </label>
                    <div className="terms-and-conditions">
                        <input type="checkbox" name="agreed" id="agreed" checked={form.agreed} onChange={handleChange} required />
                        <label htmlFor='agreed'>I agree that all the above information is true and correct.</label>
                    </div>
                    <div className="form-buttons">
                        <button type="submit">Submit</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                    </div>
                </form>
            ) : (
                <div className="form-summary">
                    <h2>Form Details</h2>
                    <p style={{fontWeight: "bold"}}>LAA ID Number: {form.serialNumber}</p>
                    <p>Name: {form.name}</p>
                    <p>Father{"'"}s Name: {form.fathersName}</p>
                    <p>Mother{"'"}s Name: {form.mothersName}</p>
                    <p>Applying for Class: {form.class}</p>
                    <p>Date of Birth: {form.dob}</p>
                    <p>Present Address: {form.presentAddress}</p>
                    <p>Permanent Address: {form.permanentAddress}</p>
                    <p>Mobile Number: {form.mobileNumber}</p>
                    <p>Email: {form.email}</p>
                    <p>From Which School Did You Pass Last Year: {form.lastSchool}</p>
                    <p>Year of Passinng: {form.yearPassing}</p>
                    <br />
                    <h5>* Submitted successfully *</h5>
                    <br />
                    <p>Note:-</p>
                    <p>{form.name}, you need to submit it to the school.</p>
                    <div className="form-buttons">
                        <button type="button" onClick={handlePrint}>Print</button>
                        {/* <button type="button" onClick={handleReset}>Reset</button> */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdmissionForm;
