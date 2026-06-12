import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Dashboard from "./Dashboard";
import RegisterTree from "./RegisterTree";
import TreeTracker from "./TreeTracker";
import GreenAlert from "./GreenAlert";
import Rewards from "./Rewards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegisterTree />} />
        <Route path="/tracker" element={<TreeTracker />} />
        <Route path="/alert" element={<GreenAlert />} />
        <Route path="/rewards" element={<Rewards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;