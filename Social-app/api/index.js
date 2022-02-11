const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

const app = express();
// mongoose connection

mongoose.connect(process.env.CONNECTION_URL, () => {
  console.log("connected to db");
});

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(helmet());
app.use(morgan("common"));
// Routing

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
// Port
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`The server is listening on ${PORT}`);
});
