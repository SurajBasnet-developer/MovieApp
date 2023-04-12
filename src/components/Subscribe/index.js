import React from "react";
import "./style.css";

const Subscribe = () => {
  return (
    <section className="subscribe-sec">
      <div className="container">
        <div className="row">
          <div className="subscribe-content">
            <h3 className="title"> Free Trial </h3>
            <p className="desc">Enter your email to subscribe</p>
          </div>
          <div className="subscribe-form">
            <form className="form">
              <input type="email" placeholder="Your Email" />
              <button type="submit"> Get Started</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
