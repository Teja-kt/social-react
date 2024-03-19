import { useContext } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Users/Login";
import { UserContext } from "./context/userContext";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Main from "./components/Home/Main";
import Todos from "./components/Home/Todos";
import Profile from "./components/Home/Profile";
import Register from "./components/Users/Register";
import Posts from "./components/Home/Posts";
import Albums from "./components/Home/Albums";


export default function App() {
  const { logged, user } = useContext(UserContext);
  return (
    <>
    <BrowserRouter>
      {!logged ? <Login /> : <Home />}
      <Routes>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/todos' element={<Todos/>}/>
        <Route path='/album' element={<Albums/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
