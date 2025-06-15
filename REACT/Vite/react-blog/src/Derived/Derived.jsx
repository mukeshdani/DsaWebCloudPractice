import { useState } from "react"

function Derived(){
    const [users , setUsers] = useState([])
    const [user, setUser] = useState("")
    const handleAddUsers = ()=>{
        setUsers([...users, user])
    }
    const total = users.length
    const lastUser = users[users.length - 1]
    const unique = [...new Set(users)].length


    return <div>
        <h5>Derived in react JS</h5>

        <h3>Total Users: {total}</h3>
        <h3>Last Users: {lastUser}</h3>
        <h3>Unique Total Users: {unique}</h3>
        <input type="text" onChange={(e)=>{
            setUser(e.target.value)
        }} placeholder="Add new User" />
        <button onClick={handleAddUsers}>Add User</button>

        {
            users.map((item, index)=>{
                return (<h4 key = {index}>{item}</h4>)
            })
        }
    </div>
}

export default Derived


// Derived
// Derived State -> jb hm kisi variable mai state ki calculation rk dete hai toh us varibale to Derived state bolte hai
// State that is calculated or derived from other state variables or props within your component
// Derived state can be a variable
// No need to extra state only variable or constants are enough
