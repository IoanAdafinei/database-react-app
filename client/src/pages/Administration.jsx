import React, { useState } from "react";
import axios from "axios";

const Administration = () => {
  const [avgPrice, setAvgPrice] = useState(0);
  // console.log(avgPrice);
  var result = Math.round(avgPrice * 100) / 100;
  const [maxOrder, setMaxOrder] = useState(0);
  var result1 = Math.round(maxOrder * 100) / 100;
  const [bestSellerName, setBestSellerName] = useState("");
  const [soldCount, setSoldCount] = useState(0);
  // var bestSellerName = "";
  // var soldCount = 0;

  // http://192.168.0.189/

  axios
    .all([
      axios.get("http://localhost:8800/avgorder"),
      axios.get("http://localhost:8800/highestorder"),
      axios.get("http://localhost:8800/mostsold"),
      // axios.get("http://192.168.0.189:8800/avgorder"),
      // axios.get("http://192.168.0.189:8800/highestorder"),
      // axios.get("http://192.168.0.189:8800/mostsold"),
      //daca vreau sa mearga si pe telefon trebuie sa am grija sa pun adresa locala a laptopului mai sus
    ])
    .then(
      axios.spread((obj1, obj2, obj3) => {
        // console.log(obj1.data[0].pret);
        setAvgPrice(obj1.data[0].pret);
        // console.log(obj2.data[0].pret1);
        setMaxOrder(obj2.data[0].pret1);
        // console.log(obj3.data[0].MostSoldBookTitle);
        // console.log(obj3.data[0].TotalSold);
        //   bestSellerName = obj3.data[0].MostSoldBookTitle;
        //   soldCount = obj3.data[0].TotalSold;
        setBestSellerName(obj3.data[0].MostSoldBookTitle);
        setSoldCount(obj3.data[0].TotalSold);
      })
    );
  // console.log(bestSellerName);
  // console.log(soldCount);

  return (
    <div className="adminHome">
      <div className="adminSpacer">
        <div>
          <br />
        </div>
      </div>
      <div className="adminBoxRow">
        <div className="flexItem">
          <h1>Best selling book</h1>
          <div>
            <b>{bestSellerName}</b> sold {soldCount} times
          </div>
        </div>
        <div className="flexItem">
          <h1>Highest order</h1>
          <div>{result1} RON</div>
        </div>
        <div className="flexItem">
          <h1>Average order</h1>
          <div>{result} RON</div>
        </div>
      </div>
    </div>
  );
};

export default Administration;
