const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

router.post("/order", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json({ success: true });
});

module.exports = router;
