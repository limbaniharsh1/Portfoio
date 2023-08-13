import React from 'react'
import { motion } from "framer-motion";
import img1 from './Capture.PNG'
import img2 from './capture2.png'
import git from './git.png'
import Work_List from './Work_List';

function Works() {

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
    className="back"
    variants={containerVarient}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <h2 className="text-left f-text border-b title">works</h2>
      <div>
        <Work_List name='furniture web' img={img1} link='https://tranquil-lamington-fa533f.netlify.app/' des='in this project many pages like home page , about us page , contact us
        page and many more _____ this project with attract ui , smooth
        experience , switch color etc.. project made by using html , css ,
        mediaquery , jquery'/>
        <Work_List name='food web' img={img2} link='https://prismatic-stroopwafel-d2eb2b.netlify.app/' des='this project help to buy fresh vegitables and fruits that healthy and natural , project made by using html , css ,
        mediaquery , jquery'/>
        <Work_List name='other projects' img={git} link='https://github.com/limbaniharsh1' des='my other projects are available in github you can see my profile , all projects are based on react.js'/>
      </div>
    </motion.div>
  )
}

export default Works
