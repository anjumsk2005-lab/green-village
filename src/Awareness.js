import { Link } from "react-router-dom";

function Awareness() {
  return (
    <div style={{ padding: "30px" }}>
      <Link to="/dashboard">
        <button>⬅ Back</button>
      </Link>

      <h1>📚 Awareness Zone</h1>

      <ul>
        <li>Benefits of Trees</li>
        <li>Save Environment</li>
        <li>Reduce Pollution</li>
      </ul>
    </div>
  );
}

export default Awareness;