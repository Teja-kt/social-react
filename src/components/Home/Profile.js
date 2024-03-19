import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext';
import useFetch from '../useFetch';

const Profile = () => {
  
  const { user, setUser} = useContext(UserContext);

  const postsURL = `https://jsonplaceholder.typicode.com/users/?id=${user.name}`;
  // console.log(props.id);
  const [data] = useFetch(postsURL)

  return (
    <div>
         <div className='main-content'>
            <h2>Profile </h2>
            {data && data.map((elem) => <div className='post-container' key={elem.id}>
                <h3 className='post-title'>Name : {elem.name}</h3>
                <p className='post-body'>Email : {elem.email}</p><br/>
                {/* <Comments id={elem.id}/> */}
                <hr/>
            </div>)}
        </div>
    </div>
  )
}

export default Profile