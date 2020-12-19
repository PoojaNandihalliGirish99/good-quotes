import React, { useState } from "react";
import "./styles.css";

var quotesDictionary = {
  You: [
    { quote: "I told the stars about you." },
    {
      quote:
        "Your greatest responsibility is to love yourself and to know that you are enough."
    }
  ],
  Inspirational: [
    { quote: "Start where you are, use what you have,do what you can." },
    {
      quote:
        "You are braver that you believe, stronger than you seem,smarter than you think."
    }
  ]
};

var quoteListWeHave = Object.keys(quotesDictionary);
// quoteListWeHave.forEach(function(newquote){
//   console.log(newquote);
// })

export default function App() {
  const [quotesList, setQuoteList] = useState("You");
  function quoteClickHandler(quoteGenre) {
    // var quotesList = quotesDictionary[quoteGenre];
    setQuoteList(quoteGenre);
    console.log(quotesList);
  }

  return (
    <div className="App">
      <h1>BEST QUOTES</h1>
      <h3>Get inspiring,relateable and heartwarming quotes here!</h3>
      {quoteListWeHave.map(function (quoteGenre) {
        return (
          <button
            onClick={() => quoteClickHandler(quoteGenre)}
            style={{
              fontSize: "1.2rem",
              margin: "0.5rem 0.5rem",
              cursor: "pointer",
              listStyle: "none",
              borderRadius: "0.5rem"
            }}
            key={quoteGenre}
          >
            {quoteGenre}
          </button>
        );
      })}

      <div>
        <ul>
          {quotesDictionary[quotesList].map((quotes) => (
            <li
              key={quotes.quote}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "0.5rem auto",
                borderRadius: "0.5rem",
                backgroundColor: ""
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {quotes.quote} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
