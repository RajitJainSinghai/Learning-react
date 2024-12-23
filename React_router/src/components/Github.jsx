import React, { useState , useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
const data = useLoaderData();
// const[data, setData] = useState([])

// useEffect(() => {
//     fetch('https://api.github.com/users/RajitJainSinghai')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         setData(data)
        
//     })
// }, []);

  return (
    <div className='text-center w-full m-auto'>
        <p>Github Followers : {data.public_repos}</p> 
        <img className='w-96 m-auto my-0 ' src={data.avatar_url} alt="" />
        </div>
  )
}

export default Github

export const gitInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/RajitJainSinghai")
    return response.json();

}