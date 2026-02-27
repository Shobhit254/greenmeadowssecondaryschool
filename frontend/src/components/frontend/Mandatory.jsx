

// import React from 'react';
// import Header from '../common/Header';
// import Footer from '../common/Footer';


// const documentsData = [
//   { name: "School Documents", file: "SchoolDocuments.pdf" },
//   { name: "Recognition Certificate", file: "Recognitioncertificate.pdf" },
//   { name: "Structural stability certificate", file: "Structuralstabilitycertificate.pdf" },
//   { name: "School Infrastructure", file: "SchoolInfrastructure.pdf" },
//   { name: "Recognition Certificate", file: "RecognitionCertificate.pdf" },
//   { name: "Book List of School", file: "BookListOfSchool.pdf" },
//   { name: "Copies of Societies", file: "CopiesOfSocieties.pdf" },
//   { name: "Copy of NOC", file: "CopyOfNOC.pdf" },
//   { name: "Building Safety Certificate", file: "BuildingSafetyCertificate.pdf" },
//   { name: "DEO Certificate", file: "DEOCertificate.pdf" },
// ];

// const Mandatory = () => {
//   /* 🔒 BASIC PROTECTION START */
//   // useEffect(() => {
//   //   const disableRightClick = (e) => e.preventDefault();

//   //   const disableKeys = (e) => {
//   //     if (
//   //       e.ctrlKey &&
//   //       ['p', 's', 'c', 'u'].includes(e.key.toLowerCase())
//   //     ) {
//   //       e.preventDefault();
//   //     }
//   //   };

//   //   document.addEventListener("contextmenu", disableRightClick);
//   //   document.addEventListener("keydown", disableKeys);

//   //   return () => {
//   //     document.removeEventListener("contextmenu", disableRightClick);
//   //     document.removeEventListener("keydown", disableKeys);
//   //   };
//   // }, []);
//   // /* 🔒 BASIC PROTECTION END */


//   return (
//     <>
//       <Header />
//       <main>
//         <section className='aria-8'>
//           <div className='main d-flex align-items-center'>
//             <div className='school'>
//               <div className='text-left'>
//                 {/* <span>Quality, Integrity, Value.</span> */}
//                 <h1 data-aos="fade-up">Mandatory Disclosure</h1>
//                 <p data-aos="fade-up">
//                   This section our school Mandatory Disclosure
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="aria-9 py-5">
//           <div className="doc-container py-5">
//             <div className="doc-header">
//               DOCUMENTS AND INFORMATION
//             </div>

//             <div className="doc-table-wrapper">
//               <table className="doc-table">
//                 <thead>
//                   <tr>
//                     <th>S.No.</th>
//                     <th>DOCUMENTS AND INFORMATION</th>
//                     <th>DOCUMENTS</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {documentsData.map((doc, index) => (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>{doc.name}</td>
//                       <td>
//                         <a
//                           href={`/documents/${doc.file}`}
//                           // href="/documents/SchoolDocuments.pdf"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="view-btn"
//                         >
//                           View
//                         </a>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>

//               </table>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   )
// }

// export default Mandatory;






// import React, { useEffect , useState} from 'react';
// import Header from '../common/Header';
// import Footer from '../common/Footer';

// const documentsData = [
//   { name: "School Documents", file: "SchoolDocuments.pdf" },
//   { name: "Recognition Certificate", file: "Recognitioncertificate.pdf" },
//   { name: "Structural Stability Certificate", file: "Structuralstabilitycertificate.pdf" },
//   { name: "Fire Safety", file: "firesafety.pdf" },
//   { name: "Extension Provisional Recog", file: "Extensionprovisionalrecog.pdf" },
//   { name: "Copies of Societies", file: "CopiesOfSocieties.pdf" },
//   { name: "Copy of NOC", file: "CopyOfNOC.pdf" },
//   { name: "Building Safety Certificate", file: "BuildingSafetyCertificate.pdf" },
//   { name: "DEO Certificate", file: "DEOCertificate.pdf" },
// ];

// const Mandatory = () => {

//   /* 🔒 BASIC PROTECTION START */
//   useEffect(() => {
//     const disableRightClick = (e) => {
//       e.preventDefault();
//     };

//     const disableKeys = (e) => {
//       if (
//         e.ctrlKey &&
//         ["p", "s", "c", "u"].includes(e.key.toLowerCase())
//       ) {
//         e.preventDefault();
//         e.stopPropagation();
//       }
//     };

//     document.addEventListener("contextmenu", disableRightClick, true);
//     document.addEventListener("keydown", disableKeys, true);

//     return () => {
//       document.removeEventListener("contextmenu", disableRightClick, true);
//       document.removeEventListener("keydown", disableKeys, true);
//     };
//   }, []);

//   /* 🔒 BASIC PROTECTION END */

