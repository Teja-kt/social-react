import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/userContext'
import Register from './Register'
import './login.css'

const Login = () => {
    const {user, setUser, logged, setLogged, users} = useContext(UserContext)
    const [register, setregister] = useState(0)

    const updateData = (newData) => {
      setregister(newData);
    };

    const handleLogin = () => {
        const verifyUser = users.find((el)=>(el.email===user.email && el.password===user.password))
        if(verifyUser){
            setLogged(!logged)
        }
    }
    const handleCreateAcount = () => {
        setregister(1)
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
        
        {register===1 && <Register onUpdateData={updateData}/>}
    </div>
  )
}

export default Login