import React from 'react';
import {motion, useCycle} from 'framer-motion';

const loaderVariants = {
    animationOne: {
        x: [-20,20],
        y: [0,-30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    },
    animationTwo: {
        y: [0, -40],
        x: 0,
        transition: {
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    }
}

const Loader = (props) => {
    const [animation, cycleAnimation] = useCycle("animationTwo")
    return (
        <>
        <motion.div 
        variants={loaderVariants}
        animate={animation}
        className="loader">

        </motion.div>
       
        </>
    );
};

export default Loader;