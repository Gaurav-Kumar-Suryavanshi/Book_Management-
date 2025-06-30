// error.jsx
import React from "react";
import { useRouteError } from "react-router-dom";

import { Link } from "react-router-dom";
import "./style.css";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <p className="error-message">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="error-button">
        Go Back Home
      </Link>
    </div>
  );
}

export default ErrorPage;
