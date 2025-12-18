import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";
import logo from "../images/logo.png";

const CustomNavbar = () => {
  const navigate = useNavigate();

  return (
    // 🔥 ADD fixed="top" HERE
    <Navbar expand="lg" className="custom-navbar" >
      <Container>
        <Navbar.Brand href="/" className="logo d-flex align-items-center">
          <img src={logo} alt="Harmoniq Logo" className="logo-img" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="menu-item">Home</Nav.Link>
            <Nav.Link href="/instruments" className="menu-item">Instruments</Nav.Link>
            <Nav.Link href="/lesson" className="menu-item">Lesson</Nav.Link>
            <Nav.Link href="/quiz" className="menu-item">Quiz</Nav.Link>
            <Nav.Link href="/about" className="menu-item">About Us</Nav.Link>
          </Nav>

          <Button
            onClick={() => navigate("/auth")}
            className="custom-btn d-flex align-items-center gap-2"
          >
            <FaUserCircle size={15} />
            Log in
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
