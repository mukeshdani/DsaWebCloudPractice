import { NavLink, Route, Routes } from "react-router";
import UserAdd from "./UserAdd";
import UsersList from "./UsersList";

export default function UserAPP() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2 style={{ color: "#2c3e50" }}>User Management Portal</h2>

      <nav style={{ marginBottom: "20px" }}>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            padding: 0,
            gap: "20px",
            backgroundColor: "#f4f4f4",
            borderRadius: "8px",
            paddingInline: "20px",
            height: "50px",
            alignItems: "center",
          }}
        >
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#3498db" : "#333",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#3498db" : "#333",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Add User
            </NavLink>
          </li>
        </ul>
      </nav>

      <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/add" element={<UserAdd />} />
        </Routes>
      </div>
    </div>
  );
}
