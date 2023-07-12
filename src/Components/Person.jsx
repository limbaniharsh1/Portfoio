import React from "react";
import { Download, Github, Linkedin, Telephone } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";
import {cv} from './Screenshot.png'

function Person() {
  return (
    <div className="person" style={{ zIndex: 99 }}>
      <div className="person-img">
        <div className="img">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQEOGh_9COab6g/profile-displayphoto-shrink_800_800/0/1640755144164?e=2147483647&v=beta&t=V_CEcS5NhukqXctU5e_OBCl4W8ZeX1cj1nDSGsc4WPs"
            alt="img"
          />
        </div>
      </div>
      <div className="person-details">
        <div>
          <h2>Harsh limbani</h2>
          {/* <p>front end developer</p> */}
          <p>
            <TypewriterComponent
              options={{
                autoStart: true,
                delay: 40,
                loop: true,
                strings: ["front end developer", "web designer"],
              }}
            />
          </p>
          <div>
            <a href="https://www.linkedin.com/in/harsh-limbani-b9475a228/" target="blank"> <Linkedin className="icon" /></a>
            <a href="https://github.com/limbaniharsh1" target="blank"><Github className="icon" /></a>
          </div>
        </div>
        <div className="bottom-person">
          <div className="download">
            download_cv <Download className="mx-3" />
          </div>
          <div className="contect">
            <Link to='/contact' className="link">
              contect_me <Telephone className="mx-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Person;
