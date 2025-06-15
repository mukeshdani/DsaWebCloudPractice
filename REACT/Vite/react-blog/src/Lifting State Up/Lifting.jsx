import { useState } from "react"
import AddUser from "./AddUser"
import DisplayUser from "./DisplayUser"

function LiftingState(){
     const [user, setUser] = useState("")
    return <div>
          <h5>Lifiting</h5>

          <AddUser setUser={setUser}/>
          <DisplayUser user={user}/>
    </div>
}

export default LiftingState

// Lifting state Up in ReactJS
// What is lifting state up in raect 
// Make two componet 
// Share data between two component
