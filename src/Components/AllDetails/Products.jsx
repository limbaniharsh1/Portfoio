import React from 'react'
import { motion } from "framer-motion";

function Products() {

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
    // transition={{
    //   type: "spring",
    //   stiffness: 300,
    //   x: 100,
    //   ease: "linear",
    //   duration: 0.3,
    //   x: { duration: 0.5 },
    // }}
    >
      <h2 className="text-left f-text border-b title m-b">products</h2>
      <h3 className='semi-title'>products currently not available ☺</h3>
    </motion.div>
  )
}

export default Products
