import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import image from '../../assets/Images/photo.jpg'
import std1 from '../../assets/Images/std1.jpeg'
import std2 from '../../assets/Images/std2.jpeg'
import std3 from '../../assets/Images/std3.jpeg'
import std4 from '../../assets/Images/std4.jpeg'



const testimonials = [
  {
    text: "My school provides a safe, positive, and motivating learning environment. Teachers support us in academics and activities.",
    name: "Ayushman",
    role: "Student",
    image: std1
  },
  {
    text: "Our school focuses on overall development. Teachers encourage academics, sports, and cultural activities.",
    name: "Harsh",
    role: "Student",
    image: std2
  },
  {
    text: "Teachers make learning interesting and easy. They always clear our doubts and motivate us.",
    name: "Bhubaneswar",
    role: "Student",
     image: std3
  },
  {
    text: "I am proud to be a student of this school. Teachers are caring and dedicated.",
    name: "Deeno",
    role: "Student",
     image: std4
  }
]

const Testimonials = () => {
  return (
    <section className='testimonials-section'>
      <div className='container py-5'>

        {/* Header */}
        <div className='text-center mb-5'>
          <span className="subtitle">Testimonials</span>
          <h2 className="title">What people are saying about us</h2>
          <p className="desc">
            We offer quality education, experienced teachers, modern facilities, and a safe learning environment.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">

                {/* Quote Icon */}
                <div className="quote-icon">“</div>

                {/* Stars */}
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>

                {/* Text */}
                <p className="testimonial-text">{item.text}</p>

                {/* User */}
                <div className="user">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h5>{item.name}</h5>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}

export default Testimonials
