import React from "react";
import "./style.css"
function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 250, clear: "both", paddingTop: 100, textAlign: "center"}}
      className="jumbotron"
    >
      <h1>Google Reading List</h1>
    </div>
  );
}

export default Jumbotron;
