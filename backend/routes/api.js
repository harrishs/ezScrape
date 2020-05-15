const express = require("express");

const apiController = require("../controllers/api");

const router = express.Router();

router.get("/", apiController.getRestaurants);

router.get("/restaurant/:id", apiController.getRestaurants);

module.exports = router;
