import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterTree() {
  const [treeName, setTreeName] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const registerTree = () => {
    if (treeName === "" || location === "") {
      alert("Please fill all fields");
      return;
    }

    alert("Tree Registered Successfully 🌱");
    navigate("/tracker");
  };

  return (
    <div className="page-container">
      <Link to="/dashboard">
        <button>⬅ Back</button>
      </Link>

      <h1>🌱 Register Tree</h1>

      <input
        type="text"
        placeholder="Tree Name"
        value={treeName}
        onChange={(e) => setTreeName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <br /><br />

      <button onClick={registerTree}>
        Register Tree
      </button>
    </div>
  );
}

export default RegisterTree;