const express = require('express');
const app = express();
const cors = require('cors');

const bookRoute = require("./routes/booksRoutes");

require("./connection/db");
app.use(cors());
app.use(express.json());
app.use("/api/v1", bookRoute);

app.listen(5000, ()=>{
    console.log("Server is running");
})
