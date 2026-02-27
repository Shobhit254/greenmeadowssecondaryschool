// import React, { useEffect, useState } from "react";
// import popupImg from "../../assets/Images/image4.png"; // Corrected path

// const AdmissionBanner = () => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const shown = localStorage.getItem("admissionBanner");
//     if (!shown) {
//       setTimeout(() => {
//         setShow(true);
//         localStorage.setItem("admissionBanner", "true");
//       }, 700);
//     }
//   }, []);

//   if (!show) return null;

//   return (
//     <div className="admission-overlay">
//       <div className="admission-popup modern-popup">
//         <button className="admission-close" onClick={() => setShow(false)}>×</button>
//         <div className="admission-content">
//           <div className="admission-text">
//             <h2>🎓 Admission Open 2026-27</h2>
//             <p>
//               Join Green Meadows Secondary School for a nurturing and modern learning environment.
//               Limited seats available. Enroll your child today!
//             </p>
//             <a href="/contact" className="btn btn-primary">Apply Now</a>
//           </div>
//           <div className="admission-image">
//             <img src={popupImg} alt="Admission Banner" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdmissionBanner;


import React, { useEffect, useState } from "react";
import popupImg from "../../assets/Images/image4.png";

const AdmissionBanner = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      const autoClose = setTimeout(() => {
        setShow(false);
      }, 10000);

      return () => clearTimeout(autoClose);
    }
  }, [show]);


  useEffect(() => {
    const shown = localStorage.getItem("admissionBanner");

    if (!shown) {
      const timer = setTimeout(() => {
        setShow(true);
        localStorage.setItem("admissionBanner", "true");
      }, 700);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="admission-overlay">
      <div className="admission-popup modern-popup">
        <button
          className="admission-close"
          onClick={handleClose}
        >
          ×
        </button>

        <div className="admission-content">
          <div className="admission-text">
            <h2>🎓 Admission Open 2026-27</h2>
            <p>
              Join Green Meadows Secondary School for a nurturing and
              modern learning environment. Limited seats available.
              Enroll your child today!
            </p>

            <a href="/contact" className="btn btn-primary">
              Apply Now
            </a>
          </div>

          <div className="admission-image">
            <img
              src={popupImg}
              alt="Admission Banner"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionBanner;
