import './App.css'
import Header from './Header'
import {Login, Profile, Setting} from './UserComponent'
import Click from './ClickFunctionCalling'
import State from './State'
import Toogle from './ToogleORHideAndShow'
import Props from './Props'
import Props2 from './Props2'


function App() {
  let name = "Mukesh Dani"

  return (
    <>
      {/* <Header/>
      <Login />
      <Profile />
      <Setting /> */}
      {/* <Click /> */}
      {/* <State /> */}
      {/* <Toogle /> */}
      <Props2> 
        <h1>More Props</h1>
      </Props2>
      <Props name = {name} />
      {/* <h1>Hello Mukesh </h1>
      <h1>Hello React 19 </h1> */}
    </>
  )
}

export default App
