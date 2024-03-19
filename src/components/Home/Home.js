import React, { useContext } from 'react'
import Navbar from './Navbar'
import './home.css'
import Main from './Main'
import { UserContext } from '../../context/userContext'
import { useState, useEffect } from 'react'
import useFetch from '../useFetch'

const Home = () => {
    const {user} = useContext(UserContext)


  return (
    <div className='home-container'>
      <Navbar/>
      <Main id={user.name}/>
    </div>
  )
}

export default Home