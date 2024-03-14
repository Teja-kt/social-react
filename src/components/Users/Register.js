import React, {useContext} from "react";
import { UserContext } from '../../context/userContext'
import './register.css'
const Register = () => {
    const {user, setUser, logged, setLogged, users, setUsers} = useContext(UserContext)
    console.log(user);
    const handleRegister = () => {
        setUsers((prev) => [...prev, user])
        console.log(users);
        setLogged(!logged)
    }
  return (
    <div>
      <div className="Register-model">
        <div className="Register-model-content">
          <div className="Register-header">
            <div className="Register-signup-title"><h3>Register</h3></div>
            {/* onClick={() => setFlag(() => 0)} */}
            <div className="close" onClick={()=>setLogged()}>
              &times;
            </div>
          </div>
          <input type="text" onChange={(e) =>
                setUser((prev) => ({ ...prev, name: e.target.value }))
              }></input>
          <br></br>
          <input type="email" onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }></input>
          <br></br>
          <input type="password" onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }></input>
          <br></br>
          {/* onClick={() => setFlag((prevState) => 2)} */}
          <button className="register-button" onClick={handleRegister} >Register and Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
