import { useEffect, useState } from "react";

export default function GET() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUsersData();
  }, []);

  async function getUsersData() {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    let data = await response.json(); // Use a separate variable for clarity
    setUsersData(data.users);
  }

  return (
    <div>
      <h4>Fetch data from API</h4>
      {usersData &&
        usersData.map((user) => (
            <div key={user.id} >
                <ul >
                <li >{user.firstName}</li>
                <li>{user.lastName}</li>
                <li>{user.age}</li>
            </ul>
            </div> 
        ))}
    </div>
  );
}
