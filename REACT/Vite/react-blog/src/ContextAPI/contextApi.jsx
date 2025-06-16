import { useState } from "react"
import College from "./College"
import { SubjectContext } from "./ContextData"

function ContextAPI(){
    const [subject, setSubject] = useState("Science")
    return <div style={{backgroundColor:"yellow", padding:"10px"}}>
          
          <SubjectContext.Provider value={subject}>
            <select defaultValue={subject} onChange={(e)=>{
                 setSubject(e.target.value)
            }}>
                <option value="">Select Subject</option>
                <option value="Science">Science</option>
                <option value="Maths">Maths</option>
                <option value="English">English</option>
                <option value="Physics">Physics</option>
            </select>
            <h5>Context API</h5>
            <button onClick={()=>{
                setSubject('')
            }}>Clear Subject</button>
             <College/>
        </ SubjectContext.Provider >

    </div>
}

export default ContextAPI

// Context API: data share without props drilling 
// College Component
// Class Component
// Student Componnet
// Subject


// createContext: To initiate Context API
// Provider: use for update or provide data
// useContext: get data from context api