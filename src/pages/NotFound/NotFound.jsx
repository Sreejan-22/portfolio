import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ marginTop: "6rem", textAlign: "center" }}>
      <h1>Oops!! Page Not Found</h1>
      <br />
      <br />
      <Link to="/">
        <button
          style={{
            padding: "1rem",
            fontSize: "1.2rem",
            fontWeight: "600",
            borderRadius: "4px",
            backgroundColor: "#274597",
            color: "white",
            cursor: "pointer",
          }}
        >
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
