import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const image = require("../Images/image_girl.jpg");
  return (
    <>
      <div className="Home-Page  container-fluid d-flex flex-wrap justify-content-center align-items-center">
        <div className="row container">
          <div
            className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
            // style={{ height: "85vh" }}
          >
            <h2 style={{ fontSize: "83px" }}>BOOK STORE </h2>
            <h3 style={{ fontSize: "50px" }}>FOR YOU</h3>
            <p
              style={{
                color: "rgb(148, 7, 82)",
                fontWeight: "bold",
                fontSize: "20px",
                fontFamily: "Roboto Mono",
              }}
            >
              Checkout The Books From Here.
            </p>
            <Link to="/books" className="viewbook ">
              View Books
            </Link>
          </div>
          <div
            className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
            // style={{ height: "85vh " }}
          >
            <img class="image" src={image} alt="/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
