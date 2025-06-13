function Click(){

    const fruit = (name)=>{
        alert("Inside: " + name)
    }
    return <>

         <button onClick={()=>fruit("Mukesh Dani")}>Click Me</button>
    </>
}


export default Click

