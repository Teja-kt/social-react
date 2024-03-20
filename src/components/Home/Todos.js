import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext';
import useFetch from '../useFetch';

const Todos = () => {
  const { user} = useContext(UserContext);
  console.log(user);
  const todoURL = `https://jsonplaceholder.typicode.com/todos/?userId=${user.name}`;
  // const nameURL = `https://jsonplaceholder.typicode.com/users/?id=${props.id}`;
  const [data] = useFetch(todoURL)
  return (
    <div>
      <div className='main-content'>
            <h2>Todos</h2>
            <br/>
            {data && data.map((elem) => <div className='album-container' key={elem.id}>
                <h3 className='album-title'>Title : {elem.title}</h3>
                <br/>
                <hr/>
            </div>)}
        </div>
    </div>
  )
}

export default Todos