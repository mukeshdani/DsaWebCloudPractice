import { useState } from "react"

function UpdateArray(){

    const [data, setData] = useState([
        'Mukesh', 'Sam', 'Suraj'
    ])

     const [dataDetails, setDataDetils] = useState([
        {name:'Mukesh', age:24},
        {name:'Suraj', age:26},
        {name:'Ankit', age:20},
        {name:'Sam', age:15},
    ])

    const handleUserDetail = (name)=>{
           data[data.length - 1] = name;
           setData([...data])
    }

    const handleUserDetailedDetail = (name)=>{
        dataDetails[dataDetails.length - 1].name = name
        setDataDetils([...dataDetails]);
        
    }

    return <div>

        <h4>Updating Array in ReactJS</h4>
        
        <input type="text" placeholder="Enter last user name" onChange={(e)=>{handleUserDetail(e.target.value)}}></input>

        {
            data.map((item, index)=>{return <h3 key={index}>{item}</h3>})
        }

       <hr></hr>

        <input type="text" placeholder="Enter last user details" onChange={(e)=>{handleUserDetailedDetail(e.target.value)}}></input>
        {
            dataDetails.map((item, index)=>{return <h3 key={index}>{"Name: "}{item.name}{" Age: "}{item.age}</h3>})
        }
       
    </div>
}

export default UpdateArray

// Updating Array in ReactJS
// Make Array in State
// Display Array Data on UI
// Update array data
// Update Object of array