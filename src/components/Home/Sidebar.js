import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { MdFeed } from "react-icons/md";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { LuListTodo } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import './sidebar.css'

const Sidebar = () => {
  return (
    <div>
        <div className='sidebar'>
            {/* <Link to='/posts'><p>Posts</p></Link> */}
            <Link to='/feeds' className='sidebar-text'><p className='sidebar-links'><p className='sidebar-text'>AllFeeds</p>  <p className='sidebar-icons'><FaHome /></p></p></Link>
            <Link to='/posts' className='sidebar-text'><p className='sidebar-links'><p className='sidebar-text'>Posts</p> <p className='sidebar-icons'><MdFeed /></p></p></Link>
            <Link to='/album' className='sidebar-text'><p className='sidebar-links'><p className='sidebar-text'>Albums</p> <p className='sidebar-icons'><BiSolidPhotoAlbum /></p> </p></Link>
            <Link to='/todos' className='sidebar-text'><p className='sidebar-links'><p className='sidebar-text'>Todos</p> <p className='sidebar-icons'><LuListTodo /></p></p></Link>
            <Link to='/profile' className='sidebar-text'><p className='sidebar-links'><p className='sidebar-text'>Profile</p> <p className='sidebar-icons'><CgProfile /></p></p></Link>
        </div>
    </div>
  )
}

export default Sidebar