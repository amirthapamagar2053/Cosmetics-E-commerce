const orderRouter = require("express").Router();
const Order = require("../models/order");

orderRouter.post("/", async (req, res) => {
  const newOrder = Order.create(order);
  res.json(newOrder);
});

module.exports = orderRouter;
