import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import './navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logged, setLogged, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser("")
    setLogged(!logged)
  }

  const handleSearch = () => {

  }
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <h3>Social React</h3>
      </div>
      <div className="navbar-right">
        <p>Hi! {user.name}</p>
        <input className="nav-input" type="text" placeholder="search by user" onChange={handleSearch}/>
       <button className="nav-logout" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
