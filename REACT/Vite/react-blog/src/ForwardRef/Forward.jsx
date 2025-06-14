import { useRef } from "react"
import UserInput from "./UserInput";

function ForwardRef(){

    const inputRef = useRef(null)
    
    const updateInput = ()=>{
       inputRef.current.value = 100 
       inputRef.current.focus();
       inputRef.current.style.color="red"
    }
    return <div>
        <h4>ForwardRef In React</h4>

        <UserInput ref = {inputRef}/>
        <button onClick={updateInput}>Update Input Filed</button>
   </div>
}
export default ForwardRef

// ForwardRef in react
// What is ForwardRef in react js
// implement forwardRef before react 19 version
// implement forwardRef in react 19

// useRef hm kisi vi html or input filed element k ref le lete hai 


// FrowardRef -> jb hm 1 component se 2sre component mai reference send krte hai usse hm forwardRef bolte hai 
// mostly paret child k case mai use hota hai 
// ref paret com mai hota hai and hm usse chile k usme send krte hai




