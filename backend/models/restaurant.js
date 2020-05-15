const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const RestaurantSchema = new Schema({
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
  email: {
    type: String,
    required: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
