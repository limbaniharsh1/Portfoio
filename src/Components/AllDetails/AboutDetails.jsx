import React from "react";

function AboutDetails(props) {
  return (
    <div className="row border-b p-t flex-wrap">
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <div className="w-100 text-left p-l"><span className="back-color" style={{fontSize:'0.8em'}}>{props.left} :</span></div>
      </div>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center row">
        <div className="w-100 text-right p-r"><span style={{fontSize:'0.8em'}}>{props.right}</span></div>
      </div>
    </div>
  );
}

export default AboutDetails;
