function User2({displayName, name, getUser={getUser}}){

    return <div>
        <button onClick={()=>{
            displayName(name)
        }}>Display Name</button>

         <button onClick={()=>{
            getUser()
        }}>Get User</button>
    </div>
}

export default User2