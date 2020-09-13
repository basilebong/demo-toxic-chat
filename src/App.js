import React, { useState, useEffect } from "react";
import "./App.scss";
import Loader from "./components/Loader";
import Chat from "./components/Chat";

let model;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadModel = async () => {
      // Loading model
      model = await window.toxicity.load(0.9);
      // Display chat
      setLoading(false);
    };
    loadModel();
  });

  return (
    <div className="App">
      {loading ? <Loader /> : <Chat model={model} />}
      <a
        href="https://basilebong.com"
        class="btn --promo"
        target="_blank"
        rel="noopener"
      >
        Created by Basile Bong
      </a>
    </div>
  );
}

export default App;
