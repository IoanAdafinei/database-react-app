import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const [book, setBook] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        // console.log(res.data);
        setBook(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  });

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/autoricarti/" + id);
      await axios.delete("http://localhost:8800/books/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  // const handleDelete = async (id) => {
  //   axios
  //     .all([
  //       axios.delete("http://localhost:8800/autoricarti/" + id),
  //       axios.delete("http://localhost:8800/books/" + id),
  //     ])
  //     .then(window.location.reload());
  // };

  const handleUpdate = (id) => {
    navigate(`/admin/updatebook/` + id);
  };

  return (
    <div class="table-page">
      <div>
        <h1>The books table</h1>
        <div>
          <table className="table-head">
            <tr>
              <td className="header-books-title">Title</td>
              <td className="header-books-authors">Authors</td>
              <td className="header-books-genre">Genre</td>
              <td className="header-books-publication-date">
                Publication date
              </td>
              <td className="header-books-language">Language</td>
              <td className="header-books-price">Price</td>
            </tr>
          </table>
        </div>
        <div className="autori">
          {book.map((book) => (
            <div className="autor" key={book.IDCarte}>
              <table className="books-table">
                <tr>
                  <td className="book-title-cell">{book.Title}</td>
                  <td className="book-author-cell">{book.Authors}</td>
                  <td className="book-genre-cell">{book.Genre}</td>
                  <td className="book-year-cell">{book.AnPublicare}</td>
                  <td className="book-language-cell">{book.Limba}</td>
                  <td className="book-price-cell">{book.PretCarte}</td>
                </tr>
              </table>
              <button
                className="delete"
                onClick={() => handleDelete(book.IDCarte)}>
                Delete
              </button>
              <button
                className="update"
                onClick={() => handleUpdate(book.IDCarte)}>
                Update
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* <StickyContainer>
        <Sticky>
          <button>
            <Link to="/add">Add Author</Link>
          </button>
        </Sticky>
      </StickyContainer> */}
    </div>
  );
};

export default Books;
