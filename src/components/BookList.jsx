// BookList.jsx

import React, { useState } from "react";
import Book from "./Book";
import "./style.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function BookList({ BookData }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = BookData.filter((book) =>
    `${book.name} ${book.author}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="search-bar-container">
        <div>
          <h2>Serach Books</h2>
        </div>
        <input
          type="text"
          placeholder="Search books by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="book-list-container">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((data) => (
            <Link to={`/data/${data.id}`} key={data.id}>
              <Book Book={data} />
            </Link>
          ))
        ) : (
          <p className="no-results">No books found.</p>
        )}
      </div>
    </div>
  );
}

export default BookList;
