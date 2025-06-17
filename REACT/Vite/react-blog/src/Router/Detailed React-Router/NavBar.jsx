import { Link, Outlet } from "react-router";
import './header.css'

export default function NavBar(){
    return <div>
            <div className="header">
            <div>
                <Link className="link" to='/'><h2>Logo</h2></Link>
            </div>
            <div>
            <ul>
                <li>
                    <Link className="link" to='/'>Home</Link>
                </li>
                <li>
                    <Link className="link" to='/user/about'>About</Link>
                </li>
                <li>
                    <Link className="link" to='/user/login'>Login</Link>
                </li>
                <li>
                    <Link className="link" to='/college'>College</Link>
                </li>
                <li>
                    <Link className="link" to='/users'>Users</Link>
                </li>
                <li>
                    <Link className="link" to='/users/list'>List</Link>
                </li>
            </ul>
            </div>
        </div>
        <Outlet/>
        </div>
}