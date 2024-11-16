export const fetchTools = async () => {
    // Simulated API call
    return new Promise((resolve) =>
      setTimeout(() => resolve([{ id: 1, name: "Laptop", condition: "Good", location: "Storage Room" }]), 500)
    );
  };
  
  export const fetchEvents = async () => {
    // Simulated API call
    return new Promise((resolve) =>
      setTimeout(() => resolve([{ id: 1, name: "Hackathon", date: "2024-12-15" }]), 500)
    );
  };
  