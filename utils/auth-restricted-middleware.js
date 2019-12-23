const jwt = require("jsonwebtoken");
const Users = require("../api/users/userModel");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const secret = process.env.JWT_SECRET || process.env.LOCAL_JWT_SECRET;
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "invalid token" });
      } else {
        req.token = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ you: "please login and try again" });
  }
};
