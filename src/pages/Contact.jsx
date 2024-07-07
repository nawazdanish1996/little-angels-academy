import "../css/Contact.css"

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-address">
        <p>Address: Lodhan Chowk, Goalpokher, Uttar Dinajpur, W/B, 733210</p>
        <p>Mob. No.: +91 - 8391809802</p>
        <p>Email: contact.to.nd@gmail.com</p>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1791.8926625162585!2d88.11107126566509!3d26.07327138497891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e51f0c35faca53%3A0xf1893fcaca6a9151!2sRozy%20Enterprise!5e0!3m2!1sen!2sin!4v1720345146327!5m2!1sen!2sin"
          width="80%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;