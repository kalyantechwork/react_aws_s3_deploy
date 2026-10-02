import React, { useState } from 'react'

const FormHandling = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [contact, setContact] = useState("")

    const dataHandler = (event)=>{
        event.preventDefault()
        const user = {name, email, password, contact}
        console.log(name, email, password, contact)
        console.log(user)
        alert("data submitted")
        setName("")
        setEmail("")
        setPassword("")
        setContact(0)
        localStorage.setItem("username", name)
    }
 

  return (
    <div>
        <form onSubmit={dataHandler}>
            <h3>User name</h3>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/> 
            {/* controlled component */}
            <h3>User Email</h3>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <h3>User Password</h3>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <h3>User Contact</h3>
            <input type="number" value={contact} onChange={(e)=>setContact(e.target.value)}/>
            <br /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormHandling