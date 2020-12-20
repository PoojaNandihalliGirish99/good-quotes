import React, { useState } from "react";
import "./styles.css";

var quotesDictionary = {
  You: [
    { quote: "I told the stars about you." },
    { quote: "Be fearless in the pursuit of what sets your soul on fire." },
    {
      quote:
        "Your greatest responsibility is to love yourself and to know that you are enough."
    },
    { quote: "Be so good that they can't ignore you." }
  ],
  Inspirational: [
    { quote: "Start where you are, use what you have,do what you can." },
    {
      quote:
        "You are braver that you believe, stronger than you seem,smarter than you think."
    },
    {
      quote:
        "Sometimes we are tested not to show our weaknesses but to discover our strengths."
    }
  ],
  Life: [
    { quote: "You are the artist of your Life." },
    { quote: "Don't let yesterday take up too much of today." },
    { quote: "Life is only as good as your Mindset" }
  ],
  Smile: [
    { quote: "Peace begins with a smile." },
    { quote: "Your one smile makes my day." },
    { quote: "A smile is the shortest distance between two people." }
  ],
  Cute: [
    { quote: "And when you smile, I can't stop staring." },
    { quote: "When I look into your eyes, I tend to lose my thoughts." },
    { quote: "And all that you are is all that I will ever need." }
  ]
};

var quoteListWeHave = Object.keys(quotesDictionary);

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
              borderRadius: "0.4rem",
              backgroundColor: "rgb(177, 172, 172)"
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
                border: "2px solid black",
                width: "70%",
                color: "black",
                fontWeight: "600",
                margin: "0.5rem auto",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "medium" }}> {quotes.quote} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
