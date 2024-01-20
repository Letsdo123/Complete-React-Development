import { useState } from "react";
import "./App.css";

function App() {
  let [countValue, setCounter] = useState(15);
  // let countValue = 11;
  const increaseValue = () => {
    if (countValue >= 20) {
      alert("you can't decrease anymore");
    } else {
      countValue++;
      setCounter(countValue);
    }
  };
  const decreaseValue = () => {
    if (countValue <= 0) {
      alert("you can't decrease anymore");
    } else {
      countValue--;
      setCounter(countValue);
    }
  };
  return (
    <>
      <div className="container-counter">
        <h3>Counter Update using hooks</h3>
        <p>counter value {countValue}</p>

        <div className="action-container">
          <button onClick={increaseValue}>Increase</button>
          <button onClick={decreaseValue}>Decrease</button>
        </div>
        <div className="footer">
          <p>Just see the effect of the value to here {countValue}</p>
        </div>
      </div>
    </>
  );
}
export default App;
