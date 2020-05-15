const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const mongoConnect = require("./util/database");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

mongoConnect((client) => {
  app.listen(3000);
});
