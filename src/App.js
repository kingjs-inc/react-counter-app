import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [disable, setDisable] = useState(false);

  const decNum = () => {
    return setNumber(number - 1);
  };

  const incNum = () => {
    return setNumber(number + 1);
  };

  const btnStyle = {
    background: "skyblue",
  };

  if (!disable) {
    return (
      <div className="App">
        <header className="App-header">
          <h1> {number}</h1>
          <div>
            {/* <button disabled={disable} onClick={() => setNumber(number - 1)}>
              -
            </button>
            <button disabled={disable} onClick={() => setNumber(number + 1)}>
              +
            </button> */}
            <button disabled={disable} onClick={() => decNum()}>
              -
            </button>
            <button disabled={disable} onClick={() => incNum()}>
              +
            </button>
          </div>
          <div>
            <button
              // className="of"
              style={btnStyle}
              data-testid="onf-button"
              onClick={() => setDisable(true)}
            >
              on/off
            </button>
          </div>
        </header>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <h1> {number}</h1>
          <div>
            {/* <button disabled={disable} onClick={() => setNumber(number - 1)}>
              -
            </button>
            <button disabled={disable} onClick={() => setNumber(number + 1)}>
              +
            </button> */}
            <button disabled={disable} onClick={() => decNum()}>
              -
            </button>
            <button disabled={disable} onClick={() => incNum()}>
              +
            </button>
          </div>
          <div>
            <button
              // className="of"
              style={btnStyle}
              data-testid="onf-button"
              onClick={() => setDisable(false)}
            >
              on/off
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
