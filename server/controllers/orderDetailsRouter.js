const orderDettailRouter = require("express").Router();
const { Order } = require("../models");
const OrderDetail = require("../models/orderDetail");

orderDettailRouter.post("/cart", async (req, res) => {
  const newOrder = Order.create();
  
});
