import React, { useEffect, useState } from "react";
import axios from "axios";

const ReviewsAverage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        const res = await axios.get("http://localhost:8800/reviewsaverage");
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
        <h1>The reviews average table</h1>
        <div>
          <table className="table-head">
            <tr>
              <td className="header-review-average-title">Title</td>
              <td className="header-review-average">Average</td>
            </tr>
          </table>
        </div>
        <div className="autori">
          {reviews.map((reviews) => (
            <div className="autor" key={reviews.IDCarte}>
              <table className="books-table">
                <tr>
                  <td className="book-title-cell">{reviews.Titlu}</td>
                  <td className="review-average-cell">{reviews.medie}</td>
                </tr>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsAverage;
