import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import Dashboard from "./components/Admin/Dashboard";
import ToolList from "./components/Tools/ToolList";
import ToolReservation from "./components/Tools/ToolRes"
import EventReservation from "./components/Events/EventReservation";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<ToolList />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/reserve" element={<ToolReservation />} />
          <Route path="/events" element={<EventReservation />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
