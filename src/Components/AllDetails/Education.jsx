import React from "react";

function Education(props) {
  return (
    <div className="text-left">
      <h5 className="m-t year p-l p-r">{props.year}</h5>
      <h3 className="semi-title m-t">{props.name}</h3>
      <p className="p border-b m-b">{props.des}</p>
    </div>
  );
}

export default Education;
