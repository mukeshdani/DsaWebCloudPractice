import { useEffect, useState } from "react";

function UseEffect(){
    const [counter, setCounter] = useState(0)
    const [data, setData] = useState(0)

    useEffect(()=>{
           callOnce()
    },[])

    useEffect(()=>{
           counterFunction()
    },[counter])

    function callOnce(){
        console.log("callOnce fucntion called");
        
    }
    
    function counterFunction(){
        console.log({counter})
    }
    
    return <div>
         <h3>useEffcet Hook</h3>
         <button onClick={()=>{
            setCounter(counter + 1)
         }}>Counter: {counter}</button>

         <button onClick={()=>{
            setData(data + 1)
         }}>Data: {data}</button>
    </div>
}

export default UseEffect

// useEffect Hooks
// Remove side effect inside component (state)
// Remove side effect from outside cmponent (props)
// Use to fetch data
// Can use as life cycle methods 
// Can use for DOM manipulation
// Much more

// Basic use of useEffect
// Prevent Extra rendering of comonent on state
// Very important interview


// Syntax of useEffect
//  useEffect(pass function as parameter, dependency)
//  useEffect(()=>{
//   // write your code
//   }, [state or props])


// Handling Dependecy
// 1. useEffect(()=>{//call every time})
// 2. useEffect(()=>{//call only once}, [])
// 3. useEffect(()=>{//call on changing single state}, [state])
// 4. useEffect(()=>{//call on changing both state},[state, state2])
// 5. useEffect(()=>{//call on changes props },[props, props2] )