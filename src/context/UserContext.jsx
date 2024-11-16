import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    name: "John Doe",
    role: "Member",
    reservations: [],
  });

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  const addReservation = (reservation) => {
    setUser((prevUser) => ({
      ...prevUser,
      reservations: [...prevUser.reservations, reservation],
    }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser, addReservation }}>
      {children}
    </UserContext.Provider>
  );
};
