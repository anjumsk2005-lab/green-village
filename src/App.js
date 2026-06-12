import React, { useState } from "react";

function App() {
  const [treeName, setTreeName] = useState("");
  const [location, setLocation] = useState("");
  const [trees, setTrees] = useState([]);

  const registerTree = () => {
    if (treeName === "" || location === "") {
      alert("Please enter all details");
      return;
    }

    const newTree = {
      treeName,
      location
    };

    setTrees([...trees, newTree]);
    setTreeName("");
    setLocation("");
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>🌳 Green Village</h1>
      <h2>Smart Tree Protection & Plantation App</h2>

      <hr />

      <h3>Register a Tree</h3>

      <input
        type="text"
        placeholder="Enter Tree Name"
        value={treeName}
        onChange={(e) => setTreeName(e.target.value)}
        style={{ padding: "8px", margin: "5px" }}
      />

      <br />

      <input
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{ padding: "8px", margin: "5px" }}
      />

      <br />

      <button
        onClick={registerTree}
        style={{
          padding: "10px",
          marginTop: "10px",
          cursor: "pointer"
        }}
      >
        Register Tree
      </button>

      <hr />

      <h3>Registered Trees</h3>

      {trees.length === 0 ? (
        <p>No trees registered yet.</p>
      ) : (
        <ul>
          {trees.map((tree, index) => (
            <li key={index}>
              🌱 {tree.treeName} - {tree.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;