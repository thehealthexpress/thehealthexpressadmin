const express = require("express");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const Order = require("../models/Order");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/login", async (req, res) => {
  const admin = await Admin.findOne(req.body);
  if (!admin) return res.status(401).json({ msg: "Invalid" });

  const token = jwt.sign({}, process.env.JWT_SECRET);
  res.json({ token });
});

router.get("/orders", auth, async (req, res) => {
  const orders = await Order.find().sort({ _id: -1 });
  res.json(orders);
});

router.put("/order/:id", auth, async (req, res) => {
  await Order.findByIdAndUpdate(req.params.id, {
    status: req.body.status
  });
  res.json({ success: true });
});

module.exports = router;
