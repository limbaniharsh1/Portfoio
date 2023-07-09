import React from "react";

function AboutDetails(props) {
  return (
    <div className="row border-b p-t" >
      <div className="w-50">
        <div className="w-100 text-left p-l"><span className="back-color" style={{fontSize:'1.2rem'}}>{props.left} :</span></div>
      </div>
      <div className="w-50">
        <div className="w-100 text-right"><span style={{fontSize:'1.2rem'}}>{props.right}</span></div>
      </div>
    </div>
  );
}

export default AboutDetails;
