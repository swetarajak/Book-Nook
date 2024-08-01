const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/BookNook")
.then((res) => {
    console.log("db connected")
})