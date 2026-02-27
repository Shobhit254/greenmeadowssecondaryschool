import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import image from '../../assets/Images/photo.jpg';  
import imageart from '../../assets/Images/image4.png';  
import y1 from '../../assets/Images/y1.jpeg'
import y2 from '../../assets/Images/y2.jpeg'
import y3 from '../../assets/Images/y3.jpeg'
import y4 from '../../assets/Images/y4.jpeg'
import y5 from '../../assets/Images/y5.jpeg'
import y6 from '../../assets/Images/y6.jpeg'
import y7 from '../../assets/Images/y7.jpeg'
// Safty
import pic1 from '../../assets/Images/pic1.jpeg'
import pic2 from '../../assets/Images/pic2.jpeg'
import pic3 from '../../assets/Images/pic3.jpeg'
import pic4 from '../../assets/Images/pic4.jpeg'
import pic5 from '../../assets/Images/pic5.jpeg'
import pic6 from '../../assets/Images/pic6.jpeg'
import pic7 from '../../assets/Images/pic7.jpeg'
import pic8 from '../../assets/Images/pic8.jpeg'
// class
import cls1 from '../../assets/Images/cl1.jpeg'
import cls2 from '../../assets/Images/cl2.jpeg'
import cls3 from '../../assets/Images/cl3.jpeg'
import cls4 from '../../assets/Images/cl4.jpeg'
import cls5 from '../../assets/Images/cl5.jpeg'
import cls6 from '../../assets/Images/cl6.jpeg'
import cls7 from '../../assets/Images/cl7.jpeg'
import cls8 from '../../assets/Images/cl8.jpeg'
import cls9 from '../../assets/Images/cl9.jpeg'
import cls10 from '../../assets/Images/cl10.jpeg'

import cl11 from '../../assets/Images/cls11.jpeg'
import cl12 from '../../assets/Images/cls12.jpeg'
import cl13 from '../../assets/Images/cls13.jpeg'
import cl14 from '../../assets/Images/cls14.jpeg'

// Self defence
import def1 from '../../assets/Images/defence1.jpeg'
import def2 from '../../assets/Images/defence2.jpeg'
import def3 from '../../assets/Images/defence3.jpeg'
import def4 from '../../assets/Images/defence4.jpeg'
import def5 from '../../assets/Images/defence5.jpeg'
import def6 from '../../assets/Images/defence6.jpeg'
import def7 from '../../assets/Images/defence7.jpeg'
import def8 from '../../assets/Images/defence8.jpeg'

import eve1 from '../../assets/Images/event1.jpeg'
import eve2 from '../../assets/Images/event2.jpeg'
import eve3 from '../../assets/Images/event3.jpeg'
import eve4 from '../../assets/Images/event4.jpeg'
import eve5 from '../../assets/Images/event5.jpeg'

import infa1 from '../../assets/Images/infra1.jpeg'
import infa2 from '../../assets/Images/infra2.jpeg'
import infa3 from '../../assets/Images/infra3.jpeg'
import infa4 from '../../assets/Images/infra4.jpeg'






