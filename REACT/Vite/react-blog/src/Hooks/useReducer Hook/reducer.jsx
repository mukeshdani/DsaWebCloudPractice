import { useReducer } from "react"

const emptyData={
        name:'',
        password:'',
        email:'',
        city:'',
        address:''
    }
const reducer = (data,action)=>{
     return {...data,[action.type]:action.val}
}
export default function UseReducerHook(){
    const [state, dispatch] = useReducer(reducer,emptyData)
    
    return <div>
         <h4>UseReducer Hook</h4>
         <input type='text' onChange={(event)=>{
            dispatch({val:event.target.value, type:'name'})
         }} placeholder="enter name" />
         <br /><br />
         <input onChange={(event)=>{
            dispatch({val:event.target.value, type:'password'})
         }} type='text' placeholder="enter password" />
         <br /><br />
         <input onChange={(event)=>{
            dispatch({val:event.target.value, type:'email'})
         }} type='text' placeholder="enter email" />
         <br /><br />
         <input onChange={(event)=>{
            dispatch({val:event.target.value, type:'city'})
         }} type='text' placeholder="enter city" />
         <br /><br />
         <input onChange={(event)=>{
            dispatch({val:event.target.value, type:'address'})
         }} type='text' placeholder="enter address" />
         <br /><br />
         <ul><li>Name:{state.name}</li>
         <li>Password:{state.password}</li>
         <li>Email:{state.email}</li>
         <li>City:{state.city}</li>
         <li>Address:{state.address}</li></ul>
         <b></b><br />
         <button onClick={()=>{console.log(state)}}>Add Details</button>
    </div>
}

// UseReducerHook
// What is useReducer Hook
// Define some input fields for make example 
// Define default value for input field 
// Define useReducer hook

// better alternative of useState
// expensive object 
// increse complexity 
// when we use this:
// when we have 10 - 20+ field in from then we can't use useState 
// in that senario we shoud wuse UseReducer hook
