import React from "react";
import { motion } from "framer-motion";
import AboutDetails from "./AboutDetails";
import { BrushFill, CodeSlash } from "react-bootstrap-icons";

function About() {

  const containerVarient = {
    hidden:{
      opacity:0,
      x:"-50vh",
      transition:{delay:1.5,duration:1.5}
    },
    visible:{
      opacity:1,
      x:"0vh",
      transition:{duration:1}
    },
    exit:{
      x:"-10vw",
      opacity:0,
      transition:{ease:"easeInOut"}
    }
  }

  return (
    <motion.div
      className="back"
      variants={containerVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
      // transition={{
      //   type: "spring",
      //   stiffness: 300,
      //   x: 100,
      //   ease: "linear",
      //   duration: 0.3,
      //   x: { duration: 0.5 },
      // }}
    >
      <h2 className="text-left f-text border-b title p-b">about me</h2>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="w-100 p-r">
            <p className="text-left port-p p-t" style={{fontSize:'1.2rem'}}>
              Hello! I’m harsh limbani .<br /> Web designer from INDIA, Gujarat.
              I am fresher in web site design and building, also I am good at
              designing. I love to talk with you about our unique.
            </p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="w-100 border-l">
            <AboutDetails left={'age'} right={'19'}/>
            <AboutDetails left={'residence'} right={'india'}/>
            <AboutDetails left={'freelance'} right={'not available'}/>
            <AboutDetails left={'address'} right={`katargam,surat`}/>
          </div>
        </div>
      </div>
      <h2 className="text-left f-text border-b title p-t m-t">my services</h2>
      <div className="row border-b">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="w-100 p-t m-t p-l p-r border-r">
            <div className="i-box">
              <CodeSlash color="white" size='21px'/>
            </div>
              <h3 className="semi-title">Web Development</h3>
              <p className="p p-t">Modern and mobile-ready website that will help you reach all of your marketing.</p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
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
