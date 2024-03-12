import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const res = await axios.get("http://localhost:8800/orders");
        // console.log(res.data);
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllOrders();
  });

  return (
    <div class="table-page">
      <div>
        <h1>The Orders table</h1>
        <div>
          <table className="table-head">
            <tr>
              <td className="header-review-name-cell">Name</td>
              <td className="header-review-surname-cell">Surname</td>
              <td className="header-review-cell">Order ID</td>
              <td className="header-review-text-cell-full-reviews">
                Order contents
              </td>
              <td className="header-review-book-title">Total quantity</td>
            </tr>
          </table>
        </div>
        <div className="autori">
          {orders.map((orders) => (
            <div className="autor" key={orders.IDComanda}>
              <table className="books-table">
                <tr>
                  <td className="order-name-cell">{orders.NumeClient}</td>
                  <td className="order-surname-cell">{orders.PrenumeClient}</td>
                  <td className="order-id-cell">{orders.IDComanda}</td>
                  <td className="order-books-cell">{orders.TitluriCarti}</td>
                  <td className="order-quantity-cell">
                    {orders.CantitateTotala}
                  </td>
                </tr>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
