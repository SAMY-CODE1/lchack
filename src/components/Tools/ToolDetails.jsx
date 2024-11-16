import React from "react";

const ToolDetails = ({ name, description, condition, location }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Condition:</strong> {condition}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};

export default ToolDetails;
