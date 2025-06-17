import { NavLink, Outlet } from "react-router";
import './header.css'

export default function NavBar(){
    return <div>
            <div className="header">
            <div>
                <NavLink className ={(isActive)=>{ isActive?'custom-active link':'link'}}to='/'><h2>Logo</h2></NavLink>
            </div>
            <div>
            <ul>
                <li>
                    <NavLink className="link" to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className="link" to='/user/about'>About</NavLink>
                </li>
                <li>
                    <NavLink className="link" to='/user/login'>Login</NavLink>
                </li>
                <li>
                    <NavLink className="link" to='/college'>College</NavLink>
                </li>
                <li>
                    <NavLink className="link" to='/users'>Users</NavLink>
                </li>
                <li>
                    <NavLink className="link" to='/users/list'>List</NavLink>
                </li>
            </ul>
            </div>
        </div>
        <Outlet/>
        </div>
}