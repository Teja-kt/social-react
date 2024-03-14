import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/userContext'
import Register from './Register'
import './login.css'

const Login = () => {
    const {user, setUser, logged, setLogged, users} = useContext(UserContext)
    const [register, setregister] = useState(false)
    // const [verifyLogin, setVerifyLogin] = useState({email:"", password:""})
    const handleLogin = () => {
        // console.log(verifyLogin);
        const verifyUser = users.find((el)=>(el.email===user.email && el.password===user.password))
        if(verifyUser){
            setLogged(!logged)
        }
    }
    const handleCreateAcount = () => {
        setregister(!register)
    }
  return (
    <div className='login-home'>
        <div className='left'>
            <h3>Social React</h3>
            <p>Welcome to the social react platform</p>
        </div>
        <div className='right'>
        <input type='email' placeholder='Email' onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }/>
        <input type='password' placeholder='Password' onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }/>
        <button className='btns' onClick={handleLogin}>Login</button>
        <button className='btns' onClick={handleCreateAcount}>Create Account</button>
        </div>
        
        {register && <Register/>}
    </div>
  )
}

export default Login