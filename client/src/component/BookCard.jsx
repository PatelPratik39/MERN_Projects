import React from "react";

const BookCard = ({ book, onClick }) => {
  return (
    <div className={`card ${book.flipped ? "flipped" : ""}`} onClick={onClick}>
      <div className="front">
        <img src={book.image} alt={book.title} />
        <h2>{book.title}</h2>
        <p>Author: {book.author}</p>
      </div>
      <div className="back">
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;
