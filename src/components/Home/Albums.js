import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext';
import useFetch from '../useFetch';

const Albums = () => {
  const { user} = useContext(UserContext);
  console.log(user);
  const albumURL = `https://jsonplaceholder.typicode.com/albums/?userId=${user.name}`;
  // const nameURL = `https://jsonplaceholder.typicode.com/users/?id=${props.id}`;
  const [data] = useFetch(albumURL)
  return (
    <div>
      <div className='main-content'>
            <h2>Albums</h2>
            {data && data.map((elem) => <div className='album-container' key={elem.id}>
                <h3 className='album-title'>Title : {elem.title}</h3>
                <hr/>
            </div>)}
        </div>
    </div>
  )
}

export default Albums