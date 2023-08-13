import React from "react";
import { motion } from "framer-motion";
import { Bank } from "react-bootstrap-icons";
import Education from "./Education";
import Language from "./language";

function Resume() {

  const containerVarient = {
    hidden:{
      opacity:0,
      transition:0.5,
      x:"-50vh"
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
      className="back resume"
      variants={containerVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2 className="text-left f-text border-b p-b title p-t m-t">resume</h2>
      <div className="p-t p-b">
        <Bank className="i m-t" size="2.5rem" />
        <Education
          year="2022 - now"
          name="bhagawan mahavir uiversity - bachelore degree"
          des="currently i am doing Bachelor in computer application (BCA) from bhagawan
        mahavir university ,surat"
        />
        <Education
          year="2021 - 2023"
          name="red and white multimedia education - cource"
          des="i completed front end developing cource from red and white.... language ---- html , css , media query , j-query , bootstrap , sass , javascript , reatc.js"
        />
        <Education
          year="2018 - 2019"
          name="aspire public school - 10th"
          des="i completed 10th from aspire public school surat in gujarati mediam with 72% persantile"
        />
        <Education
          year="2020 - 2021"
          name="aspire public school - 12th"
          des="i completed 12th commerce stream from aspire public school surat in gujarati mediam with 75% persantile"
        />
      </div>
      <div>
        <h2 className="text-left f-text border-b title p-t">skills</h2>
        <div className="text-left p-t">
          <p className="p m-t">web Development</p>
          <p className="p m-t">web Designing</p>
          <p className="p m-t">app ui design -figma</p>
          <p className="p m-t">photoshop</p>
        </div>
      </div>
      <div>
        <h2 className="text-left f-text border-b title p-t m-t m-b">languages</h2>
        <div className="text-left p-t">
          <Language lang='gujarati' per='90%'/>
          <Language lang='hindi' per='80%'/>
          <Language lang='english' per='60%'/>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
