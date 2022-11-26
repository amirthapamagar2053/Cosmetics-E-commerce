const orderRouter = require("express").Router();
const Order = require("../models/order");

orderRouter.get("/", async (req, res) => {
  const orders = await Order.findAll();
  res.json(orders).status(200);
});

module.exports = orderRouter;
