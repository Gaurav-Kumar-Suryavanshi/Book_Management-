import React from "react";
import { useParams } from "react-router-dom";
import BookData from "../utils/BookData";
import "./style.css";

import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice"; // ⬅️ import action

function BookDetail() {
  const { id } = useParams();
  const dispatch = useDispatch(); // ⬅️ get the dispatch function

  const book = BookData.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Book not found</h2>
    );
  }

  const handleAddToCart = () => {
    dispatch(addItem(book)); // ⬅️ add to cart
  };

  return (
    <div className="bd-container">
      <img className="bd-image" src={book.image} alt={book.name} />
      <div className="bd-info">
        <h1 className="bd-title">{book.name}</h1>
        <p className="bd-author">by {book.author}</p>
        <p className="bd-description">{book.fullDetails}</p>

        <div className="bd-grid">
          <div className="bd-item"><strong>Pages:</strong> {book.pages}</div>
          <div className="bd-item"><strong>Format:</strong> {book.format}</div>
          <div className="bd-item"><strong>Language:</strong> {book.language}</div>
          <div className="bd-item"><strong>Rating:</strong> {book.rating}⭐</div>
          <div className="bd-item"><strong>Category:</strong> {book.category}</div>
        </div>

        <div className="bd-price">₹{book.price}</div>
        <div className={book.inStock ? "bd-stock" : "bd-out"}>
          {book.inStock ? "In Stock" : "Out of Stock"}
        </div>

        <div className="bd-actions">
          <button className="bd-button" disabled={!book.inStock}>
            {book.inStock ? "Buy Now" : "Unavailable"}
          </button>
          <button className="add-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
