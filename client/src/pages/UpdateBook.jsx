import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Update = () => {
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
  // var AuthorID = 0;
  // const [AuthorID, setAuthorID] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const BookID = location.pathname.split("/")[3];

  useEffect(() => {
    axios
      .all([
        axios.get("http://localhost:8800/genres"),
        axios.get("http://localhost:8800/autori"),
        // axios.get("http://localhost:8800/books/" + BookID),
      ])
      .then(
        axios.spread((obj1, obj2) => {
          // console.log(obj1.data);
          setGenre(obj1.data);
          // console.log(obj2.data);
          setAutor(obj2.data);
          // console.log(obj3.data[0]);
          // // setBook(obj3.data);
          // setBook({ ...book, Titlu: obj3.data[0].Titlu });
          // setBook({ ...book, AnPublicare: obj3.data[0].AnPublicare });
          // setBook({ ...book, Limba: obj3.data[0].Limba });
          // setBook({ ...book, IDGen: obj3.data[0].IDGen });
          // setBook({ ...book, PretCarte: obj3.data[0].PretCarte });

          /////vezi sa iei element cu element sa setezi in book ca altfel nu merge
        })
      );
  }, []);

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/books/" + BookID, book);
      await axios.put("http://localhost:8800/autoricarti/" + BookID, book);
      navigate("/admin/books");
    } catch (err) {
      console.log(err);
    }
  };

  // function handleAuthorClick() {
  //   setAuthorID(autor.IDAutor);
  // }

  console.log(book);
  // console.log(autor);
  // console.log(AuthorID);

  return (
    <div className="form">
      <h1>Update Book</h1>
      <input
        type="text"
        placeholder={book.Titlu}
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
        UPDATE
      </button>
    </div>
  );
};

export default Update;
