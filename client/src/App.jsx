import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import BookCard from "./component/BookCard";

function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/books")
      .then((res) => {
        console.log("Books data:", res.data); // Log the data received from the API
        setBooks(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setError("An error occurred while fetching books.");
        setLoading(false);
      });
  }, []);

 const handleCardClick = (index) => {
   const updatedBooks = [...books];
   updatedBooks[index].flipped = !updatedBooks[index].flipped;
   setBooks(updatedBooks);
 };


  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1>Simple connection between FrontEnd and Backend </h1>
      <div className="card-container">
        {books.map((book, index) => (
          <BookCard
            key={book._id}
            book={book}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
