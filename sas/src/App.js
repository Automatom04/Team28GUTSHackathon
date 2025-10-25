import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import ActivityRandomiser from "./pages/ActivitySelection";
import ActivitySelection from "./pages/ActivitySelection";

function App() {

  return (
    <BrowserRouter>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/activity-selection" element={<ActivitySelection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
