import {Routes, Route, Link} from 'react-router'
import Home from './Home'
import About from './About'
function Router(){
    return <>
    <Link to="/">Home</Link>
    <br />
    <Link to="/about">About</Link>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
    </Routes>
    </>
}

export default Router


// React Router
// 