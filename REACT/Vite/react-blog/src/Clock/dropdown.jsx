import { useState } from "react"
import Clock from "./clock"

function Dropdown(){
    const [color, setColor] = useState("green")
    return <div>
        <h3>Deafult Props in react js</h3>
        <select onChange={(e)=>{
                setColor(e.target.value)
            }} defaultValue="green">
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="pink">Pink</option>
                <option value="brown">brown</option>
        </select>
        <br /> <br />
        <h4 style={{color: color}}>{color}</h4>
        <Clock color={color}/>
    </div>
}

export default Dropdown