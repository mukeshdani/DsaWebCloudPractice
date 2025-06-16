import { useId } from "react"

function UseID(){
    return <div>
        <h5>useId Hook in ReactJS</h5>
        <UserForm/>
        <UserForm/>
        <UserForm/>
    </div>

}


function UserForm(){
    const name = useId()
    return <div>
        <form action="">
            <label htmlFor={name}></label>
            <input id={name} type="text" placeholder="Enter name" />
        </form>
    </div>

}

export default UseID


// useId Hook
// What is useId Hook
// How to use it
// Example

// useId is a rect hook for generating unique ids that can be passed to accessiblity attributes
