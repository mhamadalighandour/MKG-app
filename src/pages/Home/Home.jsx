import React from "react";
import SectionOne from "./Sections/SectionOne";
import SectionTwo from "./Sections/SectionTwo";
import SectionsThree from "./Sections/SectionsThree";
import { Col, Container, Row } from "react-bootstrap";
import { ScrollApp } from "../../components/index";
import "./Home.css";
const Home = () => {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionsThree />
      <section className="py-3">
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <h1 className="title">Our Partners</h1>
              <p className="text-center text-lg-start fs-5 ">
                MKG Future is an alliance of two long-standing companies with
                over 50 years of experience in real estate development. In
                Dyari, we strive to contribute to the vision of our beloved
                kingdom 2030, by raising standards of quality and creativity in
                MKG Future is an alliance of two long-standing companies with
                over 50 years of experience
              </p>
            </Col>
            <Col md={6} sm={12}>
              <ScrollApp />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
