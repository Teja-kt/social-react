import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import './navbar.css'

const Navbar = () => {
  const { user, logged, setLogged, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setLogged(!logged)
    setUser("")
  }
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <h3>Social React</h3>
      </div>
      <div className="navbar-right">
        <p>Hi! {user.name}</p>
        <button onClick={handleLogout}>Logout</button>
        {/* {() => setLogged(!logged} */}
      </div>
    </div>
  );
};

export default Navbar;
