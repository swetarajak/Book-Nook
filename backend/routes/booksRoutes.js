const express = require("express");
const app = express();
const router = express.Router();
const bookModel = require("../models/booksModel");

//POST request to add books

router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newBook = new bookModel(data);
    await newBook
      .save()
      .then(() => {
        res.status(200).json({ message: "Book Added Successfully" });
      })
      .catch((err) => {});
  } catch (error) {
    console.log(error);
  }
});

// Get request
router.get("/getBooks", async (req, res) => {
  let books;
  try {
    books = await bookModel.find();
    res.status(200).json({ books });
  } catch (error) {
    console.log(error);
  }
});

// Get request with id
router.get("/getBooks/:id", async (req, res) => {
  let books;
  const id = req.params.id;
  try {
    books = await bookModel.findById(id);
    res.status(200).json({ books });
  } catch (error) {
    console.log(error);
  }
});

// Update Books by ID
router.put("/updateBooks/:id", async (req, res) => {
  const id = req.params.id;
  const { bookname, description, author, image, price } = req.body;
  let book;
  try {
    book = await bookModel.findByIdAndUpdate(id, {
      bookname,
      description,
      author,
      image,
      price,
    });
    await book.save().then(() => res.json({ message: "Book Updated" }));
  } catch (error) {
    console.log(error);
  }
});

// delete by id
router.delete("/deleteBook/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await bookModel.findByIdAndDelete(id).then(() => {
      res.status(201).json({ message: "Deleted Successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
