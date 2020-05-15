const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getRestaurants);

router.get("/restaurant/:id", shopController.getRestaurant);

router.post("/add-restaurant", shopController.postAddRestaurant);

module.exports = router;
