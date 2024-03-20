import React, {useContext} from "react";
import { UserContext } from '../../context/userContext'
import './register.css'
const Register = ({onUpdateData }) => {
    const {user, setUser, logged, setLogged, users, setUsers} = useContext(UserContext)

    const handleClose = () => {
      onUpdateData(0)
    }
    const handleRegister = () => {
        setUsers((prev) => [...prev, user])
        onUpdateData(0)
        // setUser("")
        setLogged(!logged)
    }
  return (
    <div>
      <div className="Register-model">
        <div className="Register-model-content">
          <div className="Register-header">
            <div className="register-close-div">
            <div className="Register-signup-title"><h3>Register</h3></div>
            <div className="close" onClick={handleClose}>
              &times;
            </div>
            </div>
            
          </div>
          <input type="text" placeholder="Name" onChange={(e) =>
                setUser((prev) => ({ ...prev, name: e.target.value }))
              }></input>
          <br></br>
          <input type="email" placeholder="Email" onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }></input>
          <br></br>
          <input type="password" placeholder="Password" onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }></input>
          <br></br>
          <button className="register-button" onClick={handleRegister} >Register and Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
