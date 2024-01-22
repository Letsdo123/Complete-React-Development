import { useState } from "react";
import "./App.css";

function App() {
  let [countValue, setCounter] = useState(15);
  // let countValue = 11;
  const increaseValue = () => {
    if (countValue >= 20) {
      alert("you can't decrease anymore");
    } else {
      // setCounter((countValue += 1));
      // setCounter((countValue += 1));

      // This is a way to repeat same task through function
      // This setCounter expect an callback() here we get the current value of the counter

      // setCounter((counter) => {
      //   return (counter += 1);
      // });
      // setCounter((counter) => {
      //   return (counter += 1);
      // });
      // setCounter((counter) => {
      //   return (counter += 1);
      // });
      // setCounter((counter) => counter + 1);

      // This is explicitly returning the value
      // setCounter((countValue += 1));
      // setCounter((countValue += 1));
      // setCounter((countValue += 1));

      // Here it won't update
      // It will run once bcz it is same process
      // Fiber alogorithm stop processing same function calling for optimization purpose
      // So If we want to do this then we have to do this into the upper described process
      setCounter(countValue + 1);
      // setCounter(countValue + 1);
      // setCounter(countValue + 1);
      // setCounter(countValue + 1);
    }
  };
  const decreaseValue = () => {
    if (countValue <= 0) {
      alert("you can't decrease anymore");
    } else {
      setCounter((countValue -= 1));
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
