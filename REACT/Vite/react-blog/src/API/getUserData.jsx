import { useEffect, useState } from "react"

export default function GetUsersData(){

    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(false)
    const getUserData = async ()=>{
        const url = "http://localhost:3000/users"
        let response = await fetch(url)

        response = await response.json()

        setUserData(response)
        setLoading(false)
        
    }

    useEffect(()=>{
        setLoading(true)
        getUserData
    },[])

    return <div>
        <h4>Integarte JSON Server API and Loader</h4>
        {
            !loading?
            userData.map((user, index)=>{
                return(
                      <h4 key = {index}>{user.name}</h4>
                )
            }):<h5>Data Loading....</h5>
        }
    </div>
}