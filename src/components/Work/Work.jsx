import React from 'react'
import'./Work.css'
import upwork from '../../img/Upwork.png'
import fiverr from '../../img/fiverr.png'
import amazon from '../../img/amazon.png'
import shopify from "../../img/Shopify.png"
import facebook from "../../img/Facebook.png"
import {themeContext} from '../../Context'
import { useContext } from "react";
import {motion} from 'framer-motion'
import { Link } from 'react-scroll'

const Work = () => {
  const theme = useContext (themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='work' id='work'>
      {/* left side */}
      <div className="awesome">
            <span style={{color:darkMode?'white':''}}>works for All these </span>
            <span>Brands & Clients</span>
            <span>
              I am a business intelligence student and I work on so many projects
              <br/> 
              during studies for my university FSGT also I worked on many projects 
              <br/>
              for my friends and the other students as a freelancer, I am still not 
              <br/>
              excellent, but at least I am patient and I love web development that's 
              <br/>
              why I am working on it to improve my skills more and more as you can 
              <br/>
              see this portfolio reflect my level.
            </span>
            <Link to="contact" smooth={true} spy={true}>
              <button className="button s-button">Hire Me</button>  
            </Link>
             
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className="w-right">
          <motion.div 
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle">
            <div className="w-secondCircle">
              <img src={upwork} alt="" />
            </div>
            <div className="w-secondCircle">
              <img src={fiverr} alt="" />
            </div>
            <div className="w-secondCircle">
              <img src={amazon} alt="" />
            </div>
            <div className="w-secondCircle">
              <img src={shopify} alt="" />
            </div>
            <div className="w-secondCircle">
              <img src={facebook} alt="" />
            </div>

          </motion.div>
          <div className="w-backCircle blueCircle" ></div>
          <div className="w-backCircle yellowCircle" ></div>
        </div>
    </div>
  )
}

export default Work