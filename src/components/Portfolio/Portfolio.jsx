import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "John Smith",
    img: "https://images.unsplash.com/photo-1509988892867-8bf3ee9e3afa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8MTcyOTI1OHx8ZW58MHx8fHx8",
    desc: "Working with Ravi was a game-changer! Their market knowledge and strategic pricing helped us sell our home quickly and for a great price. They handled everything from staging to negotiations with professionalism and expertise. We couldn't be happier with the results!",
  },
  {
    id: 2,
    title: "David Martinez:",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxNzI5MjU4fHxlbnwwfHx8fHw%3D",
    desc: "We were fortunate to have Ravi by our side during our home buying journey. Their patience, dedication, and attention to detail made the process smooth and stress-free. They truly listened to our needs and found us the perfect home within our budget. Highly recommend!",
  },
  {
    id: 3,
    title: "Emily Thompson",
    img: "https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "As a real estate investor, I've worked with many agents, but none compare to Ravi. Their in-depth knowledge of the market and investment properties is unmatched. They helped me identify lucrative opportunities and negotiate deals that have greatly boosted my portfolio. A true asset to any investor!",
  },
  {
    id: 4,
    title: "Michael Lee",
    img: "https://images.unsplash.com/photo-1475823678248-624fc6f85785?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8MTcyOTI1OHx8ZW58MHx8fHx8",
    desc: "Buying our first home seemed daunting, but Ravi made it an enjoyable experience! They patiently walked us through every step, from pre-approval to closing, and provided valuable insights along the way. Their dedication and genuine care for their clients set them apart. We're forever grateful!",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Testimonials</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;