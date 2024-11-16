import React, { useState, useEffect } from "react";
import { fetchEvents } from "../../utils/api";

const RequestApproval = () => {
  const [requests, setRequests] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const fetchedEvents = await fetchEvents();
      setEvents(fetchedEvents);
    };
    getEvents();
  }, []);

  const handleApprove = (requestId) => {
    // Approve request logic
    alert(`Request ${requestId} approved!`);
  };

  const handleDeny = (requestId) => {
    // Deny request logic
    alert(`Request ${requestId} denied!`);
  };

  return (
    <div>
      <h2>Borrowing Requests</h2>
      {requests.length === 0 ? (
        <p>No pending requests</p>
      ) : (
        <ul>
          {requests.map((request) => (
            <li key={request.id}>
              {request.toolName} for event {events[request.eventId].name}
              <button onClick={() => handleApprove(request.id)}>Approve</button>
              <button onClick={() => handleDeny(request.id)}>Deny</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RequestApproval;
