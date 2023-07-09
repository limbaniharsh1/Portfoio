import React from "react";
import { motion } from "framer-motion";
import AboutDetails from "./AboutDetails";
import { BrushFill, CodeSlash } from "react-bootstrap-icons";

function About() {
  return (
    <motion.div
      className="back"
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        x: 100,
        ease: "linear",
        duration: 0.3,
        x: { duration: 0.5 },
      }}
      exit={{ x: -100 }}
    >
      <h2 className="text-left f-text border-b title p-b">about me</h2>
      <div className="row">
        <div className="w-50">
          <div className="w-100 p-r">
            <p className="text-left port-p p-t">
              Hello! I’m harsh limbani .<br /> Web designer from INDIA, Gujarat.
              I am fresher in web site design and building, also I am good at
              designing. I love to talk with you about our unique.
            </p>
          </div>
        </div>
        <div className="w-50">
          <div className="w-100 border-l">
            <AboutDetails left={'age'} right={'19'}/>
            <AboutDetails left={'residence'} right={'india'}/>
            <AboutDetails left={'freelance'} right={'not available'}/>
            <AboutDetails left={'address'} right={'katargam,surat,gujarat'}/>
          </div>
        </div>
      </div>
      <h2 className="text-left f-text border-b title p-t m-t">my services</h2>
      <div className="row border-b">
        <div className="w-50">
          <div className="w-100 p-t m-t p-l p-r border-r">
            <div className="i-box">
              <CodeSlash color="white" size='21px'/>
            </div>
              <h3 className="semi-title">Web Development</h3>
              <p className="p p-t">Modern and mobile-ready website that will help you reach all of your marketing.</p>
          </div>
        </div>
        <div className="w-50">
          <div className="w-100 p-t m-t p-l p-r">
            <div className="i-box">
              <BrushFill color="white" size='21px'/>
            </div>
              <h3 className="semi-title">app designing</h3>
              <p className="p p-t">attractive and modern design for app , using photoshop , figma for ios and android</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
