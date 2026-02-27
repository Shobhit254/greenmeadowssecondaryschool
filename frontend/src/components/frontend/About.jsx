import React from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import {default as Aboutus} from '../common/About'
 


const About = () => {
  return (
      <>
      <Header/>
      <main>
      <section className='aria-6'>
          <div className='main d-flex align-items-center'>
            <div className='school'>
              <div className='text-left'>
                <span data-aos="fade-up">Quality, Integrity, Value.</span>
                <h1 data-aos="fade-up">About Us </h1>
                  <p data-aos="fade-up">This section describes our school, goals, teachers,<br /> and educational environment.</p>
                 
              </div>
            </div>
          </div>
        </section>
        <Aboutus/>
        
      </main>
      <Footer/>
      </>
  
  )
}

export default About
