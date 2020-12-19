import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SimpleCard from "./Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">My new header</header>
      <main className="App-main">
        <SimpleCard />
      </main>
      <footer className="App-footer">my footer</footer>
    </div>
  );
}

export default App;
