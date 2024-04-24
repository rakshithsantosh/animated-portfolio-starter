import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        I specialize in guiding you through the process of finding your dream home 
          <br /> and making your real estate goals a reality.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Tailored</motion.b> strategies
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b>  property.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Market Analysis and Valuation</h2>
          <p>
            We determine the market value of properties, helping sellers set competitive prices and advising buyers on fair offers.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Marketing and Representation</h2>
          <p>
              With extensive experience and resources, we market properties effectively, attract potential buyers, and skillfully negotiate deals to maximize value for our clients, whether they're buying or selling.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Smooth Transaction Management</h2>
          <p>
              We take care of the complex paperwork, coordinate all necessary inspections and appraisals, and guide clients through the entire process, ensuring a seamless and stress-free experience from start to finish.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Ongoing Support and Expertise</h2>
          <p>
              Beyond the transaction, We offer ongoing support, providing valuable market insights, legal advice, and recommendations, ensuring clients have the guidance they need even after the deal is done.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;