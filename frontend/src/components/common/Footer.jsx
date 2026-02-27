


import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row text-center text-md-start">


          {/* Important Links */}
          <div className="col-md-4 mb-4">
            <h3 className="footer-title">Important Links</h3>
            <ul className="footer-links">
              <li><a href="https://www.cbse.gov.in/" target="_blank" rel="noreferrer">CBSE</a></li>
              <li><a href="https://ncert.nic.in/" target="_blank" rel="noreferrer">NCERT</a></li>
              <li><a href="/mandatory">Mandatory Disclosure</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-4 mb-4">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-links">
              <li>📞 <a href="tel:7022554466">9871905375  <br/>📞  8802323756 </a></li>
              <li>✉️ <a href="mailto:school@gmail.com">greenmeadowssecondaryschool@gmail.com</a></li>
              <li>📍 Green Meadows Public School, Delhi</li>
            </ul>

            {/* Social Media Icons */}
            <div className="footer-social mt-3">
              <a href="https://www.instagram.com/greenmeadowssecondaryschool" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
          {/* Location Section */}
          <div className='col-md-4 mb-4'>
            <h3 className="footer-title">Our Location</h3>

            <p className="footer-text">
              📍 A-A, LAL Bahadur Shastri Marg, Karawal Nagar Extn.  <br />
              &nbsp; &nbsp; &nbsp;Delhi-94, India
            </p>

            <p className="footer-text">
              🧭 Near: Kali Ghata Road
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Green+Meadows+Public+School"
              target="_blank"
              rel="noreferrer"
              className="location-btn"
            >
              View on Google Maps
            </a>
          </div>



        </div>

        <hr className="footer-line" />

        <p className="text-center footer-copy">
          © 2026 Green Meadows Secondary School | Designed & Developed By Shobhit Anand
        </p>
      </div>
    </footer>
  )
}

export default Footer
