import React from "react";
import { useNavigate } from "react-router-dom";

import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";
import logo from "../images/logo.png";

const CustomNavbar = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>

        <Navbar.Brand href="/" className="logo d-flex align-items-center">
          <img src={logo} alt="Harmoniq Logo" className="logo-img" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mx-auto">
            <Nav.Link href="/instruments" className="menu-item">
              Instruments
            </Nav.Link>

            {/* ⭐ Added Lesson Menu Item */}
            <Nav.Link href="/lesson" className="menu-item">
              Lesson
            </Nav.Link>

            <Nav.Link href="#exercises" className="menu-item">
              Exercises
            </Nav.Link>
            <Nav.Link href="#quiz" className="menu-item">
              Quiz
            </Nav.Link>
            <Nav.Link href="#about" className="menu-item">
              About Us
            </Nav.Link>
            <Nav.Link href="#contact" className="menu-item">
              Contact Us
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-3">
            <Button
              onClick={() => navigate("/auth")}
              variant="primary"
              className="rounded-pill px-4 custom-btn d-flex align-items-center gap-2"
            >
              <FaUserCircle size={15} />
              Log in
            </Button>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
