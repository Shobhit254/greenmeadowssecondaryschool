import React from 'react'
import AboutImg from '../../assets/Images/image3.png';


const About = () => {
  return (
    <section className='aria-2 py-5'>
      <div className='main '>
        <div className='row'>

          <div className='col-md-6 py-5'>
            <span data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine">About Us</span>
            <h3 data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine">Green Meadows Secondary School</h3>
            <p data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"> Is a well-established institution dedicated to academic excellence and the overall development of students. Our school provides a supportive and disciplined learning environment where education is combined with moral values, creativity, and practical skills. With experienced teachers, modern facilities, and a student-centered approach, we aim to nurture confident, responsible, and lifelong learners prepared for future challenges.
              <br />
              We strongly emphasize character building, leadership, teamwork, and critical thinking through academics, co-curricular activities, sports, and community engagement. Our mission is to create a balanced educational experience that inspires students to achieve their full potential and become ethical, productive members of society.</p>
          </div>
          <div className='col-md-6' data-aos="flip-left">
            <img src={AboutImg} className='w-100' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
