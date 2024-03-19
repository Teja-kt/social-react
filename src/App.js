import { useContext } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Users/Login";
import { UserContext } from "./context/userContext";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


export default function App() {
  const { logged, user } = useContext(UserContext);
  return (
    <>
      {/* <BrowserRouter> */}
      {!logged ? <Login /> : <Home />}

      {/* <Routes> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/" element={logged ? <Home /> : <Navigate to="/login" />} /> */}
      {/* </Routes> */}
    {/* </BrowserRouter> */}
      
    </>
  );
}
