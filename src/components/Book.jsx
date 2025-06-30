// Book.jsx

import React from "react";
import "./style.css"; 

function Book(props) {
  const { name, author, image, description } = props.Book;

  return (
    <div className="book-card">
      <img src={image} alt={name} className="book-image" />
      <div className="book-details">
        <h2 className="book-title">{name}</h2>
        <h4 className="book-author">{author}</h4>
        <p className="book-description">{description}</p>
      </div>
    </div>
  );
}

export default Book;
