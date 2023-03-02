import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [fetchQuotes, setFetchQuotes] = useState([]);
  const [display, setDisplay] = useState("");
  const [darkMode, setDarkMode] = useState("");

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json())
      .then((data) => setFetchQuotes(data.quotes));
  }, []);

  let random = Math.floor(Math.random() * fetchQuotes.length);

  return (
       <div className={darkMode ? "black" : "body"} >
      <div className={darkMode ? "dark" : "quote-container"}>
        <div>
          <p className="text">
           
            {display.quote} I love Jesus, he's my saviour and and lord.
          </p>
          <p className={darkMode ? "black" : "author"}>{display.author} Holy Bible</p>
        </div>

        <div className="btn">
          <button onClick={() => setDisplay(fetchQuotes[random])}>
            New Quote
          </button>

          <button>
            <a href="#">Tweet Quote</a>
          </button>
        </div>
        <button onClick={toggleDarkMode}>Change me</button>
        </div>
      </div>
      
    
  );
}

export default App; 
