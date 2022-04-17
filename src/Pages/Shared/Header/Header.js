import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../../../icon/fav2.png'

const Header = () => {
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="light" variant="primary">
        <Container>
        <Navbar.Brand as={Link} to="/"> <img style={{height:"25px"}} src={img1} alt="" /> <span className=" fw-bolder text-primary">Dr.Dentist</span>  </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="home#news">News</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="login">
              login 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;