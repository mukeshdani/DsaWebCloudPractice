import { useCallback, useState } from "react"
import ChildComponet from "./ChildComponent"

export default function UseCallBack(){

    const [count, setCount] = useState(0)

    const handleButton = useCallback(()=>{
        setCount(count + 1);
    },[count]) // [] means: jab tak kuch change na ho, function same rahe

    return <div>
        <div>Count: {count}</div>
        <div>
            <button onClick={handleButton}>Incremnet</button>
        </div>
        <br />
        <br />
        <div>
            <ChildComponet buttonName ="Click me" handleClick = {handleButton}/>
        </div>
    </div>
}

// useCallback use case:
// 1. unnessary rerender of child componenert reduce
// React.memo -> wrap -> component ->  component re-render tbhi hoga jab props chaange honge nhi toh re-render nhi hoga 

// if you are sending a function then react.memo wont be able to save you from re-rendering
// re-rendirng k time sb kuch re-render hota hai and fucntion vi new bnata hai so uska refernce vi change ho jayega so hmne fucntion ko as probs mai pass kiya hai toh jesa hi refernce change hoga toh usse new milega toh toh islie wo update hoga


// useMemo mai hm result or value ko memoise krte the and function ko re-run hone se rokte the 
// but in useCallback mai hm re run se nhi rok skte uske liye toh useMemo hi huse hoga hm yha function ko re-create hone se rokte hai and ye function refernece ko memoise krta hai 
// 
// 
// 🧠 useCallback kya hai?
// useCallback ek React ka tool hai jo aapko function ko yaad rakhne (memorize karne) mein madad karta hai — taaki baar-baar woh function dobara na banaya jaye jab zarurat na ho.

// 📦 Real Life Example se samjho:
// Sochiye aapke paas ek coffee machine hai. Har baar jab aap coffee banate ho, aapko recipe likhni padti hai — kitna paani, kitni coffee, kitni sugar.

// Ab aap sochte ho: “Yaar, ye recipe toh same hi hai har baar. Main isko ek sticky note pe likh deta hoon aur machine pe chipka deta hoon.”

// Ab jab bhi coffee banani ho, machine wahi sticky note padhti hai — dobara recipe likhne ki zarurat nahi.

// 🟢 React mein useCallback wahi sticky note ka kaam karta hai.
// Woh function ko yaad rakh leta hai — taaki React baar-baar usko dobara na banaye jab usme koi change na ho.