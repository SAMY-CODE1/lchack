import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#007bff", padding: "10px", color: "#fff" }}>
      <h2>Club Inventory Management</h2>
      <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
        <li style={{ marginRight: "20px" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Tools
          </Link>
        </li>
        <li style={{ marginRight: "20px" }}>
          <Link to="/admin/dashboard" style={{ color: "white", textDecoration: "none" }}>
            Admin Dashboard
          </Link>
        </li>
        <li>
          <Link to="/events" style={{ color: "white", textDecoration: "none" }}>
            Events
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
