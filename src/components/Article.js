import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';
import {motion} from 'framer-motion';

const Article = (props) => {
const {id} = useParams();
const {data: post, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/posts/' + id);
const history = useHistory();

const handleDelete =()=>{
    console.log('delete')
    fetch('https://jsonplaceholder.typicode.com/posts/' + post.id, {
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
    return (
        <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        >
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {post && (
                <article className="article">
                    <h2>{post.title}</h2>
                    
                    <p>{post.body}</p>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </motion.div>
    );
};


export default Article;