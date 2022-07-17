import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import resume from './resume.pdf'
import {themeContext} from '../../Context'
import { useContext } from "react";
import {motion} from 'framer-motion' 


const Services = () => {

    const transition={
        duration: 1,
        type:'spring'
    }
  const theme = useContext (themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='services'>
        {/* left side */}
        <div className="awesome">
            <span style={{color:darkMode?'white':''}}>My Awesome</span>
            <span>Services</span>
            <span>Design can be art. Design can be aesthetics. Design is so simple,
                <br/>
                 that's why it is so complicated.
                 </span>
            <a href={resume} download>
            <button className="button s-button">Download Cv</button>  
            </a>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
            <motion.div
            initial={{left:'25rem'}}
            whileInView={{left:'16rem'}}
            transition={transition}
            >
                <Card
                emoji={HeartEmoji}
                heading={'Design'} 
                detail={'Figma, Sketch, PhotoSHop, Adobe, Adobe xd'}
                />
            </motion.div>
            {/* second card */}
            <motion.div 
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-2rem" }}
            transition={transition} >
                <Card
                emoji={Glasses}
                heading={'Developer'}
                detail={'Html, Css, JavaScript, php, React, NodeJs'}
                />
            </motion.div>
            {/* third card */}
            <motion.div
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "14rem" }}
            transition={transition}>
                <Card
                emoji={Humble}
                heading={'UI/UX'}
                detail={'Figma, Adobe XD, Adobe After Effects'}
                />
            </motion.div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services