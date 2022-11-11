const express = require("express");
const cors = require("cors");
const path = require("path");
const productRouter = require("./controllers/productRouter");
const userRouter = require("./controllers/userRouter");
const loginRouter = require("./controllers/loginRouter");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);

app.use(express.static("dist"));
// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});
module.exports = app;
