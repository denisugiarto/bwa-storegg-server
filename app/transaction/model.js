const mongoose = require("mongoose");
let transactionSchema = mongoose.Schema(
  {
    historyVoucherTopup: {
      gameName: { type: String, require: [true, "type your game name"] },
      category: { type: String, require: [true, "type your category"] },
      thumbnail: { type: String },
      coinName: { type: String, require: [true, "type your coin name"] },
      coinQuantity: {
        type: String,
        require: [true, "type your coin quantity"],
      },
      price: { type: Number },
    },

    historyPayment: {
      name: { type: String, require: [true, "type your name"] },
      type: { type: String, require: [true, "select your type"] },
      bankName: { type: String, require: [true, "type your bank name"] },
      accountNumber: {
        type: String,
        require: [true, "type your account number"],
      },
    },

    name: {
      type: String,
      require: [true, "Type your name"],
      maxlength: [32, "length name 3 - 32 character"],
      minlength: [3, "length name 3 - 32 character"],
    },

    accountUser: {
      type: String,
      require: [true, "Type your account number"],
      maxlength: [32, "length name 3 - 32 character"],
      minlength: [3, "length name 3 - 32 character"],
    },

    tax: {
      type: Number,
      default: 0,
    },

    value: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },

    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },

    historyUser: {
      name: { type: String, require: [true, "type your name"] },
      phoneNumber: {
        type: String,
        require: [true, "type your phone number"],
        maxlength: [13, "length name 9 - 13 character"],
        minlength: [9, "length name 9 - 13 character"],
      },
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
