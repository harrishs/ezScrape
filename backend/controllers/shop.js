const Restaurant = require("../models/restaurant");

exports.getRestaurants = (req, res, next) => {
  Restaurant.find()
    .then((products) => {
      console.log(products);
    })
    .catch((err) => {
      throw err;
    });
};

exports.postAddRestaurant = (req, res, next) => {
  const name = req.body.name;
  const type = req.body.type;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;
  const restaurant = new Restaurant({ name, type, description, imageUrl });
  restaurant
    .save()
    .then()
    .catch((err) => {
      throw err;
    });
};

exports.getRestaurant = (req, res, next) => {
  const restaurantId = req.params.id;
  Restaurant.findById(restaurantId)
    .then((restaurant) => {
      console.log(restaurant);
    })
    .catch((err) => {
      throw err;
    });
};
