import { Link, Navigate, Route, Routes } from "react-router"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import NavBar from "./NavBar"
import PageNotFound from "./PageNotFound"

function BasicPage(){
    return <>
       <NavBar />
       <Routes>
         <Route path="/" element = {<Home/>}/>
         <Route path="/about" element = {<About />}/>
         <Route path="/login" element = {<Login/>}/>
         {/* <Route path="/*" element = {<PageNotFound/>}/> */}
         <Route path="/*" element = {<Navigate to='/login'/>}/>
       </Routes>
    </>
}

export default BasicPage

// Basic Pages with react-router
// what is BrowserRouter
// what is Routes 
// what is Route
// What is Link
// Make basic Pages
// Make Different file for links


// what is BrowserRouter
// BrowserRouter: This component enable clent-side routing using the browser's history API
// Routes: Its responsible for rendering the approprite component based on the current URL
// route: Each Route component defines a path and the corresponding component to render when that path is matched 
// Link: A link for navigate from 1 page to other page
// 

