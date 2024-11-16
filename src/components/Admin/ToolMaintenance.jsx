import React, { useState, useEffect } from "react";

const ToolMaintenance = () => {
  const [maintenanceTasks, setMaintenanceTasks] = useState([]);

  useEffect(() => {
    // Fetch maintenance tasks
    setMaintenanceTasks([
      { toolName: "Laptop", issue: "Battery issue", status: "Pending" },
      { toolName: "Projector", issue: "Lamp needs replacement", status: "Completed" },
    ]);
  }, []);

  return (
    <div>
      <h2>Tool Maintenance</h2>
      {maintenanceTasks.length === 0 ? (
        <p>No maintenance tasks</p>
      ) : (
        <ul>
          {maintenanceTasks.map((task, index) => (
            <li key={index}>
              {task.toolName} - {task.issue} - {task.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToolMaintenance;
