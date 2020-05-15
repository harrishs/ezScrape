const Restaurant = require("../models/restaurant");

exports.getRestaurants = (req, res, next) => {
  Restaurant.find()
    .then((restaurants) => {
      res.status(200).send({
        restaurants: restaurants,
      });
    })
    .catch((err) => {
      throw err;
    });
};

exports.getRestaurant = (req, res, next) => {
  const restaurantId = req.params.id;
  Restaurant.findById(restaurantId)
    .then((restaurant) => {
      res.status(200).send({
        restaurant: restaurant,
      });
    })
    .catch((err) => {
      throw err;
    });
};
