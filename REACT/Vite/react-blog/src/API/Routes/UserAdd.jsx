import { useState } from "react";

export default function UserAdd() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const createUser = async () => {
    if (!name || !age || !email) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, email }),
      });

      const result = await response.json();
      console.log(result);

      if (result) {
        alert(`New User Added: ${name}`);
        setName("");
        setAge("");
        setEmail("");
      }
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h3 style={{ color: "#2c3e50" }}>Add New User</h3>
      <div style={{ maxWidth: "400px", marginTop: "20px" }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Name"
          style={inputStyle}
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="Enter Age"
          style={inputStyle}
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Email"
          style={inputStyle}
        />
        <button onClick={createUser} style={buttonStyle}>
          Add User
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#3498db",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};
