import { useContext } from "react"
import {SubjectContext} from './ContextData'

function Subject(){
    const subject = useContext(SubjectContext)

    return <div style={{backgroundColor:"lightgreen", padding:"10px"}}>
          <h5>Subject is: {subject}</h5>
    </div>
}

export default Subject