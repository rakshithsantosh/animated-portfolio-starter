import { motion } from "framer-motion";
import {Link} from 'react-router-dom'

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
      <Link to='/buying'>
        <motion.span
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}>
        Buying
        </motion.span></Link>
        <Link to='/selling'>
        <motion.span
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}>
        Selling
        </motion.span></Link>
        <Link to='/about'>
        <motion.span
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}>
        About
        </motion.span></Link>
    </motion.div>
  );
};

export default Links;