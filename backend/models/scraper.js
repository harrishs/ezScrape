const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ScraperSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  selector: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Scraper", ScraperSchema);
