import React from "react";
import Photo6 from "../../assets/images/Apple1.png";
import Photo7 from "../../assets/images/Apple2.png";
import Photo8 from "../../assets/images/Group 3.png";
import "./ScrollApp.css";
const ScrollApp = () => {
  return (
    <div className="images  m-auto d-flex justify-contant-center">
      <img src={Photo6} alt={""} className="w-75 mx-2 my-5 " />
      <img src={Photo7} alt={""} className="w-75 mx-2 my-5" />
      <img src={Photo7} alt={""} className="w-75 mx-2 my-5" />
      <img src={Photo8} alt={""} className="w-75 mx-2 my-5 " />
      <img src={Photo7} alt={""} className="w-75 mx-2 my-5" />
      <img src={Photo7} alt={""} className="w-75 mx-2 my-5" />
      <img src={Photo8} alt={""} className="w-75 mx-2 my-5 " />
      <img src={Photo7} alt={""} className="w-75 mx-2 my-5" />
      <img src={Photo7} alt={""} className="w-75 mx-2 my-5" />
    </div>
  );
};

export default ScrollApp;
