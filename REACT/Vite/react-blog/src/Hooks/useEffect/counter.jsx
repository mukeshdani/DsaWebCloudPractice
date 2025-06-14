import { useEffect } from "react"

const Counter = ({count, data})=>{

   const handleCounter =()=>{
    console.log("handleCounter Function call")
   } 
   
   useEffect(()=>{
       handleCounter()
   }, [count])


    return <div>
        <h5>Counter Component: {count}</h5>
        <h5>Data Component: {data}</h5>
    </div>
}

export default Counter
