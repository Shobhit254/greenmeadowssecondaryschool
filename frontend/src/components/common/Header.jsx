import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/Images/logo.png'

const Header = () => {
  return (
    <header>
        <div className='school py-3'>
         <Navbar expand="lg" >
              <Navbar.Brand href="/" className='name'>
              <img src={logo}   // 👈 yahan logo ka path baad me set kar dena
              alt="Green Meadows Logo"
              style={{
                height: '40px',
                width: '45px',
                marginRight: '5px'
              }}
            />
            <span>Green Meadows</span> Secondary School</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="/" className='nav-link'>Home</Nav.Link>
                  <Nav.Link href="/message" className='nav-link'>Message</Nav.Link>
                  <Nav.Link href="/about" className='nav-link'>About Us</Nav.Link>
                  <Nav.Link href="/facilities" className='nav-link'>Facilities</Nav.Link>
                  <Nav.Link href="/mandatory" className='nav-link'>Mandatory Disclosure</Nav.Link>
                  <Nav.Link href="/gallery" className='nav-link'>Gallery</Nav.Link>
                  <Nav.Link href="/contact" className='nav-link'>Contact Us</Nav.Link>

                </Nav>
              </Navbar.Collapse>
               </Navbar>
        </div>
    </header>
  )
}

export default Header
