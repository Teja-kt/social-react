import React, { useEffect, useState } from 'react'

const App33 = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        showItems()
    },[])

    const url = "http://localhost:9090/employees"
    const showItems = async () => {
        try {
            const response = await fetch(url)
            const dataFetched = await response.json()
            setData(dataFetched)
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>{data.map((el) => (<h1>Name : {el.name}</h1>))}</div>
  )
}

export default App33