//   return (
//     <>
//       <Header />

//       <main>

//         <section className='aria-8'>
//           <div className='main d-flex align-items-center'>
//             <div className='school'>
//               <div className='text-left'>
//                 <h1 data-aos="fade-up">Mandatory Disclosure</h1>
//                 <p data-aos="fade-up">
//                   This section contains mandatory disclosure documents of our school
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="aria-9 py-5">
//           <div className="doc-container py-5">

//             <div className="doc-header">
//               DOCUMENTS AND INFORMATION
//             </div>

//             <div className="doc-table-wrapper">
//               <table className="doc-table">
//                 <thead>
//                   <tr>
//                     <th>S.No.</th>
//                     <th>DOCUMENTS AND INFORMATION</th>
//                     <th>DOCUMENT</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {documentsData.map((doc, index) => (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>{doc.name}</td>
//                       <td>
//                         <a
//                           href={`/documents/${doc.file}`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="view-btn"
//                         >
//                           View
//                         </a>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>

//               </table>
//             </div>

//           </div>
//         </section>

//       </main>

//       <Footer />
//     </>
//   );
// };

// export default Mandatory;


import React, { useEffect, useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

const documentsData = [
  // { name: "School Documents", file: "SchoolDocuments.pdf" },
  { name: "Recognition Certificate", file: "Recognitioncertificate.pdf" },
  { name: "Structural Stability Certificate", file: "Structuralstabilitycertificate.pdf" },
  { name: "Fire Safety", file: "firesafety.pdf" },
  { name: "Extension Provisional Recog", file: "Extensionprovisionalrecog.pdf" },
  { name: "Copies of Societies", file: "CopiesOfSocieties.pdf" },
  { name: "Copy of NOC", file: "CopyOfNOC.pdf" },
  { name: "Building Safety Certificate", file: "BuildingSafetyCertificate.pdf" },
  { name: "DEO Certificate", file: "DEOCertificate.pdf" },
];

const Mandatory = () => {
  const [activePdf, setActivePdf] = useState(null);

  /* 🔒 BASIC PROTECTION */
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();

    const disableKeys = (e) => {
      if (
        e.ctrlKey &&
        ['p', 's', 'c', 'u'].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener('contextmenu', disableRightClick, true);
    document.addEventListener('keydown', disableKeys, true);

    return () => {
      document.removeEventListener('contextmenu', disableRightClick, true);
      document.removeEventListener('keydown', disableKeys, true);
    };
  }, []);

  return (
    <>
      <Header />

      <main>
        <section className="aria-8">
          <div className="main d-flex align-items-center">
            <div className="school">
              <h1 data-aos="fade-up">Mandatory Disclosure</h1>
              <p data-aos="fade-up">This section contains mandatory disclosure documents of our school</p>
            </div>
          </div>
        </section>
        <p className='text-left py-5'>
         &nbsp;&nbsp;&nbsp; <h3><u><b>GENERAL INFORMATION</b></u></h3>
          <br />
          &nbsp;&nbsp;&nbsp; NAME OF THE SCHOOL - Green Meadows Secondary School
          <br />
          &nbsp;&nbsp;&nbsp; AFFILIATION NO. - 2730937
          <br />
          &nbsp;&nbsp;&nbsp; SCHOOL CODE - 25563
          <br />
          &nbsp;&nbsp;&nbsp; COMPLETE ADDRESS WITH PIN CODE - Green Meadows Secondary School, Address: A-1 lal bahadur shastri marg, <br />&nbsp;&nbsp;&nbsp; firni road, near Kali Ghata Road, Karawal Nagar, Delhi, 110094
          <br />
          &nbsp;&nbsp;&nbsp; PRINCIPAL NAME - Mr. Rajvir Singh
          <br />
          &nbsp;&nbsp;&nbsp; SCHOOL EMAIL ID greenmeadowssecondaryschool@gmail.com
          <br />
          &nbsp;&nbsp;&nbsp; CONTACT DETAILS (+91) 8802323756 (Mobile)
        </p>
        <section className="aria-9 py-5">
          <div className="doc-container">
            <table className="doc-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>DOCUMENT NAME</th>
                  <th>VIEW</th>
                </tr>
              </thead>

              <tbody>
                {documentsData.map((doc, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{doc.name}</td>
                    <td>
                      <button
                        className="view-btn"
                        onClick={() => setActivePdf(doc.file)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 🔐 SECURE PDF MODAL */}
        {activePdf && (
          <div className="pdf-modal">
            <div className="pdf-box">
              <button className="close-btn" onClick={() => setActivePdf(null)}>
                ✕ Close
              </button>

              <iframe
                src={`/documents/${activePdf}#toolbar=0&navpanes=0&scrollbar=0`}
                title="Secure PDF Viewer"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Mandatory;
