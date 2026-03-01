import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import chairman from "../../assets/Images/chairman.PNG";
import principal from "../../assets/Images/npinsir.png";
import vprincipal from "../../assets/Images/mam.PNG";
import incharge from "../../assets/Images/archana.PNG";
import santosh from "../../assets/Images/santosh.png";
import shobhit from "../../assets/Images/shobhit.PNG";
import rohit from "../../assets/Images/rohit.PNG";


// import './Messages.css'

const teachers = [

  {
    name: "Mrs. Santosh Kumari",
    role: "Hindi Teacher",
    img: santosh,
    msg: "हमारा उद्देश्य हिंदी शिक्षा द्वारा विद्यार्थियों में पढ़ने, लिखने और बोलने की क्षमता के साथ संस्कारों और सकारात्मक सोच का विकास करना है।"
  },
  {

    name: "Mr. Shobhit Anand",
    role: "Computer Teacher",
    img: shobhit,
    msg: "IT education helps students understand technology responsibly, encouraging innovation, problem-solving skills, and safe digital practices in an ever-evolving digital world."
  },
  {
    name: "Mr. Rohit Chaudhary",
    role: "English Teacher",
    img: rohit,
    msg: "English education empowers students to read, write, speak, and think effectively, preparing them to communicate confidently and responsibly in a global and ever-changing world."
  }
]

const Message = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="msg-hero">
        <div className="container text-center text-white">
          <h1 data-aos="fade-up">Messages from Our Leaders</h1>
          <p data-aos="fade-up">Guidance, Inspiration & Vision for Students</p>
        </div>
      </section>

      {/* Chairman Section */}
      <section className="msg-section">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-md-4 text-center" data-aos="zoom-out-right">
              <img src={chairman} alt="Principal" className="profile-img" />
              <h4>Mr. Satyavir Singh Mavi</h4>
              <span>Chairmam Sir</span>
            </div>
            <div className="col-md-8" data-aos="zoom-out-left">
              <h2>Chairman's Message</h2>
              <p>
                At our organization, we believe in growth, innovation, and excellence. Our goal is to create opportunities, empower individuals, and contribute positively to society.
                <br />
                We are dedicated to maintaining high standards and continuously improving to meet the expectations of our community.
                <br />
                Thank you for being part of our journey.
                <br />
                — Chairman
                <br />
               Satyavir Singh Mavi
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* Principal Section */}
      <section className="msg-section">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-md-4 text-center" data-aos="zoom-out-right">
              <img src={principal} alt="Principal" className="profile-img" />
              <h4>Mr. Rajvir Singh Parihar</h4>
              <span>Principal Sir</span>
            </div>
            <div className="col-md-8" data-aos="zoom-out-left">
              <h2>Principal's Message</h2>
              <p>
                Our school is committed to providing quality education that fosters
                intellectual growth, creativity, and moral values among students.
              </p>
              <p>
                We aim to prepare students for global challenges through innovative
                teaching and holistic development.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Principal Section */}
      <section className="msg-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-8" data-aos="zoom-out-right">
              <h2>Vice Principal's Message</h2>
              <p>
                We welcome you to our school community, where education goes beyond textbooks. Our focus is on academic
                -excellence, character building, and overall development, ensuring that every child grows with confidence, curiosity, and a strong sense of responsibility.
              </p>
            </div>
            <div className="col-md-4 text-center" data-aos="zoom-out-left">
              <img src={vprincipal} alt="Principal" className="profile-img" />
              <h4>Mrs. Suman</h4>
              <span>Vice Principal Mam</span>
            </div>
          </div>
        </div>
      </section>

      {/* Incharge Section */}
      <section className="msg-section bg-light">
        <div className="container">
          <div className="row align-items-center g-5 flex-md-row-reverse">



            <div className="col-md-8" data-aos="zoom-out-right">
              <h2>Incharge's Message</h2>
              <p>
                Our school is committed to providing quality education along with moral values and discipline. As the School Incharge, my focus is to ensure a supportive learning environment where every child feels motivated to learn and grow. Through teamwork, care, and continuous guidance, we work towards shaping students into capable individuals and responsible citizens.
              </p>
            </div>
            <div className="col-md-4 text-center" data-aos="zoom-out-left">
              <img src={incharge} alt="Incharge" className="profile-img" />
              <h4>Miss Archana Kundla</h4>
              <span>Incharge</span>
            </div>

          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="teacher-section">
        <div className="container text-center">
          <h2>Teachers' Messages</h2>

          <div className="row g-4 mt-4">
            {teachers.map((t, index) => (
              <div className="col-md-4" key={index}>
                <div className="teacher-card">
                  <img src={t.img} alt={t.name} />
                  <h5>{t.name}</h5>
                  <span>{t.role}</span>
                  <p>{t.msg}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}

export default Message
