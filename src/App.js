import React from "react";
import './App.css';
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed.jsx";
import Widgets from "./Widgets/Widgets.js";

function App() {
  return (
    //BEM
    <div className="app">
        <Sidebar/>
        <Feed/>
        <Widgets/>
    </div>
  );
}

export default App;
