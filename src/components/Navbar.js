import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
const navVariant = {
    hidden:{
        y: -200
    },
    visible:{
        y: 0
    }
}
const Navbar = (props) => {
    return (
        <motion.div className="nav" variants={navVariant} initial="hidden" animate="visible">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/report">Report</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/stats">Stats</Link></li>
                
            </ul>
            
        </motion.div>
    );
};

export default Navbar;