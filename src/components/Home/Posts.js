import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext';
import useFetch from '../useFetch';
import Comments from './Comments';

const Posts = () => {
    const { user, setUser} = useContext(UserContext);

  const postsURL = `https://jsonplaceholder.typicode.com/posts/?userId=${user.name}`;
  // console.log(props.id);
  const [data] = useFetch(postsURL)

  return (
    <div>
         <div className='main-content'>
            <h2>Posts </h2>
            {data && data.map((elem) => <div className='post-container' key={elem.id}>
                <h3 className='post-title'>Title : {elem.title}</h3>
                <p className='post-body'>Body : {elem.body}</p><br/>
                <Comments id={elem.id}/>
                <hr/>
            </div>)}
        </div>
    </div>
  )
}

export default Posts