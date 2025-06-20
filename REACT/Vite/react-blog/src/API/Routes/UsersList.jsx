import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function UsersList() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
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

  const deleteUser = async (id) => {
    try {
      await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      });
      setUserData((prevData) => prevData.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const editUser = async(id)=>{
    navigate("/edit/"+id)
  }

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
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <button onClick={() => deleteUser(user.id)} style={{ cursor: "pointer" }}>
                    Delete
                  </button>
                  <button onClick={() => editUser(user.id)} style={{ cursor: "pointer" }}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h5>No users found.</h5>
      )}
    </div>)
}