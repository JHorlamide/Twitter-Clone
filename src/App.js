import React from "react";
import "./App.css";

/* Custom Component */
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Widgets from './Components/Widgets/Widgets';

function App() {
  return (
    <div className="app">
      {/* sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets/>
    </div>
  );
}

export default App;
