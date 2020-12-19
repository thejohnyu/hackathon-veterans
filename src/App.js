import React from "react";
import "./App.css";
import SimpleCard from "./Card";
import PrimarySearchAppBar from "./App-bar";
import FolderList from "./Folder";

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <main className="App-main">
        <div className="App-left-column">
          <SimpleCard />
        </div>
        <div className="App-right-column">
          <header className="App-sub-header"><h3>Veteran Deals</h3></header>
          <FolderList />
          {/* <header className="App-sub-header">Trending Benefits</header>
          <FolderList /> */}
        </div>
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;