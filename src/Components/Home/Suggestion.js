import React from "react";

export default function Suggestion() {
  return (
    <section className="suggestions">
      <div className="sellers">
        <div className="suggestion-bg">
          <div>
            <div>
              <p>For Sellers</p>
              <h1>Hi there!</h1>
            </div>
            <p>
              Your suggestion is very much valuable to us, it will help us
              improve
            </p>
          </div>
          <a href="https://docs.google.com/forms/d/1rxj3r8JgYz4-wi_fKLbkC0hTaOglByuid3VZB-C7axI/viewform?edit_requested=true" target="_blank" rel="noreferrer">Post a suggestion</a>
        </div>
      </div>
      <div className="customers">
        <div className="suggestion-bg">
          <div>
            <div>
              <p>For Customers</p>
              <h1>Hi there!</h1>
            </div>
            <p>
              Your suggestion is very much valuable to us, it will help us
              improve
            </p>
          </div>
          <a href="https://docs.google.com/forms/d/1rxj3r8JgYz4-wi_fKLbkC0hTaOglByuid3VZB-C7axI/viewform?edit_requested=true" target="_blank" rel="noreferrer">Post a suggestion</a>
        </div>
      </div>
    </section>
  );
}
