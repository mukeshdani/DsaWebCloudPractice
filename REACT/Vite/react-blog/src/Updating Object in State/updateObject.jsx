import { useState } from "react"

function ObjectState(){
    const [data,setData] = useState({
        name:"Mukesh Dani",
        address:{
            city:"Delhi",
            pincode:'244715',
            country:'India'
        }
    })

    const handleName =(val)=>{
        data.name=val
         setData({...data})  
    }
    const handleCity =(city)=>{
          data.address.city = city
          setData({...data,address:{...data.address,city}})
    }
    return <div>
       <h5>Updateing Object </h5>
      
       <input type="text" placeholder="update name" onChange={(e)=>{
        handleName(e.target.value)
       }}></input>
       <input type="text" placeholder="Update City" onChange={(e)=>{handleCity(e.target.value)}}/>
        <h5>Name: {data.name}</h5>
        <h5>City: {data.address.city}</h5>
        <h5>Country: {data.address.country}</h5>
    </div>
}

export default ObjectState