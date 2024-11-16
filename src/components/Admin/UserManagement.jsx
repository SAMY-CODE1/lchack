import React, { useState, useEffect } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users
    setUsers([
      { id: 1, name: "John Doe", role: "Member" },
      { id: 2, name: "Jane Smith", role: "Admin" },
    ]);
  }, []);

  const handleRoleChange = (userId, newRole) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
    alert(`User role changed to ${newRole}`);
  };

  return (
    <div>
      <h2>User Management</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.role}
            {user.role !== "Admin" && (
              <button onClick={() => handleRoleChange(user.id, "Admin")}>
                Make Admin
              </button>
            )}
            {user.role !== "Member" && (
              <button onClick={() => handleRoleChange(user.id, "Member")}>
                Make Member
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
