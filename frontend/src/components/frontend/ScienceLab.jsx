import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
// import labImg from 'src/assets/Images/image4.png' // science lab image
import labImg from "../../assets/Images/image4.png";


const ScienceLab = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="science-hero">
        <div className="container text-center" data-aos="fade-up">
          <h1>Science Laboratory</h1>
          <p>Exploring science through experiments and practical learning</p>
        </div>
      </section>

      {/* About Science Lab */}
      <section className="science-about py-5">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-md-6">
              <img src={labImg} alt="Science Lab" className="img-fluid rounded shadow" />
            </div>

            <div className="col-md-6">
              <h2>About Our Science Lab</h2>
              <p>
                Our school science laboratory is well-equipped with modern instruments and
                resources to help students understand scientific concepts through practical experiments.
              </p>
              <p>
                The lab encourages curiosity, innovation, and critical thinking among students,
                making science learning more interactive and engaging.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="science-features bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Key Features of Our Science Lab</h2>

          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="feature-box p-4 shadow-sm bg-white rounded">
                <h4>Modern Equipment</h4>
                <p>Advanced scientific instruments for physics, chemistry, and biology experiments.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="feature-box p-4 shadow-sm bg-white rounded">
                <h4>Practical Experiments</h4>
                <p>Hands-on experiments to strengthen theoretical knowledge.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="feature-box p-4 shadow-sm bg-white rounded">
                <h4>Qualified Teachers</h4>
                <p>Experienced science teachers guiding students during experiments.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="feature-box p-4 shadow-sm bg-white rounded">
                <h4>Safe Environment</h4>
                <p>Well-maintained and safe laboratory environment for students.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="feature-box p-4 shadow-sm bg-white rounded">
                <h4>Interactive Learning</h4>
                <p>Encouraging students to explore, observe, and discover scientific ideas.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="feature-box p-4 shadow-sm bg-white rounded">
                <h4>STEM Education</h4>
                <p>Promoting STEM-based learning for future innovation and research.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="science-cta py-5">
        <div className="container text-center">
          <h2>Inspiring Young Minds Through Science</h2>
          <p>Our science lab helps students learn through discovery and experimentation.</p>
          <a href="/contact" className="btn btn-primary mt-3">Contact Us</a>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ScienceLab
