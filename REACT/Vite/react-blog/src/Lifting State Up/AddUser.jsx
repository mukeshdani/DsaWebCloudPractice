function AddUser({setUser}){
   
    return <div>
        <h5>Add User</h5>
        <input type="text" onChange={(e)=>{
            setUser(e.target.value)
        }} placeholder="Enter User Name"></input>
        <hr></hr>
    </div>
}

export default AddUser