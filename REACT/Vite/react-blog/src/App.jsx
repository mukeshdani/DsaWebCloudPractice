import './App.css'
import Header from './Header'
import {Login, Profile, Setting} from './UserComponent'
import Click from './ClickFunctionCalling'
import State from './State'
import Toogle from './ToogleORHideAndShow'
import Props from './Props'
import Props2 from './Props2'
import Input from './GetInputFieldValue'
import ControlledComp from './ControlledComp'
import HandleCheckBox from './HandleCheckbox'
import RadioAndDropdown from './HandleRadioDropdown'
import Loops from './loops'
import ReUseLoop from './ReuseLoop'
import Dropdown from './Clock/dropdown'
import Looping from './Nested Looping/looping'
import UseEffect from './Hooks/useEffect/useEffect'
import UseEffect2 from './Hooks/useEffect/useEffect2'
import LifeCycle from './Hooks/Component Life Cycle/lifeCycle'
import UseRef from './Hooks/useRef/UseRef'
import Uncontrolled from './Uncontrolled Component/uncontrolled'
import PassComp from './Pass Function In Component/passComp'
import ForwardRef from './ForwardRef/Forward'
import UseFormStatus from './useFormStatus/useFormStatus'


function App() {
  // let name = "Mukesh Dani"

  return (
    <>
      {/* <Header/>
      <Login />
      <Profile />
      <Setting /> */}
      {/* <Click /> */}
      {/* <State /> */}
      {/* <Toogle /> */}
      {/* <Props2> 
        <h1>More Props</h1>
      </Props2>
      <Props name = {name} /> */}

      {/* <Input /> */}
      {/* <ControlledComp /> */}
      {/* <HandleCheckBox /> */}
      {/* <RadioAndDropdown /> */}
      {/* <Loops /> */}
      {/* <ReUseLoop /> */}
      {/* <Dropdown /> */}

      {/* <Looping /> */}
      {/* <UseEffect /> */}
      {/* <UseEffect2 /> */}

      {/* <LifeCycle /> */}
      {/* <UseRef /> */}
      {/* <Uncontrolled /> */}
      {/* <PassComp /> */}
      {/* <ForwardRef /> */}
      <UseFormStatus />
      {/* <h1>Hello Mukesh </h1>
      <h1>Hello React 19 </h1> */}
    </>
  )
}

export default App
