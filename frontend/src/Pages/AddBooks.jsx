import React from "react";
import { useState } from "react";
import axios from "axios";

const AddBooks = () => {
  const [data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    image: "",
    price: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  console.log(data);
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/v1/add", data)
      .then((res) => alert(res.data.message));
    setData({
      bookname: "",
      author: "",
      description: "",
      image: "",
      price: "",
    });
  };
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center my-5"
      style={{
        fontWeight: "bold",
        fontSize: "20px",
        height: "550px",
        width: "550px",
        border: "2px solid violet",
        borderRadius: "10px",
        backgroundColor: "rgba(230, 11, 208,.4)",
      }}
    >
      <form>
        <div className="form-group my-3">
          <label for="exampleFormControlInput1">Book Name</label>
          <input
            style={{ width: "30rem" }}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Inner Engineering"
            name="bookname"
            onChange={change}
            value={data.bookname}
          />
        </div>
        <div className="form-group my-3">
          <label for="exampleFormControlInput2">Author Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Sadhguru"
            name="author"
            onChange={change}
            value={data.author}
          />
        </div>
        <div className="form-group my-3">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            onChange={change}
            value={data.description}
          ></textarea>
        </div>
        <div className="form-group my-3">
          <label for="exampleFormControlInput3">Picture Link </label>
          <br />
          <input
            type="url"
            className="form-control"
            id="exampleFormControlInput3"
            name="image"
            onChange={change}
            value={data.image}
          />
        </div>
        <div className="form-group my-3">
          <label for="exampleFormControlInput1">Price (in rupees)</label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            name="price"
            placeholder="125"
            onChange={change}
            value={data.price}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "Center",
            alignItem: "center",
          }}
        >
          <button
            onClick={submit}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              fontWeight: "bolder",
            }}
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBooks;
