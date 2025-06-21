import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export default function UserEdit() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate()
    const { id } = useParams();
    useEffect(() => { getUserData() }, [])
    const getUserData = async () => {
        let response = await fetch(`http://localhost:3000/users/${id}`)
        response = await response.json();
        console.log(response)
        setName(response.name)
        setAge(response.age)
        setEmail(response.email)
    }


    const styles = {
        container: {
            maxWidth: '400px',
            margin: '50px auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
        },
        input: {
            width: '90%',
            padding: '10px',
            margin: '8px 0',
            border: '1px solid #aaa',
            borderRadius: '4px',
            fontSize: '16px',
        },
        button: {
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px',
        },
        buttonHover: {
            backgroundColor: '#005bb5',
        }
    };

    const updateUserData = async () => {
        console.log(name, age, email)
        let response = await fetch(`http://localhost:3000/users/${id}`, {
            method: "Put",
            body: JSON.stringify({ name, age, email })
        })

        response = await response.json()
        console.log(response)

        if (response) {
            alert("User Data Updated...")
            navigate("/")
        }
    }

    return (
        <div style={styles.container}>
            <h4>User Edit Page</h4>
            <input type="text" value={name} onChange={(e) => {
                setName(e.target.value)
            }} placeholder="User Name" style={styles.input} />
            <br /><br />
            <input onChange={(e) => { setEmail(e.target.value) }} type="email" value={email} placeholder="User Email" style={styles.input} />
            <br /><br />
            <input onChange={(e) => { setAge(e.target.value) }} type="number" value={age} placeholder="User Age" style={styles.input} />
            <br /><br />
            <button
                onClick={updateUserData}
                style={styles.button}
                onMouseOver={e => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                onMouseOut={e => e.target.style.backgroundColor = styles.button.backgroundColor}
            >
                Update User
            </button>
        </div>
    );
}
