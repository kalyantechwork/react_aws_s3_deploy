import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


// what is api?
// asychrounous function (async-await)
// promises
// useEffect(hook, )
// map() method



const API_Calling = () => {
    const[data, setData] = useState([])
    const [score, setScore] = useState(10)

    const updateScore=()=>{
        setScore(15)
    }

    const apiHandler = async()=>{
    try {
        const hyderabad = await fetch("https://fakestoreapi.com/products")
        const secunderabad = await hyderabad.json()
       
        setData(secunderabad)
        console.log("state_data", data)
    } catch (error) {
        console.log(error)
    }

}

useEffect(()=>{
    apiHandler()
},[score])





  return (
   <>
   {/* <h1>{score}</h1>
    <button onClick={updateScore}>SHow Score</button> */}
    {data.map((tuesday)=>{
            return(
                <div className="">
                    <img src={tuesday.image} alt="" width="100" />
                    <h1>{tuesday.title}</h1>
                    <br />
                    <Link to={`/single/${tuesday.id}`}>
                    <button className='showBtn'>Show Details</button>
                    </Link>
                    <hr />
                </div>
            )
    })}

   </>
  )
}

export default API_Calling