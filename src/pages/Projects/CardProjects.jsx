import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProjects = (props) => {
  return (
    <>
      <Col sm={12} lg={props.col_lg} className="">
        <Link to={props.link}>
          <div className="d-flex radius-border card-pro my-3 mx-auto">
            <img src={props.img} />
            <div className="p-3 text-center ">
              <h1 className="text-black">{props.h1}</h1>
              <p className="color-b">{props.p.substring(0, 105)}...</p>
              <span className="icon-pro">{props.icon}</span>
            </div>
          </div>
        </Link>
      </Col>
      <Col lg={props.col}></Col>
      <Col lg={props.col}></Col>
    </>
  );
};

export default CardProjects;
