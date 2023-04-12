import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Banner = () => {
  return (
    <header className="page-header home-header">
      <div className="container">
        <div className="banner-content">
          <h3 className="sub-title">Movflx</h3>
          <h2 className="title">
            Unlimited {<span>Movie</span>}, TV Shows & more
          </h2>
          <Link className="btn" to="/#Movies">
            <i className="ri-arrow-right-line"></i>
            Browse Movies
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Banner;
