const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const userRouter = require("./users/userRouter");
const authRouter = require("./auth/authRouter");

const globalMiddleware = [helmet(), cors(), express.json()];

const server = express();
server.use(globalMiddleware);

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Base server is up and running" });
});

module.exports = server;
