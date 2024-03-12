import React, { useEffect, useState } from "react";
import axios from "axios";

const FullReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        const res = await axios.get("http://localhost:8800/fullreview");
        // console.log(res.data);
        setReviews(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllReviews();
  });

  return (
    <div class="table-page">
      <div>
        <h1>The complete reviews table</h1>
        <div>
          <table className="table-head">
            <tr>
              <td className="header-review-name-cell">Name</td>
              <td className="header-review-surname-cell">Surname</td>
              <td className="header-review-cell">Review</td>
              <td className="header-review-text-cell-full-reviews">
                Review Text
              </td>
              <td className="header-review-book-title">Book title</td>
            </tr>
          </table>
        </div>
        <div className="autori">
          {reviews.map((reviews) => (
            <div className="autor" key={reviews.IDCarte}>
              <table className="books-table">
                <tr>
                  <td className="order-name-cell">{reviews.NumeClient}</td>
                  <td className="order-surname-cell">
                    {reviews.PrenumeClient}
                  </td>
                  <td className="review-cell">{reviews.NotaRecenzie}</td>
                  <td className="review-text-cell-full-reviews">
                    {reviews.TextRecenzie}
                  </td>
                  <td className="review-book-title">{reviews.Titlu}</td>
                </tr>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullReview;
