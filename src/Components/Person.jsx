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
            src=""
            alt="img"
          />
        </div>
      </div>
      <div className="person-details">
        <div>
          <h2>Harsh limbani</h2>
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
            <a href="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" download=''>download_cv <Download className="mx-3" /></a>
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
