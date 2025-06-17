import { useParams , Link} from "react-router"

export default function UserDeatils() {

    const paramsData = useParams();
    
    return <div style={{ margin: "20px" }}>
        <h4>User Details Page</h4>
        <h2>User id is: {paramsData.id}</h2>
        <h3><Link to='/users'>Back</Link></h3>
    </div>
}