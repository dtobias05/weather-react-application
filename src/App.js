import React from "react";
import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather city="Chicago" />
    </div>
  );
}
