const User = require("../models/user");

exports.postAddUser = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = new User({ email, password })
    .save()
    .then(res.redirect("http://localhost:3000"))
    .catch((err) => {
      throw err;
    });
};

exports.postAuthUser = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err) {
      res.status(500).json({
        error: "Internal error please try again",
      });
    } else if (!user) {
      res.status(401).json({
        error: "Incorrect email or password",
      });
    } else {
      user.isCorrectPassword(password, function (err, same) {
        if (err) {
          res.status(500).json({
            error: "Internal error please try again",
          });
        } else if (!same) {
          res.status(401).json({
            error: "Incorrect email or password",
          });
        } else {
          res.redirect("http://localhost:3000/");
        }
      });
    }
  });
};

exports.postDeleteUser = (req, res, next) => {};

exports.postEditUser = (req, res, next) => {};
