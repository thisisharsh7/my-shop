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
          <button>Post a suggestion</button>
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
          <button>Post a suggestion</button>
        </div>
      </div>
    </section>
  );
}
