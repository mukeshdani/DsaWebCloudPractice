import { useRef } from "react"

function UseRef(){
    const inputRef = useRef(null);

    const inputHandler=()=>{
        inputRef.current.focus();
        inputRef.current.style.color="green"
        inputRef.current.placeholder ="Enter password"
    }

    const toggleHandler =()=>{
        if(inputRef.current.style.display!="none"){
            inputRef.current.style.display = 'none'
        }else {
            inputRef.current.style.display = 'inline'
        }
    }
    // We cant use this: we can not direcly manupulate dom
    

    return <div>
        <h1>useRef Hook in React</h1>
        <button onClick={toggleHandler}>Toggle</button>

        <input ref={inputRef} type="test" placeholder="Enter user name"/>
        <button onClick={inputHandler}>Focus on Input Field</button>
    </div>
}

export default UseRef

// What is useRef: we can control input field using useRef
// Any HTML field and dom we can control useing useRef

