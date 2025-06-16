import { useActionState } from "react"

function UseActionState(){
    const handleSubmit = async (prevData, formData)=>{
        let name = formData.get('name')
        let password = formData.get('password')
        
        await new Promise((res)=>{
             setTimeout(res,2000)
        })

        console.log("Handle Submit called", {name} , {password});

            if(name && password){
                return {
                    message:"Data Submitted !!!", name, password
                }
            }else {
                return {
                    error:"Failed to submit data. Please enter valid data!!!!"
            }
        }
    }

    const [data, action , pending] = useActionState(handleSubmit, undefined)

    return <div>
        <h5>useActionState Hook</h5>
        
        <form action={action}>
            <input defaultValue={data?.name} type="text" placeholder="Enter Name" name="name"></input>
             <br />
             <input defaultValue={data?.password} type="password" placeholder="Enter Password" name="password"></input>
             <br /> <br />
             <button disabled={pending}>Submit Form</button>
             <br />
        </form>
        {
                data?.error && <span style={{color:"red"}}>{data.error}</span>
        }
        {
                data?.message && <span style={{color:"green"}}>{data.message}</span>
        }
        <h3>Name: {data?.name}</h3>
        <h3>Password: {data?.password}</h3>
    </div>
}

export default UseActionState

// useActionState Hook 
//  What is the use of useActionState Hook
// Make input form 
// Example of useActionState hook

// Used to handle form in react js
// it updates state based on the result of a form action 

