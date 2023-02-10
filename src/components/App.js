import React from "react";
import "../styles/App.css";
const App = () => {
  return (
    <div id="main">
      <div class="container">
        <div class="community">
          <h2 class="community-header">Join our community</h2>
          <h3 className="h">30-day,hassle free monkey back guarantee </h3>
          <h3 className="e">
            Gain access to our full library of tutorials along with expert code
            reviews.Perfect for any developers who are serious about honing
            their skills.
          </h3>
        </div>
        <div class="card-details">
          <div class="card">
            <p class="card-header">Monthly Subscription</p>
            <span
              style={{ position: "absolute", fontSize: "40px", color: "white" }}
            >
              $29
            </span>
            <span
              style={{
                alignItems: "center",
                position: "relative",
                top: "14px",
                left: "65px",
                color: "white"
              }}
            >
              Per Month
            </span>
            <p style={{ paddingTop: "35px", fontSize: "20px", color: "white" }}>
              Full access for less than 1$ a day.
            </p>
            <button className="btn">Sign Up</button>
          </div>
          <div class="why-us">
            <h4 class="why-us-header">Why Us</h4>
            <ul className="list">
              <li>Tutorials by industry experts</li>
              <li>Peer & expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

