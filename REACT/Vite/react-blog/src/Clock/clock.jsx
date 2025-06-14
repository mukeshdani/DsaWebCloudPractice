import { useEffect, useState } from "react"

function Clock({color}){
    const [time , setTime] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
              setTime(new Date().toLocaleTimeString())
        }, 1000)
    }, [])

    return <div>
       <button style={{ color: color , background:'#FFFF', padding:"10px"}}>{time}</button>
    </div>
}

export default Clock