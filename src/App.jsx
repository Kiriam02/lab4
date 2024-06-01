import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="App">
      <img
        className="logo"
        src="src\assets\Agro-Fast_plain.svg"
        onClick={() => {
          nav("/home");
        }}></img>
      <h1>Formulario del Agricultor </h1>
      <Form />
    </div>
  );
};

export default App;
