import React, { useState, useEffect } from "react";
import { fetchTools } from "../../utils/api";

const EventToolList = ({ eventId }) => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const getTools = async () => {
      const fetchedTools = await fetchTools();
      setTools(fetchedTools);
    };
    getTools();
  }, []);

  return (
    <div>
      <h2>Event {eventId} Tools List</h2>
      <ul>
        {tools.map((tool) => (
          <li key={tool.id}>
            {tool.name} - {tool.condition}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventToolList;
