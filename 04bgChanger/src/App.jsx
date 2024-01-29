import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  return (
    <div className="bg-changer-container" style={{ backgroundColor: color }}>
      <div className="action-btn-container p-2 rounded-pill">
        <button
          type="button"
          className="btn btn-primary rounded-pill"
          onClick={() => {
            setColor("#0d6efd");
          }}
        >
          Primary
        </button>
        <button
          type="button"
          className="btn btn-secondary rounded-pill"
          onClick={() => {
            setColor("#6c757d");
          }}
        >
          Secondary
        </button>
        <button
          type="button"
          className="btn btn-success rounded-pill"
          onClick={() => {
            setColor("#28a745");
          }}
        >
          Success
        </button>
        <button
          type="button"
          className="btn btn-danger rounded-pill"
          onClick={() => {
            setColor("#dc3545");
          }}
        >
          Danger
        </button>
        <button
          type="button"
          className="btn btn-warning rounded-pill"
          onClick={() => {
            setColor("#ffc107");
          }}
        >
          Warning
        </button>
      </div>
    </div>
  );
}

export default App;
