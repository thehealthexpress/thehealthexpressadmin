const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: String,
  phone: String,
  address: String,
  location: {
    lat: Number,
    lng: Number
  },
  items: Array,
  status: {
    type: String,
    default: "NEW"
  }
});

module.exports = mongoose.model("Order", orderSchema);
