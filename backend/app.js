const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-ekpkv.mongodb.net/directory?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then((result) => {
    app.listen(3030);
    console.log("connected");
  })
  .catch((err) => {
    throw err;
  });
