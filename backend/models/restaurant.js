const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
