const mongoose = require("mongoose");
let userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Type your email"],
    },
    name: {
      type: String,
      require: [true, "Type your name"],
    },
    password: {
      type: String,
      require: [true, "Type your password"],
    },
    phoneNumber: {
      type: String,
      require: [true, "Type your phone number"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "Y",
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
