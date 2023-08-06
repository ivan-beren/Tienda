import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Counter } from "./components/counter";
import { CounterContainer } from "./components/counter/container";
import { CodeInput } from "./components/code-input";

function App() {
  return(
    <div>
      <CounterContainer></CounterContainer>
      <CodeInput></CodeInput>
    </div>
  ) 
}


  

export default App;
