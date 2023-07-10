import React from "react";
import { motion } from "framer-motion";
import AboutDetails from "./AboutDetails";

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
      exit={{ x: -200 }}
    >
      <h2 className="text-left f-text border-b title m-b">get in touch</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.126345827654!2d72.81691827513485!3d21.226837880472523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ebc1864521d%3A0xd9068cfaa9920e25!2sAkshardeep%20Rd%2C%20Vishnu%20Nager%2C%20Singanpor%2C%20Surat%2C%20Gujarat%20395004!5e0!3m2!1sen!2sin!4v1688898263266!5m2!1sen!2sin"
        className="map m-t"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="row m-t p-t">
        <div className="w-50">
          <div className="w-100">
            <AboutDetails left={"address"} right={"katargam,surat,gujarat"} />
            <AboutDetails left={"phone"} right={"+91 9875168369"} />
          </div>
        </div>
        <div className="w-50">
          <div className="w-100">
            <AboutDetails left={"e-mail"} right={"limbaniharsh1@gmail.com"} />
            <AboutDetails left={"freelance"} right={"not available"} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;