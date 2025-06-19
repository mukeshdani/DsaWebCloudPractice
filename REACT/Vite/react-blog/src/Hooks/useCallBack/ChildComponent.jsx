import React from "react"

const ChildComponet = React.memo((props)=>{
      console.log("Child comp got rerender")
      return <div>
          <button onClick={props.handleClick}>
              {props.buttonName}
          </button>
      </div>
})

export default ChildComponet