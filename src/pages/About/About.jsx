import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Photo from "../../assets/images/patrick-tomasso-SVVTZtTGyaU-unsplash.png";

import "./About.css";
import { ScrollApp } from "../../components/index";
const About = () => {
  return (
    <Container className="py-3 about">
      <div className="text-center">
        <h1 className="display-6 fw-bolder mb-3">About Us</h1>
        <p className="fs-6 pb-3">
          MKG Future is an alliance of two long-standing companies with over 50
          years of experience in real estate development. In Dyari, we strive to
          contribute to the vision of our beloved kingdom 2030, by raising
          standards of quality and creativity in MKG Future is an alliance of
          two long-standing companies with over 50 years of experience in real
          estate development. In Dyari, we strive to contribute to the vision of
          our beloved kingdom 2030, by raising standards of quality and MKG
          Future is an alliance of two long-standing companies with over 50
          years of experience in real estate development. In Dyari, we strive to
          contribute to the vision of our beloved kingdom 2030, by raising
          standards of quality and creativity in MKG Future is an alliance of
          two long-standing companies with over 50 years of experience in real
          estate development. In Dyari, we strive to contribute to the vision of
          our beloved kingdom 2030, by raising standards of quality and
          creativity in
        </p>
      </div>
      <Row className="card-abuot">
        <Col lg={6} sm={12} className="position-relative d-flex">
          <img
            src={Photo}
            alt="images"
            className="w-75 radius-border position-relative m-auto"
          />
          <h3>Our Vision</h3>
        </Col>
        <Col lg={6} sm={12}>
          <p className="fs-6 py-3">
            ofand efficiency of the team and their dedication to achieve the
            full satisfaction of our customers. At Dyari, we pledge to provide
            our customers with innovative residential and commercial real estate
            products and solutions that meet their needs at competitive prices,
            and we are committed to serving them with all credibility and
            professionalism because we belief that our customers’ satisfaction
            is the foundation of our success.. and we are committed to serving
            them with all credibility and professionalism because we belief that
            our customers’ satisfaction is the foundation of our success.. s the
            foundation of our success.
          </p>
        </Col>
      </Row>
      <Row className="card-abuot py-3">
        <Col lg={6} sm={12} className="position-relative d-flex order-lg-2">
          <img
            src={Photo}
            alt="images"
            className="w-75 radius-border position-relative m-auto "
          />
          <h3>Our Vision</h3>
        </Col>
        <Col lg={6} sm={12} className="order-lg-">
          <p className="fs-6 py-3 ">
            ofand efficiency of the team and their dedication to achieve the
            full satisfaction of our customers. At Dyari, we pledge to provide
            our customers with innovative residential and commercial real estate
            products and solutions that meet their needs at competitive prices,
            and we are committed to serving them with all credibility and
            professionalism because we belief that our customers’ satisfaction
            is the foundation of our success.. and we are committed to serving
            them with all credibility and professionalism because we belief that
            our customers’ satisfaction is the foundation of our success.. s the
            foundation of our success.
          </p>
        </Col>
      </Row>
      <Row className="card-abuot">
        <Col lg={6} sm={12} className="position-relative d-flex">
          <img
            src={Photo}
            alt="images"
            className="w-75 radius-border position-relative m-auto"
          />
          <h3>Our Vision</h3>
        </Col>
        <Col lg={6} sm={12}>
          <p className="fs-6 py-3">
            ofand efficiency of the team and their dedication to achieve the
            full satisfaction of our customers. At Dyari, we pledge to provide
            our customers with innovative residential and commercial real estate
            products and solutions that meet their needs at competitive prices,
            and we are committed to serving them with all credibility and
            professionalism because we belief that our customers’ satisfaction
            is the foundation of our success.. and we are committed to serving
            them with all credibility and professionalism because we belief that
            our customers’ satisfaction is the foundation of our success.. s the
            foundation of our success.
          </p>
        </Col>
      </Row>
      <Row className="card-abuot py-3">
        <Col lg={6} sm={12} className="position-relative d-flex order-lg-2">
          <img
            src={Photo}
            alt="images"
            className="w-75 radius-border position-relative m-auto "
          />
          <h3>Our Vision</h3>
        </Col>
        <Col
          lg={6}
          sm={12}
          className="order-lg-1 d-flex justify-contant-center py-5"
        >
          <ScrollApp />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
