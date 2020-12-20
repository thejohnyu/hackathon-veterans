import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
// import SimpleCard from "./Card";
// import FolderList from "./Folder";
import MainBody from "./Main";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route path="/about">
            <SimpleCard />
          </Route>
          <Route path="/topics">
            <FolderList />
          </Route> */}
          <Route path="/">
            <MainBody />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;