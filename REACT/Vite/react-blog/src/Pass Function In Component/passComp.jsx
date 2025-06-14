import User2 from "./user"

function PassComp(){

    const displayName = (name)=>{
        alert(name)
    }

    const getUser = ()=>{
        alert("get User function call")
    }
    return <div>
       <h5>Pass Function in Component as Props</h5>
       <User2 displayName={displayName} name="Mukesh Dani" getUser={getUser}/>
       <User2 displayName={displayName} name="Suraj Dani" getUser={getUser}/>
       <User2 displayName={displayName} name= "Sidesh" getUser={getUser}/>
       <User2 displayName={displayName} name= "Hitesh" getUser={getUser}/>
    </div>
}
export default PassComp

// Pass Function in Component as Props
// Why we need to pass fucntion as props
// Make Parent and child component
// Call function from parent to child component
