import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/style.css";
import home_cover from "../images/home_cover1.jpg";
import image_book_1 from "../images/book_with_number_1.png";
import image_book_2 from "../images/book_with_number_2.png";
import image_book_3 from "../images/book_with_number_3.png";

const Home = () => {
  const [mostSold, setMostSold] = useState([]);

  useEffect(() => {
    const fetchTopThree = async () => {
      try {
        const { res } = await axios.get("http://localhost:8800/mostsold");
        setMostSold(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTopThree();
  }, []);

  // axios.all([axios.get("http://localhost:8800/mostsold")]).then(
  //   axios.spread((obj1) => {
  //     setMostSold(obj1.data);
  //   })
  // );

  console.log(mostSold);

  return (
    <div className="homepage">
      <div className="home_bg">
        <img src={home_cover} className="home_cover" alt="" />
      </div>
      <div className="homeBoxRow">
        <div className="homeFlexItem">
          <div className="homeFlexImage">
            <img className="bookImage" src={image_book_1} alt="" />
          </div>
          <div className="homeFlexBook">
            {/* <h2>{mostSold[0].MostSoldBookTitle}</h2> */}
          </div>
        </div>
        <div className="homeFlexItem">
          <div className="homeFlexImage">
            <img className="bookImage" src={image_book_2} alt="" />
          </div>
          <div className="homeFlexBook">
            {/* <h2>{mostSold[1].MostSoldBookTitle}</h2> */}
          </div>
        </div>
        <div className="homeFlexItem">
          <div className="homeFlexImage">
            <img className="bookImage" src={image_book_3} alt="" />
          </div>
          <div className="homeFlexBook">
            {/* <h2>{mostSold[2].MostSoldBookTitle}</h2> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
