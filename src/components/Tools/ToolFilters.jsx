import React, { useState } from "react";

const ToolFilters = ({ onFilterChange }) => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <div>
      <label>
        Filter by category:
        <select value={filter} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Tech">Tech</option>
          <option value="Office">Office</option>
          <option value="Creative">Creative</option>
        </select>
      </label>
    </div>
  );
};

export default ToolFilters;
