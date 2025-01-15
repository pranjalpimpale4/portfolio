import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { mail, phone, linkedin, github1, leetcode, hackerrank, insta } from "../assets";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Pranjal Pimpale",
          from_email: form.email,
          to_email: "pranjalpimpale4@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText} style={{ marginBottom: '30px' }}>Contact.</h3>

        <div className="mb-5">
          <div className="flex items-center mb-3">
            <img src={phone} alt="phone" className="w-8 h-5 rounded-lg mr-5" />
            <p className={styles.sectionSubText}>+1 530-636-5789 / +91 8454063824</p>
          </div>

          <div className="flex items-center mb-3">
            <img src={mail} alt="mail" className="w-8 h-5 rounded-lg mr-5" />
            <p className={styles.sectionSubText}>pranjalpimpale4@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center mb-5">
          <a href="https://www.linkedin.com/in/pranjal-pimpale-7094a919b/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="w-12 h-12 rounded-lg mr-8" />
          </a>

          <a href="https://github.com/pranjalpimpale4" target="_blank" rel="noopener noreferrer">
            <img src={github1} alt="GitHub" className="w-12 h-12 rounded-lg mr-8" />
          </a>

          <a href="https://leetcode.com/pranjal616/" target="_blank" rel="noopener noreferrer">
            <img src={leetcode} alt="leetcode" className="w-12 h-12 rounded-lg mr-8" />
          </a>

          <a href="https://www.hackerrank.com/pranjalpimpale4" target="_blank" rel="noopener noreferrer">
            <img src={hackerrank} alt="hackerrank" className="w-12 h-12 rounded-lg mr-8" />
          </a>

          <a href="https://www.instagram.com/pranjalpimpale/" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="insta" className="w-12 h-12 rounded-lg mr-8" />
          </a>
        </div>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
