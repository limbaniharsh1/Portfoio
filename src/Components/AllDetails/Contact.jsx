import React from 'react'
import { motion } from "framer-motion";

function Contact() {
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
      <h2>contact me</h2>
    </motion.div>
  )
}

export default Contact
