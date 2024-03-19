import React, { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setdata] = useState([])
    const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setdata(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);
  return (
    [data]
  )
}

export default useFetch