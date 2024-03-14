import React, { useContext, useState } from 'react'
import { UserContext } from '../context/userContext'
import Register from './Register'

const Login = () => {
    const {user, setUser, logged, setLogged, users, setUsers} = useContext(UserContext)
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
        // <Register/>
    }
  return (
    <div>
        <input type='email' placeholder='Email' onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }/>
        <input type='password' placeholder='Password' onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }/>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleCreateAcount}>Create Account</button>
        {register && <Register/>}
    </div>
  )
}

export default Login