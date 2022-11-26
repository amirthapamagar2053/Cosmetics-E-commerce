const express = require("express");
const cors = require("cors");
const path = require("path");
const productRouter = require("./controllers/productRouter");
const userRouter = require("./controllers/userRouter");
const loginRouter = require("./controllers/loginRouter");
const orderDetailRouter = require("./controllers/orderDetailsRouter");
const orderRouter = require("./controllers/orderRouter");
const { tokenExtractor, userExtractor } = require("./utils/middleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(tokenExtractor);
app.use(userExtractor);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/orderDetails", orderDetailRouter);
app.use("/api/orders", orderRouter);

app.use(express.static("dist"));
// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});
module.exports = app;
