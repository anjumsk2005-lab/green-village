import { Link } from "react-router-dom";

function TreeTracker() {
  return (
    <div style={{ padding: "30px" }}>
      <Link to="/dashboard">
        <button>⬅ Back</button>
      </Link>

      <h1>📍 Tree Tracker</h1>

      <h3>Family : Anjum Family</h3>
      <h3>Tree : Neem Tree</h3>
      <h3>Status : Growing 🌱</h3>
    </div>
  );
}

export default TreeTracker;