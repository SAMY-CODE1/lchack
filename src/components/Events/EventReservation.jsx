import React from "react";

const EventReservation = () => {
  const handleEventBooking = () => {
    alert("Event tools booked successfully!");
  };

  return (
    <div>
      <h1>Event Reservation</h1>
      <form>
        <label>
          Event Name:
          <input type="text" placeholder="Enter event name" />
        </label>
        <br />
        <label>
          Event Date:
          <input type="date" />
        </label>
        <br />
        <label>
          Tools Required:
          <input type="text" placeholder="Enter tools needed" />
        </label>
        <br />
        <button type="button" onClick={handleEventBooking}>
          Book Tools
        </button>
      </form>
    </div>
  );
};

export default EventReservation;
