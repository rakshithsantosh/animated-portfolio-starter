import './navbar.scss'
import {motion} from "framer-motion"

function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <div className="wrapper">
            <div>
                <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} className='first'>Ravi</motion.span>
                <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} className='second'>Homes</motion.span>
            </div>
            <div className="social">
                <motion.a initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} href=""><img src="/facebook.png" alt="" /></motion.a>
                <motion.a initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} href=""><img src="/instagram.png" alt="" /></motion.a>
                <motion.a initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} href=""><img src="/youtube.png" alt="" /></motion.a>
                <motion.a initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} href=""><img src="/dribbble.png" alt="" /></motion.a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
