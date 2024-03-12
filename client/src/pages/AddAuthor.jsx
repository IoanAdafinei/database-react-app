import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [autor, setAutor] = useState({
    NumeAutor: "",
    PrenumeAutor: "",
    DataNasteriiAutor: null,
    Tara: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAutor((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/autori", autor);
      navigate("/admin");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(autor);

  return (
    <div className="form">
      <h1>Add New Author</h1>
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
        ADD
      </button>
    </div>
  );
};

export default Add;
