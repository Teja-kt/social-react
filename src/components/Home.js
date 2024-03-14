import React, {useContext} from 'react'
import { UserContext } from '../context/userContext'

const Home = () => {
    const {user, logged, setLogged} = useContext(UserContext)
  return (
    <div>Home! Hello {user.name}
        <button onClick={()=>setLogged(!logged)}>Logout</button>
    </div>
  )
}

export default Home