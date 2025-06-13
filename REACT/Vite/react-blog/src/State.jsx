import { useState } from "react";
import Counter from "./Counter";

function State(){
    
    const [fruit, setFruit] = useState("Apple");
    const handleFruit = ()=>{
        setFruit("banana")
    }
    return <>
         <h1>{fruit}</h1>
         <button onClick={handleFruit}>Change Fruit Name</button>
         <Counter />
    </>
}

export default State;

// State is a container to store data like variable
// This is mutable and dynamic 
// We have to import it when we want to use it
// It re-render component automatically so that data can visible to UI

// Hooks is React JS
// Hooks are the special features for functional component
// Hools let you use different React features from your component
// State,
// Life cycle Methods
// Side effects etc