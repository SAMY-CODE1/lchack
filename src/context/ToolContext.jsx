import React, { createContext, useState } from "react";

export const ToolContext = createContext();

export const ToolProvider = ({ children }) => {
  const [tools, setTools] = useState([
    { id: 1, name: "Laptop", condition: "Good", location: "Storage Room" },
    { id: 2, name: "Projector", condition: "Needs Repair", location: "Main Hall" },
  ]);

  const addTool = (tool) => {
    setTools((prevTools) => [...prevTools, tool]);
  };

  const removeTool = (toolId) => {
    setTools((prevTools) => prevTools.filter((tool) => tool.id !== toolId));
  };

  return (
    <ToolContext.Provider value={{ tools, addTool, removeTool }}>
      {children}
    </ToolContext.Provider>
  );
};

