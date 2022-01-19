const mongoose = require("mongoose");
let categorySchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Type your category name"],
  },
});

module.exports = mongoose.model("Category", categorySchema);
