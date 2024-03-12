import axios from "axios";
import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const ListByGenre = () => {
  const [book, setBook] = useState([]);
  const [genre, setGenre] = useState([]);
  const [showContent, setShowContent] = useState(true);
  const [genreName, setGenreName] = useState([]);

  useEffect(() => {
    axios.all([axios.get("http://localhost:8800/genres")]).then(
      axios.spread((obj1) => {
        // console.log(obj1.data);
        setGenre(obj1.data);
      })
    );
  }, []);

  // const handleGenreClick = async (e, gen) => {
  //   useEffect(() => {
  //     setBook({ IDGen: gen });
  //   }, []);
  // };

  // console.log(genre);
  // genre.map((gen) => {
  //   console.log(gen.IDGen);
  //   console.log(gen.NumeGen);
  // });

  function checkcnull() {
    if (book[0] === undefined) return 1;
    else return 0;
  }

  const HandleClick = (genre) => {
    setShowContent(false);
    setGenreName(genre.NumeGen);
    axios
      .all([axios.get("http://localhost:8800/booksbygenre/" + genre.IDGen)])
      .then(
        axios.spread((obj1) => {
          // console.log(obj1.data);
          setBook(obj1.data);
        })
      );
  };

  return (
    <div className="form">
      <h1>List of Books by Genre</h1>
      <div className="autori">
        <DropdownButton id="dropdown-basic-button" title="Genres list">
          {genre.map((genre) => (
            <Dropdown.Item onClick={() => HandleClick(genre)}>
              {genre.IDGen + "." + genre.NumeGen}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        {showContent ? (
          <p>Select Genre</p>
        ) : (
          <div className="autori">
            <p>Genre selected is : {genreName}</p>
            {checkcnull() ? (
              <p>There are no books found</p>
            ) : (
              <div>
                <p>Below are the found books:</p>
                <table className="table-head">
                  <tr>
                    <td className="header-genre-title">Title</td>
                    <td className="header-genre-author">Authors</td>
                    <td className="header-genre-language">Language</td>
                  </tr>
                </table>
              </div>
            )}
            {book.map((book) => (
              <div className="autor" key={book.IDCarte}>
                <table className="books-table">
                  <tr>
                    <td className="genre-title">{book.Title}</td>
                    <td className="genre-author">{book.Authors}</td>
                    <td className="genre-language">{book.Limba}</td>
                  </tr>
                </table>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListByGenre;
