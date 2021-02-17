import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import Loader from './Loader';
import useFetch from './useFetch';
import {Link} from 'react-router-dom';
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
    }
}
const Articles = (props) => {

    const {data: articles, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/posts')

    return (
        <>
        {isPending && <Loader/>}
        <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        >
        <h1>Articles</h1>
        
        {articles && articles.map(article =>(
                <Link key={article.id} to={`/article/${article.id}`}>
                <div className="article" key={article.id}>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                </div>
                </Link> )
                )}
        </motion.div>
        </>
    );
};


export default Articles;