import React from "react";
import "./About.css";
import aboutSec from "../images/piano.avif"
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { FaMusic, FaHeadphones, FaWaveSquare, FaLightbulb } from "react-icons/fa";

export default function About() {
    const navigate = useNavigate();
  return (
    <div className="about-page">

      {/* ===== OUR STORY SECTION ===== */}
      <Container className="story-section">
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="section-title2">Our Story</h2>
            <p className="section-text">
              Founded with a singular vision: to bridge the gap between
              technology and emotion through sound.
            </p>
            <p className="section-text">
              Every product we create, every experience we design, stems from
              our deep respect for music and its ability to transform moments
              into memories.
            </p>
          </Col>

        <Col md={6}>
  <div className="story-card">
    <img
      src={aboutSec}
      alt="Our Story"
      className="story-img"
    />
  </div>
</Col>

        </Row>
      </Container>

      {/* ===== WHAT WE STAND FOR ===== */}
      <Container className="values-section text-center">
        <h2 className="section-title2">What We Stand For</h2>

        <Row className="mt-4">
          <Col md={3} sm={6} className="mb-4">
            <Card className="value-card">
              <Card.Body>
                <div className="icon-box1">
                  <FaMusic />
                </div>
                <h5>Piano Learning</h5>
                <p>
                  Build a strong musical foundation with our interactive piano. Learn notes, chords, and
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <Card className="value-card">
              <Card.Body>
                <div className="icon-box1">
                  <FaHeadphones />
                </div>
                <h5>Groovepad Creation</h5>
                <p>
                  Create beats, mix sounds, and explore rhythm using the groovepad. Experiment with loops and patterns to develop timing, coordination, and musical creativity.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <Card className="value-card">
              <Card.Body>
                <div className="icon-box1">
                  <FaWaveSquare />
                </div>
                <h5>Accurate Tuning</h5>
                <p>
                 Stay perfectly in tune. Our tuner helps musicians adjust pitch accurately, ensuring better sound quality and improved performance during practice sessions.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <Card className="value-card">
              <Card.Body>
                <div className="icon-box1">
                  <FaLightbulb />
                </div>
                <h5>Innovation</h5>
                <p>
                 We combine technology and music education to create an engaging, easy-to-use platform that supports learning, creativity, and musical growth.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* ===== CTA SECTION ===== */}
      <div className="cta-section text-center">
        <h2>
          Ready to Experience <span>Harmony</span>?
        </h2>
        <p>Join us on our journey to redefine audio experiences.</p>
       <Button
  className="cta-btn"
  onClick={() => navigate("/instruments")}
>
  Explore harmoniQ
</Button>

      </div>

    </div>
  );
}
