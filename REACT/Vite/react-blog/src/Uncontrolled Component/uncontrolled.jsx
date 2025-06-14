import { useRef } from "react";

function Uncontrolled(){

    const userRef = useRef()
    const passRef = useRef()
    
    const hangleForm = (event)=>{
        event.preventDefault()
        console.log(event);
        const user = document.querySelector("#user").value;
        console.log(user)
        const pass = document.querySelector("#password").value;
        console.log(pass)
    }

    const hangleRef = (event)=>{
        event.preventDefault()
        const user = userRef.current.value
         console.log(user)
         const pass = passRef.current.value
         console.log(pass)
    }

    return <div>
        <h1>Uncontrolled Component</h1>
        <form action="" method="post" onSubmit={hangleForm}>
            <input type="text" id="user" placeholder="Enter user name"/>
            <br></br>
            <input type="password" id="password" placeholder="Enter password"/>
             <br></br>

            <button >Submit</button>

        </form>
        <hr></hr>
        <form action="" method="post" onSubmit={hangleRef}>
            <input type="text"  ref={userRef} id="userRef" placeholder="Enter user name"/>
            <br></br>
            <input type="password" ref={passRef} id="passwordRef" placeholder="Enter password"/>
             <br></br>

            <button >Submit with Ref</button>

        </form>
            
    </div>
}

export default Uncontrolled

// Uncontrolled Component
// What is Uncontrolled Component?
// Make Uncontrolled component with query selector?
// Make Uncontrolled component with useRef

// When we direcly dom object ki help se input field ki value get krne toh wo uncontrolled component called 
// 
