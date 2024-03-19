import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <div className='sidebar'>
            {/* <Link to='/posts'><p>Posts</p></Link> */}
            <Link to='/posts'><p>Podts</p></Link>
            <Link to='/todos'><p>Todos</p></Link>
        </div>
    </div>
  )
}

export default Sidebar