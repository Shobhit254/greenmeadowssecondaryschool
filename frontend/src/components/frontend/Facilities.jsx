import React from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import {default as Facilitiesus} from '../common/Facilities'

const Facilities = () => {
  return (
     <>
      <Header/>
      <main>
      <section className='aria-6'>
          <div className='main d-flex align-items-center'>
            <div className='school'>
              <div className='text-left'>
                <span>  
                </span>
                <h1 data-aos="fade-up" color='yellow'>School Facilities </h1>
                  <p data-aos="fade-up">This section describes our school Facilities</p>
                 
              </div>
            </div>
          </div>
        </section>
        <Facilitiesus/>
      </main>
      <Footer/>
      </>
  )
}

export default Facilities
