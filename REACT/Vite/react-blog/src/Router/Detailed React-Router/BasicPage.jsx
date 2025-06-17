import { Link, Navigate, Route, Routes } from "react-router"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import NavBar from "./NavBar"
import PageNotFound from "./PageNotFound"
import College from "./College"
import Student from "./Student"
import Department from "./Department"
import CollegeDetail from "./CollegeDetails"

function BasicPage() {
  return (
    <>
      {/* <NavBar /> */}

      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/user">
               <Route path="/user/login" element={<Login />} />
               <Route path="/user/about" element={<About />} />
          </Route>
          
        </Route>


        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="details" element={<CollegeDetail />} />
          <Route path="department" element={<Department />} />
        </Route>
        {/* <Route path="/*" element = {<PageNotFound/>}/> */}
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
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

// Outlet:Outlet: Multi-Level Nested Routing
// The <Outlet /> component is used in a parent route to render child routes. It acts as a placeholder.

// Multi Navigation Nested Routing
// Layout and Index Routes: Layout and Index Routes

// Layout Route:
// A layout route wraps multiple routes with a common layout (like a navbar or sidebar).

// Index Route:
// An index route is the default child route rendered when the parent path is matched.

// Route prefix: 3. Route Prefix
// React Router automatically handles route prefixes in nested routes. You don’t need to write /college/student, just use student inside the nested route.

// 4. Page Not Found Route
// To handle undefined routes, use a wildcard (*) path.
// // Page Not Found Page