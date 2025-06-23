import React from "react"

const User=(probs)=>{
    
    return <div>
        <h4>User Name: {probs.data.name}</h4>
        <h4>User Age: {probs.data.age}</h4>
    </div>
}

export default User