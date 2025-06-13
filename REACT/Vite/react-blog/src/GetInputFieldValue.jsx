import { useState } from "react"

function Input(){
    const [value , setValue] = useState("")
    const [age , setAge] = useState(0)
    const [email, setEmail] = useState("")
    return <div>
        <h1> Get Input Field Value</h1>
        <input type="Text" value={value} onChange={(event)=>{setValue(event.target.value)
        }} placeholder = "Enter User Name"></input>
        <input type="Number" value={age} onChange={(event)=>{setAge(event.target.value)
        }} placeholder = "Enter your age"></input>
        <input type="Text" value={email} onChange={(event)=>{setEmail(event.target.value)
        }} placeholder = "Enter Email ID"></input>

        <h1>{value}</h1>
        <button onClick={()=>{
            setValue("")
        }}>Clear Value</button>

        <h1>{value}, {age}, {email}</h1>
    </div>
}


export default Input