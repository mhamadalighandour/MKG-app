import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardServices = (props) => {
  return (
    <Col lg={4} md={6} className="text-center">
      <div className="radius-border m-2 position-relative card-ser">
        <Link to={props.to}>
          <img src={props.img} alt="images" className="w-100 m-auto" />
          <div className="card-txtx text-black">
            <h2>{props.title}</h2>
            <p className="w-100 fs-5">{props.par}</p>
          </div>
        </Link>
      </div>
    </Col>
  );
};

export default CardServices;
