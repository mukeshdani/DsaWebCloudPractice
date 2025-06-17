import { Link } from "react-router"

export default function UsersList() {
    const userData = [{ id: 1, name: "Mukesh" },
    { id: 2, name: "Suraj" },
    { id: 3, name: "Ankit" }
        , { id: 4, name: "Ramesh" }
        , { id: 5, name: "Rakesh" }
    ]
    return <div style={{ margin: "20px" }}>
        <h3>Users List Page</h3>
        {
            userData.map((item) => {
                return (<div>
                    <h4><Link to ={"/users/"+item.id}>{item.name}</Link></h4>
                </div>)
            })
        }
    </div>
}