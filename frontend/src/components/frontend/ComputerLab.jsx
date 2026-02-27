import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import labImg from '../../assets/Images/computer.jpeg'

const ComputerLab = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="computer-hero">
        <div className="container text-center" data-aos="fade-up">
          <h1 >Computer Laboratory</h1>
          <p>Empowering students with digital skills and modern technology</p>
        </div>
      </section>

      {/* About Computer Lab */}
      <section className="computer-about py-5">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-md-6">
              <img src={labImg} alt="Computer Lab" className="img-fluid rounded shadow" />
            </div>

            <div className="col-md-6">
              <h2>About Our Computer Lab</h2>
              <p>
                Our school computer lab is equipped with modern computers, high-speed internet,
                and updated software to provide students with hands-on learning experience.
                We focus on developing digital literacy, programming skills, and practical knowledge.
              </p>
              <p>
                The lab is designed to help students explore technology, enhance creativity,
                and prepare for future academic and professional challenges.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="computer-features bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Key Features of Our Computer Lab</h2>

          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="feature-box p-4 shadow-sm bg-white rounded">
                <h4>Modern Computers</h4>
                <p>Latest hardware systems with updated software for smooth learning.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="feature-box p-4 shadow-sm bg-white rounded">
                <h4>High-Speed Internet</h4>
                <p>Fast and secure internet connectivity for research and online learning.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="feature-box p-4 shadow-sm bg-white rounded">
                <h4>Practical Learning</h4>
                <p>Hands-on practice in coding, MS Office, and digital tools.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="feature-box p-4 shadow-sm bg-white rounded">
                <h4>Experienced Teachers</h4>
                <p>Qualified instructors to guide students in computer education.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="feature-box p-4 shadow-sm bg-white rounded">
                <h4>Safe Environment</h4>
                <p>Secure and disciplined environment for effective learning.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="feature-box p-4 shadow-sm bg-white rounded">
                <h4>Digital Skills</h4>
                <p>Students learn essential digital and technical skills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="computer-cta py-5">
        <div className="container text-center">
          <h2>Learn, Explore, and Innovate with Technology</h2>
          <p>Our computer lab helps students build strong technical foundations.</p>
          <a href="/contact" className="btn btn-primary mt-3">Contact Us</a>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ComputerLab
