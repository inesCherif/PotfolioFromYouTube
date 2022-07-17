import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import {themeContext} from '../../Context'
import { useContext } from "react";
import {motion} from 'framer-motion'
import { Link } from 'react-scroll'

const Intro = () => {

    const transition ={
        duration: 2, type: 'spring' 
    }



    const theme = useContext (themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode?'white':''}}>Hi! I Am</span>
                <span>Ines Cherif</span>
                <span>Front-End Developer with high 
                level of experience in web designing
                and development, producing the 
                quality work </span>
            </div>
            <Link to="contact" smooth={true} spy={true}>
                <button className="button i-button">Hire me</button> 
            </Link>
            
            <div className="i-icons">
                <a href='https://github.com/inesCherif'>
                    <img src={Github} alt="Github-image" />  
                </a>
                
                <a href='https://www.linkedin.com/in/ines-cherif-b32143233/'>
                    <img src={LinkedIn} alt="LinkedIn-image" />
                </a>
                
                <a href='https://www.instagram.com/ines._.cherif/?hl=fr'>
                    <img src={Instagram} alt="Instagram-image" />
                </a>
                
            </div>



        </div>
        <div className="i-right">
        <img src={Vector1} alt="blue" />
        <img src={Vector2} alt="yellow" />
        <img src={boy} alt="boy" />
        <motion.img
        initial={{left:'-36%'}}
        whileInView={{left:'-24%'}}
        transition={transition}
        src={glassesimoji} alt="" />
        <motion.div
        initial={{top:'-4%',left:'74%'}}
        whileInView={{left:'68%'}}
        transition={transition}
        style={{top:'-4%',left:'52%'}}
        className='floating-div'
        >
            <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
        </motion.div>
        <motion.div
        initial={{left:'9rem',top:'18.2rem'}}
        whileInView={{left:'0rem'}}
        transition={transition}
        className='floating-div'
        >
            <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
        </motion.div>

        <div className='blur' style={{backgroundColor:"#edd0ff"}}></div>
        <div className='blur' 
        style={{
            background:'#C1F5FF',
            top:'17rem',
            width:'21rem',
            height:'11rem',
            left:'-9rem'
        }}></div>
        </div>
    </div>
  )
}

export default Intro