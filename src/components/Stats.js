import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';
import {motion} from 'framer-motion';

const Stats = (props) => {
const {id} = useParams();
const {data: user, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/users/' + id);
const history = useHistory();

const handleDelete =()=>{
    console.log('delete')
    fetch('https://jsonplaceholder.typicode.com/users/' + user.id, {
        method: 'DELETE'
    }).then(()=>{
        history.push('/')
    })
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
    }
}
console.log('user---->',user)
    return (
        
        <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        >
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {user && (
                <article className="article">
                    <h2>{user.name}</h2>
                    
                    <p>{user.lastname}</p>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </motion.div>
    );
};


export default Stats;