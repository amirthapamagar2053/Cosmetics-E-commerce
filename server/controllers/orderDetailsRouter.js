const orderDetailRouter = require("express").Router();
const { Order } = require("../models");
const OrderDetail = require("../models/orderDetail");

orderDetailRouter.post("/", async (req, res) => {
  const { productid } = req.body;

  try {
    const oldOrder = await Order.findOne({
      where: {
        status: "pending",
        userId: req.user.id,
      },
    });
    if (oldOrder) {
      const orderDetail = await OrderDetail.create({
        orderId: oldOrder.id,
        productId: productid,
      });
      res.json(orderDetail).status(200);
    }

    const newOrder = await Order.create({
      ...req.body,
      userId: req.user.id,
    });
    const orderDetail = await OrderDetail.create({
      orderId: newOrder.id,
      productId: productid,
    });
    res.json(orderDetail).status(200);
  } catch (error) {
    return res.status(400);
  }
});

orderDetailRouter.get("/", async (req, res) => {
  const order = await Order.findOne({
    where: {
      status: "pending",
      userId: req.user.id,
    },
  });
  const orderDetails = await OrderDetail.findAll({
    where: {
      orderId: order.id,
    },
  });
  res.json(orderDetails).status(200);
});

module.exports = orderDetailRouter;
