import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import "./PageBanner.css";


export default function PageBanner({ title, bgImage }) {
  return (
    <div
      className="page-banner"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <Container className="text-center banner-content">
          <h1>{title}</h1>

          <Breadcrumb className="justify-content-center">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>{title}</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>
    </div>
  );
}
