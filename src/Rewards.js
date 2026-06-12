import { Link } from "react-router-dom";

function Rewards() {
  return (
    <div style={{ padding: "30px" }}>
      <Link to="/dashboard">
        <button>⬅ Back</button>
      </Link>

      <h1>⭐ Reward Points</h1>

      <h2>Current Points : 50</h2>
    </div>
  );
}

export default Rewards;