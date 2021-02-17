import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import useFetch from './useFetch';

const buttonVariant = {
    visible: {
      x: [0, -20, 20, -20, 0],
      transition: {
        delay: 2
      }
    },
    hover: {
      scale: 1.1,
      textShadow:"0px 0px 8px rgb(255,255,255)",
      boxShadow:"0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
      }
    }
  }


const contentVariants = {
    hidden: {
        opacity: 0,
        x: -200,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 1,
          }
    }, 
    exit: {
        x: '-100vh',
        transition: {
          ease: 'easeInOut'
        }
      }
}


const Home = (props) => {
   
    return (
        <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
        <h1>TherAppEut</h1>
        <form>
        <div>
            <input className="input-text" type="email" placeholder="Username"/>
        </div>
        <div>
            <input className="input-text" type="password" placeholder="Password"/>
        </div>
        <div>
        <motion.button
        variants={buttonVariant}
        whileHover="hover"
        >Login</motion.button>
        </div>
        </form>
       
        </motion.div>
    );
};


export default Home;