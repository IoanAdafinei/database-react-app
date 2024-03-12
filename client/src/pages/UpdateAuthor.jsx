import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [autor, setAutor] = useState({
    NumeAutor: "",
    PrenumeAutor: "",
    DataNasteriiAutor: null,
    Tara: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const autorID = location.pathname.split("/")[3];

  const handleChange = (e) => {
    setAutor((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/autori/" + autorID, autor);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(autor);

  return (
    <div className="form">
      <h1>Update Author</h1>
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
      <input
        type="datetime-local"
        placeholder="Birth"
        onChange={handleChange}
        name="DataNasteriiAutor"
      />
      <input
        type="text"
        placeholder="Country"
        onChange={handleChange}
        name="Tara"
      />
      <button className="formButton" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};

export default Update;
