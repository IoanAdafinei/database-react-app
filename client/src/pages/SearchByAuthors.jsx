import React, { useState } from "react";
import axios from "axios";

const SearchByAuthors = () => {
  const [isLoading, setLoading] = useState(true);
  const [carte, setCarte] = useState([]);

  const [autor, setAutor] = useState({
    NumeAutor: "",
    PrenumeAutor: "",
  });

  const fetchAllAuthors = async (e) => {
    e.preventDefault();
    try {
      console.log(autor);
      //   const res = await axios.get("http://localhost:8800/q" + autor);
      const res = await axios.get(
        "http://localhost:8800/q/" + autor.NumeAutor + autor.PrenumeAutor
      );
      console.log(res.data);
      setCarte(res.data);
      setLoading(false);
      console.log(carte);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setAutor((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (isLoading) {
    return (
      <div className="search-by-author">
        <div className="form">
          <h1>Search by author</h1>
          <input
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="NumeAutor"
          />
          <input
            type="text"
            placeholder="Surname"
            onChange={handleChange}
            name="PrenumeAutor"
          />
          <button className="formButton" onClick={fetchAllAuthors}>
            SEARCH
          </button>
        </div>
        <div className="autori">
          {carte.map((carte) => (
            <div className="autor" key={carte.IDCarte}>
              <ul>
                <li>{carte.Titlu}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (carte.length === 0) {
    return (
      <div>
        <div className="autori">
          <p>
            The author you searched for has no books or is not in the database
          </p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="autori">
        <div className="big-bold-text">
          The books writen by {autor.NumeAutor} {autor.PrenumeAutor} are:
        </div>
        <div className="mapped-items">
          {carte.map((carte) => (
            <div className="autor" key={carte.IDCarte}>
              <ul>
                <li>{carte.Titlu}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchByAuthors;
