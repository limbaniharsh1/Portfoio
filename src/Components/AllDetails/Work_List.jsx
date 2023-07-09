import React from "react";

function Work_List(props) {
  return (
    <div className="border-b m-t p-t">
      <h3 className="semi-title m-b">{props.name}</h3>
      <a href={props.link} target="blank">
        <img src={props.img} alt="img" className="works-img" />
      </a>
      <p className="p m-t p-t">{props.des}</p>
    </div>
  );
}

export default Work_List;
