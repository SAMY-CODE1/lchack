import React from "react";

const ToolReservation = () => {
  const handleReservation = () => {
    alert("Tool Reserved!");
  };

  return (
    <div>
      <h1>Reserve a Tool</h1>
      <form>
        <label>
          Tool Name:
          <input type="text" placeholder="Enter tool name" />
        </label>
        <br />
        <label>
          Reservation Date:
          <input type="date" />
        </label>
        <br />
        <button type="button" onClick={handleReservation}>
          Reserve
        </button>
      </form>
    </div>
  );
};

export default ToolReservation;
