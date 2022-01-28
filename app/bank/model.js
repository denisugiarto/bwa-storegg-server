const mongoose = require("mongoose");
let bankSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Type your name"],
    },
    bankName: {
      type: String,
      require: [true, "Type your bank name"],
    },
    accountNumber: {
      type: String,
      require: [true, "Type your bank account number"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bank", bankSchema);
