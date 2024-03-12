import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Add = () => {
  const [book, setBook] = useState({
    Titlu: "",
    IDAutor: 0,
    AnPublicare: null,
    Limba: "",
    IDGen: 0,
    PretCarte: 0,
  });
  const [autor, setAutor] = useState([]);
  const [genre, setGenre] = useState([]);
  // const [autori_carti, setac] = useState({
  //   IDCarte: 0,
  //   IDAutor: 0,
  // });
  var autori_carti = [0, 0];

  //de folosit spread cu asios ca sa nu mai dea erori in halul ala
  //de rezolvat lista de genuri
  ////   http://127.0.0.1/
  const navigate = useNavigate();

  // function exists_author(author, searchedAuthor) {
  //   author.map((x) => {
  //     if (x.NumeAutor == searchedAuthor.NumeAutor)
  //       if (x.PrenumeAutor == searchedAuthor.PrenumeAutor) return x.IDAutor;
  //   });
  // }

  // useEffect(() => {
  //   const fetchAllGenres = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:8800/genres");
  //       // console.log(res.data);
  //       setGenre(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchAllGenres();
  // });

  // useEffect(() => {
  //   const fetchAllAuthors = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:8800/autori");
  //       // console.log(res.data);
  //       setAutor(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchAllAuthors();
  // });
  useEffect(() => {
    axios
      .all([
        axios.get("http://localhost:8800/genres"),
        axios.get("http://localhost:8800/autori"),
      ])
      .then(
        axios.spread((obj1, obj2) => {
          // console.log(obj1.data);
          setGenre(obj1.data);
          // console.log(obj2.data);
          setAutor(obj2.data);
        })
      );
  }, []);

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    // exists_author(autor, book);
    try {
      // console.log(book);
      await axios.post("http://localhost:8800/books", book);
      const res = await axios.get("http://localhost:8800/autoricarti");

      // console.log(res.data[0].IDCarte);
      // useEffect(() => {
      //   setac((prev) => ({ ...prev, IDCarte: res.data[0].IDCarte }));
      // }, []);
      autori_carti[0] = res.data[0].IDCarte;
      // console.log(autori_carti);

      // console.log(book);
      // setac((prev) => ({ ...prev, IDAutor: book.IDAutor }));
      autori_carti[1] = book.IDAutor;
      // console.log(autori_carti);

      await axios.post("http://localhost:8800/autoricarti", autori_carti);
      navigate("/admin");
    } catch (err) {
      console.log(err);
    }
    // console.log(book);
  };

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

  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="Title"
        onChange={handleChange}
        name="Titlu"
      />
      <div className="autori">
        <DropdownButton id="dropdown-basic-button" title="Authors list">
          {autor.map((autor) => (
            <Dropdown.Item
              onClick={() =>
                setBook((prev) => ({ ...prev, IDAutor: autor.IDAutor }))
              }>
              {autor.IDAutor + "." + autor.NumeAutor + " " + autor.PrenumeAutor}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
      <input
        type="datetime-local"
        placeholder="Birth"
        onChange={handleChange}
        name="AnPublicare"
      />
      <input
        type="text"
        placeholder="Language"
        onChange={handleChange}
        name="Limba"
      />
      <div className="autori">
        <DropdownButton id="dropdown-basic-button" title="Genres list">
          {genre.map((genre) => (
            <Dropdown.Item
              onClick={() =>
                setBook((prev) => ({ ...prev, IDGen: genre.IDGen }))
              }>
              {genre.IDGen + "." + genre.NumeGen}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
      <input
        type="text"
        placeholder="Price"
        onChange={handleChange}
        name="PretCarte"
      />
      <button className="formButton" onClick={handleClick}>
        ADD
      </button>
    </div>
  );
};

export default Add;
