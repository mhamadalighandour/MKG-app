import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
// import Logo from './Footer.css'
import { Link } from "react-router-dom";
import {
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
  BsFacebook,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import Logo from "../../assets/images/logo.png";
import ICR from "../../assets/images/IMG_20220812_231756_740-removebg-preview.png";
import { useContextTranslate } from "../../context/ContextAPI";

const Footer = () => {

  const { contant } = useContextTranslate();

  return (
    <section className="footer py-3">
      <Container>
        <div>
          <img src={Logo} alt="images" className="position-relative " />
        </div>
        <Row>
          <Col className="d-block justify-content-center d-lg-flex">
            <div className="d-flex flex-column navfooter">
              <span className="fs-3  text-light">Links.</span>
              <Link to={"/"} className="text-light ">
                Home
              </Link>
              <Link to={"about"} className="text-light">
                About Us
              </Link>
              <Link to={"services"} className="text-light">
                Our Services
              </Link>
              <Link to={"projects"} className="text-light">
                Our Projects
              </Link>
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            <div className="d-flex  flex-column navfooter">
              <span className="fs-3 text-light">Contact info.</span>
              <a href="##" className="text-light ">
                <BsFillTelephoneFill /> 078552562665
              </a>
              <a href="##" className="text-light">
                <BsFillTelephoneFill /> 078552562665
              </a>
              <a href="##" className="text-light">
                <MdLocationPin /> Baghdad Al-Arasat
              </a>
              <a href="##" className="text-light">
                <TfiEmail /> mkd@gmail.com
              </a>
            </div>
          </Col>
        </Row>
        <div className="text-center text-light ">
          <div className="icons mb-3  d-flex justify-content-center">
            <a href="##">
              <BsFacebook color="#1778F2" className="w-100 h-100" />
            </a>
            <a href="##">
              <BsInstagram color="#fff" />
            </a>
            <a href="##">
              <BsTwitter color="#fff" />
            </a>
            <a href="##">
              <BsWhatsapp color="#fff" />
            </a>
          </div>
          <h6>Copyright @ 2022.All Rights Reserved</h6>
          <h6 className="d-flex justify-content-center align-items-center">
            {contant.icr}
            <span className="p-1">
              <a href="https://www.facebook.com/ICRCompanyPro">
                <img
                  src={ICR}
                  alt=""
                  style={{ width: "30px", cursor: "pointer" }}
                />
              </a>
            </span>
          </h6>
            <h6 className="py-1">
              <a href="mailto:IdeaCodeReality.ICR@gmail.com">
                IdeaCodeReality.ICR@gmail.com : للتواصل
              </a>
            </h6>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
