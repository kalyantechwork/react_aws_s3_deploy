import React from 'react'

const Login = () => {
  
    const userHandler = ()=>{
          const userName = "Subhash"
          localStorage.setItem("burger", userName)
    }


  return (
    <div>
        <button onClick={userHandler}>Login</button>
    </div>
  )
}

export default Login