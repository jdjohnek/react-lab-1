import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./header";
import AdDesigner from "./addesigner";
import Votes from "./votes";

function App() {

  return (
    < div className="App">
      <Header />

      <main>
      <AdDesigner />
      <Votes />
      </main>
    </div>
  );
}

export default App;
