import { useState } from "react"
import User from "./User"


function Toogle(){
    const [display , setDisplay] = useState(true)
    const [user , setUser] = useState(true)

    const [count , setCount] = useState(0)
    return <>
        <h2> Hide and show Functionality</h2>
        {
            display ? <h1>Mukesh Dani</h1>: <h1>Suraj Dani</h1>
        }
        <button onClick={()=>{
            setDisplay(!display)
        }}>Toggle</button>

        {
            user ? <User />: <h1>Anshuman Dani</h1>
        }
        <button onClick={()=>{
            setUser(!user)
        }}>Toggle</button>



        <h1>Multiple Condition In React</h1>
        <h1>{count}</h1>
        <button onClick={()=>{
            setCount(count + 1)
        }}>Multi Click</button>
        {
            count == 0?<h1>Condition 0</h1>
            : count == 1?<h1>Condition 1</h1>
            : count == 2?<h1>Condition 2</h1>
            : count == 3?<h1>Condition 3</h1>
            :<h1>Other Conction</h1>
        }

    </>
}

export default Toogle

// Toogle or Hide and show in React
// Define State
// Update state or button click 
// Add condition for toogle
// Hide and show component