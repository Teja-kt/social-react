import { useContext } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Users/Login";
import { UserContext } from "./context/userContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/Home/Main";
import Todos from "./components/Home/Todos";
import Profile from "./components/Home/Profile";
import Register from "./components/Users/Register";
import Posts from "./components/Home/Posts";
import Albums from "./components/Home/Albums";
import Navbar from "./components/Home/Navbar";
import Sidebar from "./components/Home/Sidebar";
import Feeds from "./components/Home/Feeds";
import Photos from "./components/Home/Photos";

export default function App() {
  const { logged, user } = useContext(UserContext);
  return (
    <>
      {!logged ? (
        <Login />
      ) : (
        <BrowserRouter>
        <Navbar/>
        <Sidebar/>
        
          <Routes>
            {/* <Home /> */}
            <Route index path="/feeds" element={<Feeds />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/todos" element={<Todos />} />
            <Route path="/album" element={<Albums />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
