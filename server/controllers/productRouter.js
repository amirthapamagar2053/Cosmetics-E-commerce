const productRouter = require("express").Router();
const { Product } = require("../models");

productRouter.get("/", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products).status(200);
  } catch (error) {
    return res.status(404);
  }
});

module.exports = productRouter;
