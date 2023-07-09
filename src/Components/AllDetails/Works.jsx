import React from 'react'
import { motion } from "framer-motion";
import img1 from './Capture.PNG'
import img2 from './capture2.png'
import git from './git.png'
import Work_List from './Work_List';

function Works() {
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
    exit={{x:-200}}
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
