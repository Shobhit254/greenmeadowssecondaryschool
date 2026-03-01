import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/Images/logo.png'

const Header = () => {
  return (
    <header>
        <div className='school py-3'>
          <Navbar expand="lg">
  <div className="container">
    
    <Navbar.Brand href="/" className='name d-flex align-items-center'>
      <img 
        src={logo}
        alt="Green Meadows Logo"
        height="40"
        className="me-2"
      />
      <span className="fw-bold text-success">Green Meadows</span>
      <span className="ms-1">Secondary School</span>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
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
        
        </div>
    </header>
  )
}

export default Header
