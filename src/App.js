import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const Click = (value) => {
    setInput(input + value);
  };
  
  
  const calculateResult = () => {
    setInput(eval(input));
  };

  const clearInput = () => {
    setInput("");
  };

  // const name = () => {
  //   setInput ("Calc")
  // };

  return (
    <div className="test">
      <div className="card">
        <div className="display">
          <input
            type="text"
            value={input}
            style={{ width: "78%" }}
            readOnly
            placeholder="0"
          />
        </div>

        <div className="button">
          <button className="C" onClick={clearInput}>
            C
          </button>
          <button className="operations" onClick={() => Click("/")}>/</button>
          <button className="operations"onClick={() => Click("*")}>*</button>
          <button className="operations"onClick={() => Click("-")}>-</button>
        </div>

        <div className="button1">
          <button onClick={() => Click("7")}>7</button>
          <button onClick={() => Click("8")}>8</button>
          <button onClick={() => Click("9")}>9</button>
          <button className="operations"onClick={() => Click("+")}>+</button>
        </div>

        <div className="button2">
          <button onClick={() => Click("4")}>4</button>
          <button onClick={() => Click("5")}>5</button>
          <button onClick={() => Click("6")}>6</button>
          <button className="operations" onClick={() => Click("0")}>0</button>
        </div>

        <div className="button3">
          <button onClick={() => Click("1")}>1</button>
          <button onClick={() => Click("2")}>2</button>
          <button onClick={() => Click("3")}>3</button>
          <button className="point" onClick={() => Click(".")}>
            .
          </button>

          
          
        </div>
        <div className="Equal">
          <button className="but" onClick={calculateResult}>
            =
          </button>
        </div>
        {/* <div>
        <button  className="name"onClick={name}></button>

       </div>    */}
      </div>
    </div>
  );
}

export default App;
