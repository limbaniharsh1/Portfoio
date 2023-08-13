import React from 'react'
import { motion } from "framer-motion";

function Blog() {
  const containerVarient = {
    hidden:{
      opacity:0,
      x:"100vw"
    },
    visible:{
      opacity:1,
      transition:{type:"spring",
      mass:0.4,
      dumping:0,
      when:"beforeChildren",
      staggerChildren:0.4}
    },
    exit:{
      x:"-100vw",
      transition:{ease:"easeInOut"}
    }
  }
  return (
    <motion.div
    className="back"
    variants={containerVarient}
    initial="hidden"
    animate="visible"
    // transition={{
    //   type: "spring",
    //   stiffness: 300,
    //   x: 100,
    //   ease: "linear",
    //   duration: 0.3,
    //   x: { duration: 0.5 },
    // }}
    exit="exit"
    >
      <h2>blog</h2>
    </motion.div>
  )
}

export default Blog
