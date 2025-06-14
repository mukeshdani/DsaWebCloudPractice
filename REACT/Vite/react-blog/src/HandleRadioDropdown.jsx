import { useState } from "react"

function RadioAndDropdown() {
    const [gender, setGender] = useState("male")
    const [city, setCity] = useState("ramnagar")
    return <div>
        <h3>Handle Radio and Dropdown Button</h3>
        <h4>Select Gender</h4>
        <input type="radio" checked={gender == "male"} onChange={(e) => { setGender(e.target.value) }} value={"male"} name="gender" id="male" />
        <label htmlFor="male">Male</label>
        <input type="radio" checked={gender == "female"} onChange={(e) => { setGender(e.target.value) }} value={"female"} name="gender" id="female" />
        <label htmlFor="female">Female</label>
        <h4>Selected Gender: {gender}</h4>
        <h4>Select City</h4>
        <select onChange={(e)=>{
            setCity(e.target.value)
        }} defaultValue="ramnagar">
            <option value="noida">Noida</option>
            <option value="gurgoun">Gurgoun</option>
            <option value="delhi">Delhi</option>
            <option value="ramnagar">Ramnaga</option>
        </select>
         <h4>Selected City: {city}</h4>
    </div>
}

export default RadioAndDropdown


// Make Radio Button
// Get Radio button value in state
// Deafult selection of radio button
// Make dropdown
// Deafult selection in dropdown