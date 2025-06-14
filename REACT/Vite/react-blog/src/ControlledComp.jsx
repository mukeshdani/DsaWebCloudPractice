import { useState } from "react"

function ControlledComp(){

    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [email, setEmail] = useState("")

    return <div>
        <h1>Controlled Componnet</h1>
        <form action="" method="get">
            <input type="text" value ={name} onChange={(event)=>{
                setName(event.target.value)
            }} placeholder= "Enter Name"></input>

            <br></br>
            
            <input type="Password" value ={pass} onChange={(event)=>{
                setPass(event.target.value)
            }} placeholder= "Enter Password"></input>
            
            <br></br>
            
            <input type="Email" value ={email} onChange = {(event)=>{
                setEmail(event.target.value)
            }} placeholder= "Enter Email"></input>
            
            <br></br>
            
            <br></br>
            
            <button >Submit</button>
            
            <br></br>
            <h3>{name}</h3>
            <h3>{pass}</h3>
            <h3>{email}</h3>
            
            <br></br>
            
            <button onClick={()=>{
                setEmail(""); setName(''); setPass('')
            }}>Clear</button>
        </form>
    </div>
}


export default ControlledComp

// ControlledComp
// A controlled conponent is a form whose input field value is controlled by React's state
// Here's how it work
// Store input field value in state
// Use Change handler with input field
// Value attribute attached with state

// Benefits
// Single source of truth 
// Validation and Manipulation Before submit
// Dynamuc Update Values

