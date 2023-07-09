import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero">
      <Container className=" ">
        <Row>
          <Col>
            <div className="bg-opacity text-center px-3 py-5  radius-border">
              <h1 className="color-b display-5 fw-bold">
                Welcome To MKG FUTURE
              </h1>
              <p className="fs-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae perferendis <br /> repellendus labore illum sed
                incidunt exercitationem!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
