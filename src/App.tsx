import React from "react";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <div className="Container app-container" role="parent">
        <h1>Reactでテストチュートリアル</h1>
        <Login data-testid="child" />
      </div>
    </div>
  );
}

export default App;
