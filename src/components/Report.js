import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import useFetch from './useFetch';
import axel from '../../src/axel.png';
import face from '../../src/face.png';
import foot from '../../src/foot.png';
import hand from '../../src/hand.png';
import leg from '../../src/leg.png';
import head from '../../src/head.png';
import front from '../../src/front.png';
import back from '../../src/back.png';


import {Link, useParams} from 'react-router-dom';

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


const Report = (props) => {
    const id = useParams()
    return (
        <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
        <div className="inline">
        <div className="box">
        <Link to={`/head/${id}`}>
            <img className="bodypart" src={head}/>
        </Link>
        </div>
        <div className="box">
        <Link to={`/face/${id}`}>
            <img className="bodypart" src={face}/>
        </Link>
        </div>
        <div className="box">
        <Link to={`/axel/${id}`}>
            <img className="bodypart" src={axel}/>
        </Link>
        </div>
        <div className="box">
        <Link to={`/front/${id}`}>
            <img className="bodypart" src={front}/>
        </Link>
        </div>
        <div className="box">
        <Link to={`/back/${id}`}>
            <img className="bodypart" src={back}/>
        </Link>
        </div>
        <div className="box">
        <Link to={`/hands/${id}`}>
            <img className="bodypart" src={hand}/>
        </Link>
        </div>
        <div className="box">
        <Link to={`/leg/${id}`}>
            <img className="bodypart" src={leg}/>
        </Link>
        </div>
        <div className="box">
        <Link to={`/foot/${id}`}>
            <img className="bodypart" src={foot}/>
        </Link>
        </div> 
        </div>
        </motion.div>
    );
};


export default Report;