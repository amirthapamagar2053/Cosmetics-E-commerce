const userRouter = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

userRouter.post("/", async (req, res) => {
  try {
    const { firstname, lastname, password, email } = req.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const newUser = new Object({
      firstname,
      lastname,
      password: passwordHash,
      email,
    });
    const user = User.create(newUser);
    res.json(user);
  } catch (error) {
    res.status(404).end();
  }
});

userRouter.get("/", async (req, res) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (error) {
    res.status(404).end();
  }
});

module.exports = userRouter;
