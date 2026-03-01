// import React from 'react'
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import logo from '../../assets/Images/logo.png'

// const Header = () => {
//   return (
//     <header>
//         <div className='school py-3'>
//           <Navbar expand="lg">
//   <div className="container">

//     <Navbar.Brand href="/" className='name d-flex align-items-center'>
//       <img 
//         src={logo}
//         alt="Green Meadows Logo"
//         height="40"
//         className="me-2"
//       />
//       <span className="fw-bold text-success">Green Meadows</span>
//       <span className="ms-1">Secondary School</span>
//     </Navbar.Brand>

//     <Navbar.Toggle aria-controls="basic-navbar-nav" />

//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="ms-auto">
//         <Nav.Link href="/">Home</Nav.Link>
//         <Nav.Link href="/message">Message</Nav.Link>
//         <Nav.Link href="/about">About Us</Nav.Link>
//         <Nav.Link href="/facilities">Facilities</Nav.Link>
//         <Nav.Link href="/mandatory">Mandatory Disclosure</Nav.Link>
//         <Nav.Link href="/gallery">Gallery</Nav.Link>
//         <Nav.Link href="/contact">Contact Us</Nav.Link>
//       </Nav>
//     </Navbar.Collapse>

//   </div>
// </Navbar>

//         </div>
//     </header>
//   )
// }

// export default Header



// import React from 'react'
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import logo from '../../assets/Images/logo.png'

// const Header = () => {
//   return (
//     <header>
//       <Navbar expand="lg" className="py-3 shadow-sm bg-white" sticky="top">
//         <div className="container-fluid px-0">

//           <Navbar.Brand href="/" className="d-flex align-items-center brand-area">
//             <img
//               src={logo}
//               alt="Green Meadows Logo"
//               height="40"
//               className="me-2"
//             />
//             <span className="brand-text">
//               Green Meadows Secondary School
//             </span>
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="basic-navbar-nav" />

//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto fw-semibold text-center">
//               <Nav.Link href="/" className="px-3">Home</Nav.Link>
//               <Nav.Link href="/message" className="px-3">Message</Nav.Link>
//               <Nav.Link href="/about" className="px-3">About Us</Nav.Link>
//               <Nav.Link href="/facilities" className="px-3">Facilities</Nav.Link>
//               <Nav.Link href="/mandatory" className="px-3">Mandatory Disclosure</Nav.Link>
//               <Nav.Link href="/gallery" className="px-3">Gallery</Nav.Link>
//               <Nav.Link href="/contact" className="px-3">Contact Us</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>

//         </div>
//       </Navbar>
//     </header>
//   )
// }

// export default Header





import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import logo from '../../assets/Images/logo.png'

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="py-3 shadow-sm bg-white">
        <div className="container-fluid px-0">

          <Navbar.Brand href="/" className="d-flex align-items-center ms-3">
            <img
              src={logo}
              alt="Green Meadows Logo"
              height="40"
              className="me-2"
            />
            <span className="fw-bold text-success">
              GREEN MEADOWS SECONDARY SCHOOL
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-3 fw-semibold">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/message">Message</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/facilities">Facilities</Nav.Link>
              <Nav.Link href="/mandatory">Mandatory Disclosure</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </div>
      </Navbar>
    </header> 
  )
}

export default Header