import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import BookSection from "../Components/BookSection";

const Books = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("http://localhost:5000/api/v1/getBooks")
        .then((res) => setData(res.data));
    }
    fetch();
  });
  return (
    <div>
      <div style={{ minHeight: "91.5vh" }}>
        <h4 className="text-dark d-flex justify-content-center align-align-items-center">
          BOOKS SECTION
        </h4>
        {data?<BookSection data = {data} />: <>Data Loading</>}
      </div>
    </div>
  );
};

export default Books;
