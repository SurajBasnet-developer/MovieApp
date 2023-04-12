import React from "react";
import { Link } from "react-router-dom";
import notFound from "./notfound.svg";

const NotFound = () => {
  return (
    <div>
      <div className="notFound">
        <img className="imgNotFound" src={notFound} alt="Not Found" />
        <h2>Page Not Found</h2>
        <Link to="/" className="backToHome">
          Home
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
