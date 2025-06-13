export function Login(){
    return <>
       <h1>Login User</h1>
    </>
}


export function Profile(){
    return <>
        <h1>Profile</h1>
    </>
}

function callFun(){
    alert("Function Calling")
}

export function Setting(){
    const name = "Mueksh Dani"
    function fruit(){
        return "Apple"
    }
    function fun(a,b){
        return a+b;
    }
    function operation(a,b,op){
        let result = 0;
        if(op == '+'){
            result = a+b;
        }else if(op == '-'){
            result = a-b;
        }else if(op == '*'){
            result = a*b;
        }else {
            result = a/b;
        }
        return result;
    }
    return <>
        <ul>
            <li>Inven new traffi</li>
            <li>Inven new traffi</li>
            <li>{name}</li>
            <li>{fruit()}</li>
            <li>{fun(10,20)}</li>
            <li>{operation(10,20, "")}</li>
            <input type="text" value={name}/>
        </ul>
        <button onClick={callFun}>Click Me</button>
    </>
}


