import React, { useState } from "react";

function GreenAlert() {
  const [location, setLocation] = useState("");

  const sendAlert = () => {
    if (location === "") {
      alert("Please enter a location!");
      return;
    }

    alert("🚨 Alert sent for: " + location);

    setLocation("");
  };

  return (
    <div>
      <h1>🚨 Green Alert</h1>

      <input
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <br /><br />

      <button onClick={sendAlert}>
        Send Alert
      </button>
    </div>
  );
}

export default GreenAlert;