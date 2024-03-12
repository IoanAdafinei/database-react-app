import React, { useEffect, useState } from "react";
import axios from "axios";

const BooksWithReviewsOverAverage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        const res = await axios.get("http://localhost:8800/overaveragereview");
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
        <h1>List of books with reviews over the average</h1>
        <div>
          <table className="table-head">
            <tr>
              <td className="header-review-avg-title">Book title</td>
              <td className="header-review-avg">Review</td>
            </tr>
          </table>
        </div>
        <div className="autori">
          {reviews.map((reviews) => (
            <div className="autor" key={reviews.IDCarte}>
              <table className="books-table">
                <tr>
                  <td className="review-avg-title">{reviews.Titlu}</td>
                  <td className="review-avg">{reviews.AverageRating}</td>
                </tr>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksWithReviewsOverAverage;
