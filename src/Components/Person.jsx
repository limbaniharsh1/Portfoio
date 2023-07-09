import React from "react";
import { Download, Github, Linkedin, Telephone } from "react-bootstrap-icons";

function Person() {
  return (
    <div className="person" style={{zIndex:99}}>
      <div className="person-img">
        <div className="img">
          <img src="https://media.licdn.com/dms/image/D4E03AQEOGh_9COab6g/profile-displayphoto-shrink_800_800/0/1640755144164?e=2147483647&v=beta&t=V_CEcS5NhukqXctU5e_OBCl4W8ZeX1cj1nDSGsc4WPs" alt="img"/>
        </div>
      </div>
      <div className="person-details">
        <div>
          <h2>Harsh limbani</h2>
          <p>front end developer</p>
          <div>
            <Github className="icon" />
            <Linkedin className="icon" />
          </div>
        </div>
        <div className="bottom-person">
          <div className="download">download_cv <Download className="mx-3"/></div>
          <div className="contect">contect_me <Telephone className="mx-3"/></div>
        </div>
      </div>
    </div>
  );
}

export default Person;
