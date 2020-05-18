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

RestaurantSchema.pre("save", function (next) {
  if (this.isNew || this.isModified("password")) {
    const document = this;
    bcrypt.hash(document.password, saltRounds, function (err, hashedPassword) {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

RestaurantSchema.methods.isCorrectPassword = function (password, cb) {
  bcrypt.compare(password, this.password, function (err, same) {
    if (err) {
      cb(err);
    } else {
      cb(err, same);
    }
  });
};

module.exports = mongoose.model("Restaurant", RestaurantSchema);
