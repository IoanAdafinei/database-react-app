import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [isLoading, setLoading] = useState(true); // Loading state
  const [images, setImages] = useState([]); // images state

  useEffect(() => {
    // useEffect hook
    setTimeout(() => {
      // simulate a delay
      axios
        .get("https://api.slingacademy.com/v1/sample-data/photos")
        .then((response) => {
          // Get images data
          console.log(response.data.photos);
          setImages(response.data.photos); //set images state
          setLoading(false); //set loading state
        });
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}>
        Loading the data {console.log("loading state")}
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}>
      <h1 style={{ color: "green" }}> GeeksforGeeks</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "2%",
        }}>
        {images.map((e) => {
          return (
            <div
              style={{
                width: "15rem",
                margin: "1%",
              }}>
              <img style={{ width: "200px" }} alt={e.title} src={e.url} />
              <h3>{e.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
