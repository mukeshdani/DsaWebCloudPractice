/* eslint-disable no-unused-vars */
import { useState } from "react"

export default function CheckBox() {
    const list = ["India", "UK", "US"]
    const [country, setCountry] = useState([{ name: 'India', checked: false }, { name: 'UK', checked: false }, { name: 'US', checked: false }]);

    return <div>
        <h4>First Interview Machine Coding Question</h4>

        <ul style={{ display: 'flex' }}>
            {
                country.map((country, index) => { return (<div style={{ display: 'flex' }} checked={country.checked} key={index}><input type="checkbox" />
                <li>{country.list}</li>
                </div>) })
            }

        </ul>



    </div>
}