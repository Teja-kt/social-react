import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/userContext';
import useFetch from '../useFetch';
import { IoMdArrowDropdown } from 'react-icons/io';
import './photos.css'

const Photos = (props) => {
    const { user, setUser} = useContext(UserContext);
    const [show, setshow] = useState(false);
  const [rotate, setrotate] = useState(false);
  const handleComments = () => {
    setshow(!show);
    setrotate(!rotate)
    // console.log(show);
  };

  const postsURL = `https://jsonplaceholder.typicode.com/photos/?albumId=${props.id}`;
  // console.log(props.id);
  const [data] = useFetch(postsURL)

  return (
    <div>
         <div className='main-content'>
            <h2>View Photos <IoMdArrowDropdown onClick={handleComments} className={rotate?'normal':'rotate'} /> </h2>
            {data && data.map((elem) => <div className={show?'display':'hide'} key={elem.id}>
                <h3 className='post-title'>Title : {elem.title}</h3>
                {/* <p className='post-body'>Body : {elem.body}</p><br/> */}
                <img src={elem.url} />
            </div>)}
        </div>
    </div>
  )
}

export default Photos