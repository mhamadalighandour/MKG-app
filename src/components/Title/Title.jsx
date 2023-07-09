import React from "react";

const Title = (props) => {
  return (
    <div className="text-center">
      <h1 className="display-6 fw-bolder mb-3">{props.h1}</h1>
      <p className="fs-6 pb-3  m-auto " style={{width:"90%"}}>{props.p}</p>
    </div>
  );
};

export default Title;
