/* eslint-disable no-unused-vars */
import useToggle from "./useToggle"

function CustomHook(){

    const [value, toggleValue] = useToggle(true) 

    return <>
    
            <button onClick={toggleValue}>Toggle Heading</button>
            <button onClick={()=>{toggleValue(false)}}>Hide Heading</button>
            <button onClick={()=>{toggleValue(true)}}>Show Heading</button>
            {
                value?<h3>Make Custom Hook in ReactJS</h3>:null
            }

    </>
}

export default CustomHook

// Make Custom Hook
// What are custom Hook
// Make custom hook for toggle UI
