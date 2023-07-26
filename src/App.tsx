import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const stock = 13;
  const [count, setCount] = useState(0);
  function add() {
    console.log("Hola");
    if (count < stock) {
      setCount(count + 1);
    }
  }
  function remove() {
    console.log();
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function cero() {
    setCount(0)
  }
  return (
    <div className="conteiner">
      <div className="conteiner">
        <button onClick={remove}>-</button>
        <h1>
          {count}/{stock}
        </h1>
        <button onClick={add}>+</button>
      </div>
      <div className="conteiner">
        <button onClick={cero}>
          0
        </button>
      </div>
    </div>
  );
}

export default App;
