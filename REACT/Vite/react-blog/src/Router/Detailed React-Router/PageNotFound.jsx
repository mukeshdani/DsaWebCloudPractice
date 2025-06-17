import { Link } from "react-router";

export default function PageNotFound(){
    return <div style={{textAlign:'center'}}>
        <h1>Page Not Found</h1>
        <div><Link to='/'>Go to Home Page</Link></div>
        
        <img style={{width:'30%' }} src="https://png.pngtree.com/png-vector/20210702/ourmid/pngtree-error-404-page-not-found-website-png-image_3545448.jpg"></img>
    </div>
}