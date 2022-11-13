const orderDetailRouter = require("express").Router();
const { Order } = require("../models");
const OrderDetail = require("../models/orderDetail");

orderDetailRouter.post("/", async (req, res) => {
  console.log("the post orderDetail router enterd");
  const newOrder = Order.create();
});

module.exports = orderDetailRouter;
