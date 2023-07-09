import React from 'react'
import { motion } from "framer-motion";

function Products() {
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
      <h2 className="text-left f-text border-b title m-b">products</h2>
      <h3 className='semi-title'>products currently not available ☺</h3>
    </motion.div>
  )
}

export default Products
