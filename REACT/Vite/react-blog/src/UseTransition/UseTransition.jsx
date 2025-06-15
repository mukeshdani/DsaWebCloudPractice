// import { useState } from "react"

import { useTransition } from "react"

// function UseTransitionHook(){
//     const[pending , setPending] = useState(false)
//     const handleButton = async ()=>{
//         setPending(true)
//         await new Promise((res)=>{setTimeout(res, 2000)})
//         setPending(false)
//     }

//     return <div>
//         <h5>useTransition Hook in react js</h5>
//         <button disabled ={pending} onClick={handleButton}>Click </button>
//     </div>
// }

// export default UseTransitionHook

function UseTransitionHook(){
    const [pending, startTransition] = useTransition()

    const handleButton = ()=>{

        startTransition(async ()=>{
            await new Promise((res)=>{setTimeout(res, 5000)})
        })
        
    }

    return <div>
         <h5>useTransition Hook in react js</h5>
        {pending ? <img style ={{width:"100px"}} src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="Loading..." /> : null}

       <button disabled={pending} onClick={handleButton}>Click </button>

    </div>
}

export default UseTransitionHook


// useTransition Hook in ReactJS
// What is useTransition Hook
// Example:
// Make button and apply logic 
// Apply useTransition


// useFormStatus: form hona chiaye tvi kaam krega 
// but agr ko button k upper click krne up krna hai tb hm useTransition use krte hai
// we can also use useState but complex code 
