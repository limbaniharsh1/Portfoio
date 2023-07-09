import React from "react";

function AboutDetails(props) {
  return (
    <div className="row border-b p-t" >
      <div className="w-50">
        <div className="w-100"><span className="back-color" style={{fontSize:'12px'}}>{props.left} :</span></div>
      </div>
      <div className="w-50">
        <div className="w-100"><span style={{fontSize:'12px'}}>{props.right}</span></div>
      </div>
    </div>
  );
}

export default AboutDetails;
