const Restaurant = require("../models/restaurant");

exports.getRestaurants = (req, res, next) => {
  Restaurant.find()
    .then((restaurants) => {
      res.render("restaurant-tool", {
        restaurants: restaurants,
      });
    })
    .catch((err) => {
      throw err;
    });
};

exports.postAddRestaurant = (req, res, next) => {
  const name = req.body.name;
  const type = req.body.type.split(",");
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;
  const restaurant = new Restaurant({ name, type, description, imageUrl });
  restaurant
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      throw err;
    });
};

exports.getRestaurant = (req, res, next) => {
  const restaurantId = req.params.id;
  Restaurant.findById(restaurantId)
    .then((restaurant) => {
      res.render("edit-restaurant", {
        restaurant: restaurant,
      });
    })
    .catch((err) => {
      throw err;
    });
};

exports.postEditRestaurant = (req, res, next) => {
  const restaurantId = req.params.id;
  const name = req.body.name;
  const type = req.body.type.split(",");
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;

  Restaurant.findById(restaurantId).then((restaurant) => {
    restaurant.name = name;
    restaurant.type = type;
    restaurant.description = description;
    restaurant.imageUrl = imageUrl;
    restaurant.save();
    res.redirect("/");
  });
};

exports.postDeleteRestaurant = (req, res, next) => {
  const restaurantId = req.body.id;
  Restaurant.findByIdAndRemove(restaurantId)
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      throw err;
    });
};
