import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import emailjs from "emailjs-com";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
      emailjs.send(
  "service_46pf4l3",      // 👈 Service ID
  "template_sd94z1o",     // 👈 Template ID
  {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
  "SROG88Tcu8c6aFxwg"          // 👈 Public Key
)
    .then(
      (result) => {
        alert("Message sent successfully! ✅");
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      (error) => {
        alert("Failed to send message ❌");
      }
    );
  };

  return (
    <>
      <Header />

      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Contact Us</h2>

          <div className="contact-wrapper">
            <div className="contact-info">
              <h3>Green Meadows Secondary School</h3>
              <p>📍 A-A, LAL Bahadur Shastri Marg, Karawal Nagar Extn.  <br />
              &nbsp; &nbsp; &nbsp;Delhi-94, India</p>
              <p>📞 +91 9871905375  <br/> &nbsp; &nbsp; &nbsp; +91 8802323756 </p>
              <p>✉️ greenmeadowssecondaryschool@gmail.com</p>
            </div>

            <div className="contact-form-box">
              <h3>Send Us a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
