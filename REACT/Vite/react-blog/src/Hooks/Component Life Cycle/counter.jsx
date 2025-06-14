import { useEffect } from "react"

const Counter = ({count, data})=>{

    useEffect(()=>{
        console.log("Mounting Phase only");
    }, [])

    useEffect(()=>{
        console.log("Update Phase only");
    }, [count])


    useEffect(()=>{
        return ()=>{
            console.log("Unmount Phase only");
        }
    }, [count])

    return <div>
        <h6>Counter Value: {count}</h6>
       
        <h6>Data Value: {data}</h6>
    </div>
}

export default Counter