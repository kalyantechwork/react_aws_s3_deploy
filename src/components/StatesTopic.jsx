import { useState } from "react"

const StatesTopic = () => {
    var bank = "ICICI"
    // states(variables in react) useState
    // syntax
    const [city, setCity] = useState(" ")
    

    const changeHandler = ()=>{
        var bank = "Kotak"
        console.log(bank)
        const choice = localStorage.getItem("burger")
        setCity(choice)
    }

  return (
    <div>
        <h1>{bank}</h1>
        <h1>User name is{city}</h1>
        <button onClick={changeHandler}>change name</button>
        <button onClick={()=>localStorage.removeItem('burger')}>Delete user</button>
        </div>
  )
}

export default StatesTopic