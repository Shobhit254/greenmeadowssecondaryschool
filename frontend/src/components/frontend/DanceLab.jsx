import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import danceImg from '../../assets/Images/dance.png' // dance image

const DanceLab = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="dance-hero">
        <div className="container text-center" data-aos="fade-up">
          <h1>Dance Classes</h1>
          <p>Encouraging creativity, confidence, and expression through dance</p>
        </div>
      </section>

      {/* About Dance Class */}
      <section className="dance-about py-5">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-md-6">
              <img src={danceImg} alt="Dance Class" className="img-fluid rounded shadow" style={{ width: "100%", height: "300px", objectFit: "cover" }}/>
            </div>

            <div className="col-md-6" >
              <h2>About Our Dance Classes</h2>
              <p>
                Our school dance classes provide students with an opportunity to explore their talent,
                develop rhythm, and express emotions through various dance forms.
              </p>
              <p>
                We focus on building confidence, physical fitness, coordination, and creativity
                while making learning fun and enjoyable.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="dance-features bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Key Features of Our Dance Classes</h2>

          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="feature-box p-4 shadow-sm bg-white rounded">
                <h4>Professional Training</h4>
                <p>Guidance by trained and experienced dance instructors.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="feature-box p-4 shadow-sm bg-white rounded">
                <h4>Multiple Dance Forms</h4>
                <p>Classical, folk, contemporary, and modern dance styles.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="feature-box p-4 shadow-sm bg-white rounded">
                <h4>Confidence Building</h4>
                <p>Helping students gain self-confidence and stage presence.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="feature-box p-4 shadow-sm bg-white rounded">
                <h4>Physical Fitness</h4>
                <p>Improving flexibility, stamina, and body coordination.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="feature-box p-4 shadow-sm bg-white rounded">
                <h4>Cultural Exposure</h4>
                <p>Learning traditional and cultural dance forms.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="feature-box p-4 shadow-sm bg-white rounded">
                <h4>Stage Performances</h4>
                <p>Opportunities to perform in school events and competitions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="dance-cta py-5">
        <div className="container text-center">
          <h2>Discover the Joy of Dance</h2>
          <p>Our dance classes help students express themselves with confidence and passion.</p>
          <a href="/contact" className="btn btn-primary mt-3">Contact Us</a>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default DanceLab
