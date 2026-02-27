import React, { useEffect } from 'react'
import AboutImg from '../../assets/Images/image3.png';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Computer from '../../assets/Images/computer.jpeg'
import Art from '../../assets/Images/art.png'
import Dance from '../../assets/Images/dance.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import image from '../../assets/Images/photo.jpg';
import { Pagination } from 'swiper/modules';
import About from '../common/About';
import Testimonial from '../common/Testimonials';
import AdmissionBanner from "../common/AdmissionBanner";
import principalsir from '../../assets/Images/principalsirimage.png'




const Home = () => {
  return (
    <div>
      <>
        <AdmissionBanner />
        <Header />
        <main>
          {/* aria1 main */}
          <section className='aria-1'>
            <div className='main d-flex align-items-center'>
              <div className='school-fluid'>
                <div className='text-center'>
                  <span data-aos="fade-up">Welcome To Our School Website</span>
                  <h1 data-aos="fade-up">We warmly greet students, parents, and visitors. </h1>
                  <p data-aos="fade-up">Our school is committed to providing quality education, strong values,and a safe learning environment.</p>
                  <div className='mt-4'>
                    <a href="/contact"><button className='btn btn-primary large'>Contact Now</button></a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='aria-4 py-5'>
            <div className='main py-5 ' >
              <div className='row'>
                <div className='col-md-6' data-aos="flip-left">
                  <img src={principalsir} className='w-100' />

                </div>
                <div className='col-md-6'>
                  <span data-aos="zoom-in-left">Message</span>
                  <h2 data-aos="zoom-in-left">Principal’s Message</h2>
                  <p data-aos="zoom-in-left">
                    <u><b>Rajvir Singh Parihar</b></u> <br /> Welcome to Green Meadows Secondary School, a place where learning goes beyond textbooks and classrooms. As the Principal of this esteemed institution, I firmly believe that true education is a harmonious blend of academic excellence, moral values, discipline, creativity, and confidence. Our goal is not only to impart knowledge but also to nurture responsible, compassionate, and self-reliant individuals who are prepared to contribute positively to society.<br/>

                    At Green Meadows Secondary School, we are committed to providing a safe, inclusive, and stimulating learning environment where every child feels valued and encouraged. We recognize that each student is unique, with their own strengths and potential. Our dedicated and experienced teachers strive to identify and nurture these abilities through innovative teaching methods, personalized guidance, and continuous motivation.<br/>

                    Along with strong academics, we emphasize the importance of sports, arts, cultural activities, and values-based education to ensure the holistic development of our students. Modern facilities, well-equipped classrooms, and a supportive school culture help students develop critical thinking, leadership skills, and emotional intelligence.<br/>

                    We strongly believe that education is a shared responsibility. With the active support and cooperation of parents, we work together to guide students towards a future filled with knowledge, integrity, resilience, and self-belief. Our mission is to empower students to face future challenges with confidence and emerge as responsible global citizens. Together, let us shape a bright, meaningful, and successful future for our children.</p>
                </div>


              </div>
            </div>
          </section>
          {/* About Section */}
          <About />


          <section className='aria-3 bg-light py-5'>
            <div className='main-fluid '>
              <div className='aria-header text-center'>
                <span>Our Services</span>
                <h2>Our School Services</h2>
                <p>We provide dance, sports, computer, and music classes for students’ all-round development.</p>
              </div>
              <div className='row'>
                <div className='col-md-3 col-lg-3'>
                  <div className='item'>
                    <div className='service-image'>
                      <img src={Computer} alt="" className='w-100' />
                      <div className='service-body'>
                        <div className='service-title'>
                          <h3>Computer Lab</h3>
                        </div>
                        <div className='service-content'>
                          <p>Our computer lab is well equipped with modern systems, high speed internet, and provides practical computer education to students.</p>
                        </div>
                        <a href="/computer" className='btn btn-primary small'>Read More</a>
                      </div>

                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-lg-3'>
                  <div className='item'>
                    <div className='service-image'>
                      <img src={Computer} alt="" className='w-100' />
                      <div className='service-body'>
                        <div className='service-title'>
                          <h3>Science Lab</h3>
                        </div>
                        <div className='service-content'>
                          <p>Our science lab provides hands on experiments, modern equipment, and a safe environment to develop scientific thinking and practical knowledge.</p>
                        </div>
                        <a href="/science" className='btn btn-primary'>Read More</a>
                      </div>

                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-lg-3'>
                  <div className='item'>
                    <div className='service-image'>
                      <img src={Dance} alt="" className='w-100' />
                      <div className='service-body'>
                        <div className='service-title'>
                          <h3>Dance Classes</h3>
                        </div>
                        <div className='service-content'>
                          <p>Our dance classes help students build confidence, coordination, creativity, and physical fitness through regular practice and joyful performances.</p>
                        </div>
                        <a href="/dance" className='btn btn-primary'>Read More</a>
                      </div>

                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-lg-3'>
                  <div className='item'>
                    <div className='service-image'>
                      <img src={Art} alt="" className='w-100' />
                      <div className='service-body'>
                        <div className='service-title'>
                          <h3>Art & Craft</h3>
                        </div>
                        <div className='service-content'>
                          <p>Our art and craft classes encourage creativity, imagination, and fine motor skills, helping students express ideas through colors, designs, and handmade creations.</p>
                        </div>
                        <a href="#" className='btn btn-primary'>Read More</a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Testimonial />
          {/* <section className='aria-5 bg-light py-5'>
          <div className='main-fluid'>
            <div className='aria-header text-center'>
              <span>Testimonials</span>
              <h2>What people are saying about us</h2>
              <p>We offer quality education, experienced teachers, modern facilities, and a safe, supportive learning environment.</p>
            </div>
            <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            >
            <SwiperSlide>
              <div className='card shadow border-0'>
                <div className='card-body p-5'>
                  <div className='rating'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  </div>
                  <div className='content pt-4 pb-2'>
                    <p>My school provides a safe, positive, and motivating learning environment. The teachers explain concepts clearly, encourage questions, and support us in academics, sports, and activities, helping us grow with confidence and discipline.</p>
                  </div>
                  <hr/>
                  <div className='d-flex meta'>
                    <div>
                      <img src={image} alt="" width={50}/>
                    </div>
                    <div className='ps-3'>
                    <div className='name '>student name </div>
                    <div>student</div>
                    </div>

                  </div>
                </div>
                 
              </div>
            </SwiperSlide>
              <SwiperSlide>
              <div className='card shadow border-0'>
                <div className='card-body p-5'>
                  <div className='rating'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  </div>
                  <div className='content pt-4 pb-2'>
                    <p>Our school focuses on overall development, not only studies. Teachers encourage participation in academics, sports, and cultural activities, helping us improve skills, discipline, teamwork, and self-confidence in a friendly environment.</p>
                  </div>
                  <hr/>
                  <div className='d-flex meta'>
                    <div>
                      <img src={image} alt="" width={50}/>
                    </div>
                    <div className='ps-3'>
                    <div className='name '>student name </div>
                    <div>student</div>
                    </div>

                  </div>
                </div>
                 
              </div>
            </SwiperSlide>
              <SwiperSlide>
              <div className='card shadow border-0'>
                <div className='card-body p-5'>
                  <div className='rating'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  </div>
                  <div className='content pt-4 pb-2'>
                    <p>The teachers in my school make learning interesting and easy to understand. They always clear our doubts, encourage creativity, and support us in every situation, which helps us perform better and feel confident.</p>
                  </div>
                  <hr/>
                  <div className='d-flex meta'>
                    <div>
                      <img src={image} alt="" width={50}/>
                    </div>
                    <div className='ps-3'>
                    <div className='name '>student name </div>
                    <div>student</div>
                    </div>

                  </div>
                </div>
                 
              </div>
            </SwiperSlide>
              <SwiperSlide>
              <div className='card shadow border-0'>
                <div className='card-body p-5'>
                  <div className='rating'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  </div>
                  <div className='content pt-4 pb-2'>
                    <p>I am proud to be a student of this school because our teachers are caring, experienced, and dedicated. They guide us patiently, motivate us to work hard, and help us develop good values along with strong academic knowledge.</p>
                  </div>
                  <hr/>
                  <div className='d-flex meta'>
                    <div>
                      <img src={image} alt="" width={50}/>
                    </div>
                    <div className='ps-3'>
                    <div className='name '>student name </div>
                    <div>student</div>
                    </div>

                  </div>
                </div>
                 
              </div>
            </SwiperSlide>
          </Swiper>
          </div>

        </section> */}
        </main>
        <Footer />
      </>

    </div>
  )
}

export default Home
