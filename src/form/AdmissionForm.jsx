import { useState } from 'react';
import '../css/AdmissionForm.css'; // Assuming you have a CSS file for styling

const AdmissionForm = () => {
    const [form, setForm] = useState({
        name: '',
        fathersName: '',
        mothersName: '',
        class: 'Nursery',
        dob: '',
        presentAddress: '',
        permanentAddress: '',
        mobileNumber: '',
        email: '',
        lastSchool: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form submitted', form);
    };

    const handleReset = () => {
        setForm({
            name: '',
            fathersName: '',
            mothersName: '',
            class: 'Nursery',
            dob: '',
            presentAddress: '',
            permanentAddress: '',
            mobileNumber: '',
            email: '',
            lastSchool: ''
        });
    };

    return (
        <div className="admission-form-container">
            <h1>Admission Form</h1>
            <form onSubmit={handleSubmit} className="admission-form">
                <label>
                    Name:
                    <input type="text" name="name" value={form.name} onChange={handleChange} required />
                </label>
                <label>
                    Father{"'"}s Name:
                    <input type="text" name="fathersName" value={form.fathersName} onChange={handleChange} required />
                </label>
                <label>
                    Mother{"'"}s Name:
                    <input type="text" name="mothersName" value={form.mothersName} onChange={handleChange} required />
                </label>
                <label>
                    Date of Birth:
                    <input type="date" name="dob" value={form.dob} onChange={handleChange} required />
                </label>
                <label>
                    Applying for Class:
                    <select name="class" value={form.class} onChange={handleChange} required>
                        <option value="Pre-Nursery">Pre-Nursery</option>
                        <option value="Nursery">Nursery</option>
                        <option value="LKG">LKG</option>
                        <option value="UKG">UKG</option>
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                        <option value="V">V</option>
                        <option value="VI">VI</option>
                        <option value="VI">VII</option>
                        <option value="VI">VIII</option>
                    </select>
                </label>
                <label>
                    From Which School Did You Pass Last Year:
                    <input type="text" name="lastSchool" value={form.lastSchool} onChange={handleChange} required />
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
                    <input type="tel" name="mobileNumber" value={form.mobileNumber} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={form.email} onChange={handleChange} required />
                </label>
                <div className="form-buttons">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div>
    );
}

export default AdmissionForm;
