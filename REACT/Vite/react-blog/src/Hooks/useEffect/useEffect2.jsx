import {  useState } from "react"
import Counter from "./counter"

function UseEffect2(){
    const [count, setCount]= useState(0)
    const [data, setData] = useState(0)
    return <div>
        <h4>Handle Props Side Effect with useEffect in component</h4>
        
        <Counter count={count} data={data}/>
        <button onClick={()=>{
         setCount(count + 1)
        }}>Counter: {count}</button>
         <button onClick={()=>{
         setData(data + 1)
        }}>Data: {data}</button>
    </div>
}

export default UseEffect2

// Handle Props Side effect with useEffect in component
// Make Component
// Pass component
// Apply useEffect to handle side effect
// How to pass props as dependencies in useEffect
