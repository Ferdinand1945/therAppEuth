import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import Loader from './Loader';
import useFetch from './useFetch';
import {Link} from 'react-router-dom';
import Accordion from './layout/Acordion';
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
const Patients = (props) => {

    const {data: users, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/users')
console.log(users)
    return (
        <>
        {isPending && <Loader/>}
        <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        >
        <h1>Patients</h1>
        
        {users && users.map(user =>(
                
                <div className="article" key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.lastname}</p>
                    <Accordion title={"Read more about" + ' ' +user.username}>  
                    <p>{user.phone}</p>
                    <p>{user.username}</p>
                    <p>{user.address.city}</p>
                    <p>{user.address.street}</p>
                    <p>{user.address.suite}</p>
                    <p>{user.address.zipcode}</p>
                  
                    </Accordion>
                </div>
              )
                )}
        </motion.div>
        </>
    );
};


export default Patients;