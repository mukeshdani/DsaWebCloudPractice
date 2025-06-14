import { useState } from "react"
import Counter from "./counter"

function LifeCycle(){

    const [count , setCount] = useState(0)
    const [data, setData] = useState(0)
    const [display, setDisplay] = useState(true)

    return <div>
        <h5>Life Cycle Method</h5>

        {
            display? <Counter count={count} data={data}></Counter>: null
        }

        <button onClick={()=>{
            setCount(count + 1)
        }}>Counter: {count}</button>
 <br></br> <br></br>
        <button onClick={()=>{
            setData(data+1)
        }}> Data: {data}</button>
 <br></br> <br></br>
        <button onClick={()=>{
            setDisplay(!display)
        }}>Toggle</button>
    </div>

    
}

export default LifeCycle