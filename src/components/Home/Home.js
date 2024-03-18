import React, { useContext } from 'react'
// import { UserContext } from '../../context/userContext'
import Navbar from './Navbar'
import './home.css'
import Main from './Main'
import { UserContext } from '../../context/userContext'
import { useState, useEffect } from 'react'

const Home = () => {
    const {user, logged, setLogged} = useContext(UserContext)
    const [data, setdata] = useState([]);

    const url = `https://jsonplaceholder.typicode.com/posts/?userId=${user.name}`;

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
  return (
    <div className='home-container'>
      <Navbar/>
      <Main id={user.name}/>
    </div>
  )
}

export default Home