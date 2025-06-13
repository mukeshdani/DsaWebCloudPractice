import { useState } from "react"

const Counter  = ()=>{
    const [count , setCount] = useState(0);
    const [rCount, setRCounter] = useState(10);
      return (
        <div>
            <h1>Counter: {count}</h1>
            <h2>RCounter: {rCount}</h2>
            <button onClick={()=>{
                setCount(count + 1)
            }}> Update Counter </button>
            <button onClick={()=>{
                setRCounter(rCount - 1)
            }}> Reverse RCounter </button>
        </div>
      )
}

export default Counter