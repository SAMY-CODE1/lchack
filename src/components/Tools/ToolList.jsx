import React from "react";

const tools = [
  { id: 1, name: "Laptop", condition: "Good", location: "Storage Room" },
  { id: 2, name: "Projector", condition: "Needs Repair", location: "Main Hall" },
  { id: 3, name: "VR Headset", condition: "Excellent", location: "Tech Lab" },
];

const ToolList = () => {
  return (
    <div>
      <h1>Available Tools</h1>
      <ul>
        {tools.map((tool) => (
          <li key={tool.id}>
            <strong>{tool.name}</strong> - {tool.condition} ({tool.location})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolList;
