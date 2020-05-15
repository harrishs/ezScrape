const express = require("express");

const userController = require("../controllers/users");

const router = express.Router();

router.post("/add-user", userController.postAddUser);

router.post("/delete-user", userController.postDeleteUser);

router.post("/edit-user", userController.postEditUser);

module.exports = router;
