import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import './navbar.css'

const Navbar = () => {
  const { user, logged, setLogged } = useContext(UserContext);

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <h3>Social React</h3>
      </div>
      <div className="navbar-right">
        <p>Hi! {user.name}</p>
        <button onClick={() => setLogged(!logged)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
