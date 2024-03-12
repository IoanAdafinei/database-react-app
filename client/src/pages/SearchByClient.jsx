import React, { useState } from "react";
import axios from "axios";

const SearchByClient = () => {
  const [isLoading, setLoading] = useState(true);
  const [carte, setCarte] = useState([]);

  const [autor, setAutor] = useState({
    NumeClient: "",
    PrenumeClient: "",
  });

  const fetchAllAuthors = async (e) => {
    e.preventDefault();
    try {
      console.log(autor);
      //   const res = await axios.get("http://localhost:8800/q" + autor);
      const res = await axios.get(
        "http://localhost:8800/searchbyclient/" +
          autor.NumeClient +
          autor.PrenumeClient
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
          <h1>Search by Client</h1>
          <input
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="NumeClient"
            className="search-field"
          />
          <input
            type="text"
            placeholder="Surname"
            onChange={handleChange}
            name="PrenumeClient"
            className="search-field"
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
            The client you searched for has no books or is not in the database
          </p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="autori">
        <div className="big-bold-text">
          The books owned by {autor.NumeClient} {autor.PrenumeClient} are:
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

export default SearchByClient;