const galleryImages = [
  
  /*Classes */
  {
    src: cls1,
    title: "Class Activity",
    category: "Classes",
  },
  {
    src: cls2,
    title: "Class Activity",
    category: "Classes",
  },{
    src: cls3,
    title: "Class Activity",
    category: "Classes",
  },{
    src: cls4,
    title: "Class Activity",
    category: "Classes",
  },{
    src: cls5,
    title: "Class Activity",
    category: "Classes",
  },{
    src: cls6,
    title: "Class Activity",
    category: "Classes",
  },{
    src: cls7,
    title: "Class Activity",
    category: "Classes",
  },{
    src: cls8,
    title: "Class Activity",
    category: "Classes",
  },{
    src: cls9,
    title: "Class Activity",
    category: "Classes",
  },{
    src: cls10,
    title: "Class Activity",
    category: "Classes",
  },
  {
    src: cl11,
    title: "Class Activity",
    category: "Classes",
  },
  {
    src: cl12,
    title: "Class Activity",
    category: "Classes",
  },
  {
    src: cl13,
    title: "Class Activity",
    category: "Classes",
  },
  {
    src: cl14,
    title: "Class Activity",
    category: "Classes",
  },
  
  
 
  /*Event*/
  {
    src: pic1,
    title: "SAFETY",
    category: "Events",
  },
  {
    src: pic2,
    title: "SAFETY",
    category: "Events",
  },
  {
    src: pic3,
    title: "SAFETY",
    category: "Events",
  },
  {
    src: pic4,
    title: "SAFETY",
    category: "Events",
  },
  {
    src: pic5,
    title: "SAFETY",
    category: "Events",
  },
  {
    src: pic6,
    title: "SAFETY",
    category: "Events",
  },
  {
    src: pic7,
    title: "SAFETY",
    category: "Events",
  },
  {
    src: pic8,
    title: "SAFETY",
    category: "Events",
  },
  {
    src: def1,
    title: "SALF DEFENCE",
    category: "Events",
  },
  {
    src: def2,
    title: "SALF DEFENCE",
    category: "Events",
  },
  {
    src: def3,
    title: "SALF DEFENCE",
    category: "Events",
  },
  {
    src: def4,
    title: "SALF DEFENCE",
    category: "Events",
  },
  {
    src: def5,
    title: "SALF DEFENCE",
    category: "Events",
  },
  {
    src: def6,
    title: "SALF DEFENCE",
    category: "Events",
  },
  {
    src: def7,
    title: "SALF DEFENCE",
    category: "Events",
  },
  {
    src: def8,
    title: "SALF DEFENCE",
    category: "Events",
  },
  {
    src: eve1,
    title: "Food Carnival",
    category: "Events",
  },
 {
    src: eve2,
    title: "Food Carnival",
    category: "Events",
  },
   {
    src: eve3,
    title: "Food Carnival",
    category: "Events",
  },
 {
    src: eve4,
    title: "Food Carnival",
    category: "Events",
  },
   {
    src: eve5,
    title: "Food Carnival",
    category: "Events",
  },

  /*Sport*/
  {
    src: y1,
    title: "Yoga",
    category: "Sports",
  },{
    src: y2,
    title: "Yoga",
    category: "Sports",
  },{
    src: y3,
    title: "Yoga",
    category: "Sports",
  },{
    src: y4,
    title: "Yoga",
    category: "Sports",
  },
  {
    src: y5,
    title: "Yoga",
    category: "Sports",
  },
  {
    src: y6,
    title: "Yoga",
    category: "Sports",
  },{
    src: y7,
    title: "Yoga",
    category: "Sports",
  },
  

   // infratuctur
  {
    src: imageart,
    title: "School",
    category: "Infrastructure",
  },
  {
    src: infa1,
    title: "School",
    category: "Infrastructure",
  },
  {
    src: infa2,
    title: "School",
    category: "Infrastructure",
  },
 {
    src: infa3,
    title: "School",
    category: "Infrastructure",
  },
  {
    src: infa4,
    title: "School",
    category: "Infrastructure",
  },
  
    
  
];

const categories = ["All", "Events", "Classes", "Sports", "Infrastructure"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      <Header />

      <section className="aria-9 gallery-section">
        <div className="gallery-container">
          <h2 className="gallery-title">School Gallery</h2>
          <p className="gallery-subtitle">
            Moments of learning, creativity, and achievements at our school
          </p>

          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${
                  selectedCategory === cat ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredImages.map((img, index) => (
              <div
                className="gallery-card"
                key={index}
                onClick={() => setLightboxImage(img)}
              >
                <img src={img.src} alt={img.title} />
                <div className="gallery-overlay">
                  <span>{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {lightboxImage && (
          <div className="lightbox" onClick={() => setLightboxImage(null)}>
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightboxImage.src} alt={lightboxImage.title} />
              <p>{lightboxImage.title}</p>
              <button
                className="close-btn"
                onClick={() => setLightboxImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
