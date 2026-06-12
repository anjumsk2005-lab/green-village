import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      <h1>🌳 Green Village</h1>
      <p>Smart Tree Protection & Plantation App</p>

      <div className="cards">

        <div className="card">
          <h2>🌱 Register Tree</h2>
          <button onClick={() => navigate("/register")}>
            Open
          </button>
        </div>

        <div className="card">
          <h2>📍 Tree Tracker</h2>
          <button onClick={() => navigate("/tracker")}>
            Open
          </button>
        </div>

        <div className="card">
          <h2>🚨 Green Alert</h2>
          <button onClick={() => navigate("/alert")}>
            Open
          </button>
        </div>

        <div className="card">
          <h2>🏆 Rewards</h2>
          <button onClick={() => navigate("/rewards")}>
            Open
          </button>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;