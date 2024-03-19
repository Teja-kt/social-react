import React, { useContext } from 'react'
import './main.css'
import { useState, useEffect } from 'react';
import useFetch from '../useFetch'
import { UserContext } from '../../context/userContext';
import Comments from './Comments';
import { Link } from 'react-router-dom';

const Main = (props) => {
    // const [data, setdata] = useState([]);
    const { user, setUser} = useContext(UserContext);

  const postsURL = `https://jsonplaceholder.typicode.com/posts/?userId=${props.id}`;
//   const nameURL = `https://jsonplaceholder.typicode.com/users/?id=${props.id}`;
  const [data] = useFetch(postsURL)
//   const [name] = useFetch(nameURL)
//   console.log({name});

  return (
    <div className='page'>
        <div className='sidebar'>
            {/* <p >Posts</p> */}
            <Link to='/posts'><p className='sidebar-links'>Posts</p></Link>
            <Link to='/album'><p className='sidebar-links'>Albums</p></Link>
            <Link to='/todos'><p className='sidebar-links'>Todos</p></Link>
            <Link to='/profile'><p className='sidebar-links'>Profile</p></Link>
        </div>
        <div className='main-content'>
            {/* <h2>Posts </h2> */}
            {/* {data && data.map((elem) => <div className='post-container' key={elem.id}>
                <h3 className='post-title'>Title : {elem.title}</h3>
                <p className='post-body'>Body : {elem.body}</p><br/>
                <Comments id={elem.id}/>
                <hr/>
            </div>)} */}
            
        </div>
    </div>
  )
}

export default Main