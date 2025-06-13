function Header(){
    return <div>
        <Color/>
        <Furit/>
        <h5> Hello from Header {sun()}</h5>
         <h5>Code Mukesh Dani</h5>
    </div>
}


function Color (){
    return <>
        <h5>This is Color Component\</h5>
    </>
}


function Furit (){
    return <>
        <h5>This is Furit Component\</h5>
    </>
}

function sun (){
    return 10+20;
}


export default Header;