import { useEffect, useState } from "react";

export default function UsersList() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserData = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h4>Integrate JSON Server API and Loader</h4>
      {loading ? (
        <h5>Data Loading...</h5>
      ) : userData.length > 0 ? (
        userData.map((user, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <h4>{user.name}</h4>
          </div>
        ))
      ) : (
        <h5>No users found.</h5>
      )}
    </div>
  );
}
