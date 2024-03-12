import axios from "axios";
import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const ListByAuthorCountry = () => {
  const [book, setBook] = useState([]);
  const [country, setCountry] = useState([]);
  const [showContent, setShowContent] = useState(true);
  const [countryName, setCountryName] = useState([]);

  useEffect(() => {
    axios.all([axios.get("http://localhost:8800/countries")]).then(
      axios.spread((obj1) => {
        // console.log(obj1.data);
        setCountry(obj1.data);
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

  const HandleClick = async (country) => {
    try {
      setCountryName(country.Tara);
      const response = await axios.get(
        `http://localhost:8800/listbyauthorcountry/${country.Tara}`
      );
      console.log(response.data);
      setBook(response.data);
      setShowContent(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="form">
      <h1>List of Books by Author Country</h1>
      <div className="autori">
        <DropdownButton id="dropdown-basic-button" title="Countries list">
          {country.map((country) => (
            <Dropdown.Item onClick={() => HandleClick(country)}>
              {country.Tara}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        {showContent ? (
          <p>Select Country</p>
        ) : (
          <div className="autori">
            <p>Country selected is : {countryName}</p>
            {checkcnull() ? (
              <p>There are no books found</p>
            ) : (
              <p>Below are the found books:</p>
            )}

            {book.map((book) => (
              <div className="autor" key={book.IDCarte}>
                <table className="books-table">
                  <tr>
                    <td className="book-title-cell-single">{book.Titlu}</td>
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

export default ListByAuthorCountry;
