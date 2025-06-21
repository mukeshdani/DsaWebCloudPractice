import { lazy, Suspense, useState } from "react"
// import User from "./User"
const User = lazy(()=>import('./User'))


export default function LazyLoading(){
    const [load,setLoad] = useState(false)
    return <div>
         <h4>Lazy Loading</h4>
         <button onClick={()=>{setLoad(true)}}>Load User</button>
         {
            load? <Suspense fallback={<h3>loading....</h3>}><User/></Suspense>   :null
         }
         {/* {
            load?<User/>:null
         } */}
         
         
    </div>
}

// Lazy Loading in React JS
// What is Lazy Loading 
//  How to use lazy laoding 
// Suspense use with lazy loading
// Chcek performance using lighthouse
// 


// Lazy Loading: Code ko ondemand load kr deta hai 
// in normal cases 