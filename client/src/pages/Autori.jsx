import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Autori = () => {
  const [autor, setAutor] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllAuthors = async () => {
      try {
        const res = await axios.get("http://localhost:8800/autori");
        // console.log(res.data);
        setAutor(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllAuthors();
  });

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/autori/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/admin/updateauthor/` + id);
  };

  return (
    <div class="table-page">
      <div>
        <h1>The authors table</h1>
        <div>
          <table className="table-head">
            <tr>
              <td className="header-review-name-cell">Name</td>
              <td className="header-review-surname-cell">Surname</td>
              <td className="header-review-text-cell-full-reviews">
                Birth date
              </td>
              <td className="header-review-book-title">Country of origin</td>
            </tr>
          </table>
        </div>
        <div className="autori">
          {autor.map((autor) => (
            <div className="autor" key={autor.IDAutor}>
              <table>
                <tr>
                  <td className="order-name-cell">{autor.NumeAutor}</td>
                  <td className="order-surname-cell">{autor.PrenumeAutor}</td>
                  <td className="order-books-cell">
                    {autor.DataNasteriiAutor}
                  </td>
                  <td className="order-quantity-cell">{autor.Tara}</td>
                </tr>
              </table>
              <button
                className="delete"
                onClick={() => handleDelete(autor.IDAutor)}>
                Delete
              </button>
              <button
                className="update"
                onClick={() => handleUpdate(autor.IDAutor)}>
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

export default Autori;
