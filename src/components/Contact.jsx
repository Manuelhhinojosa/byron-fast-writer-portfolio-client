import React from "react";

// libraries
import { motion } from "framer-motion";

// text
import contactLocation from "../assets/data/text";
import contactPhone from "../assets/data/text";
import contactEmail from "../assets/data/text";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {contactLocation.contactLocation}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {contactPhone.contactPhone}
        </motion.p>
        <p className="my-4 ">{contactEmail.contactEmail}</p>
      </div>
    </div>
  );
};

export default Contact;
