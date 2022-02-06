const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const HASH_ROUND = 10;

let playerSchema = mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    email: {
      type: String,
      require: [true, "Type your email"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Type your password"],
      maxlength: [32, "length password 8 - 32 character"],
      minlength: [8, "length password 8 - 32 character"],
    },
    phoneNumber: {
      type: String,
      require: [true, "Type your phone number"],
      unique: true,
      maxlength: [32, "length phone number 9 - 32 character"],
      minlength: [9, "length phone number 9 - 32 character"],
    },
    username: {
      type: String,
      require: [true, "type your username"],
      unique: true,
      maxlength: [32, "length username 3 - 32 character"],
      minlength: [3, "length username 3 - 32 character"],
    },
    name: {
      type: String,
      require: [true, "type your name"],
      maxlength: [32, "length name 3 - 32 character"],
      minlength: [3, "length name 3 - 32 character"],
    },
    avatar: {
      type: String,
    },
    fileName: {
      type: String,
    },
    favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

playerSchema.path("email").validate(
  async function (value) {
    try {
      const count = await this.model("Player").countDocuments({ email: value });
      return !count;
    } catch (err) {
      throw err;
    }
  },
  (attr) => `${attr.value} already used`
);

playerSchema.path("username").validate(
  async function (value) {
    try {
      const count = await this.model("Player").countDocuments({
        username: value,
      });
      return !count;
    } catch (err) {
      throw err;
    }
  },
  (attr) => `${attr.value} already used`
);

playerSchema.path("phoneNumber").validate(
  async function (value) {
    try {
      const count = await this.model("Player").countDocuments({
        phoneNumber: value,
      });
      return !count;
    } catch (err) {
      throw err;
    }
  },
  (attr) => `${attr.value} already used`
);

playerSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, HASH_ROUND);
  next();
});
module.exports = mongoose.model("Player", playerSchema);
