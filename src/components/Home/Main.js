import React, { useContext } from 'react'
import './main.css'
import { useState, useEffect } from 'react';
import { UserContext } from '../../context/userContext';

const Main = (props) => {
    const [data, setdata] = useState([]);
    const { user, setUser, logged, setLogged, users} =
    useContext(UserContext);

  const url = `https://jsonplaceholder.typicode.com/posts/?userId=${props.id}`;

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setdata(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);
    const handlePosts = () => {

    }
  return (
    <div className='page'>
        <div className='sidebar'>
            <p onClick={handlePosts}>Posts</p>
            {/* <p onClick={handleby}>Feed</p> */}
        </div>
        <div className='main-content'>
            <h2>Posts {}</h2>
            {data && data.map((elem) => <div key={elem.id}>
                <h4>{elem.title}</h4>
                <p>{elem.body}</p>
                <hr/>
            </div>)}
        </div>
    </div>
  )
}

export default Main