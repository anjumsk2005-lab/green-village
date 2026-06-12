import { Link } from "react-router-dom";

function CommunityChallenge() {
  return (
    <div style={{ padding: "30px" }}>
      <Link to="/dashboard">
        <button>⬅ Back</button>
      </Link>

      <h1>🏆 Community Challenge</h1>

      <table border="1" cellPadding="10">
        <tr>
          <th>Village</th>
          <th>Trees Planted</th>
        </tr>

        <tr>
          <td>Green Village</td>
          <td>120</td>
        </tr>

        <tr>
          <td>Eco Village</td>
          <td>95</td>
        </tr>
      </table>
    </div>
  );
}

export default CommunityChallenge;