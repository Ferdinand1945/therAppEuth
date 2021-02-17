import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';

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


const Hands = (props) => {
   
    return (
        <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
      <h1>LEFT</h1> | <h1>Right</h1>
       
        </motion.div>
    );
};


export default Hands;