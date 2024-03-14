import React from 'react'
// import { UserContext } from '../../context/userContext'
import Navbar from './Navbar'
import './home.css'

const Home = () => {
    // const {user, logged, setLogged} = useContext(UserContext)
  return (
    <div className='home-container'>
      <Navbar/>
    </div>
  )
}

export default Home