import React from "react";

function language(props) {
  return (
    <div>
      <div className="row justify-content-between m-b m-t">
        <p className="p">{props.lang}</p>
        <p className="p">{props.per}</p>
      </div>
      <div className="lang-main">
        <div className="lang-per" style={{height:'100%',width:`${props.per}`,backgroundColor:'#78CC6D'}}></div>
      </div>
    </div>
  );
}

export default language;
