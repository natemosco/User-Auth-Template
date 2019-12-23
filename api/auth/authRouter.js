const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/userModel");
const signToken = require("../../utils/signToken");

router.post("/register", (req, res) => {
  // implement registration
  let user = req.body;
  var salt = bcrypt.genSaltSync(14);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json({ message: "internal error creating new user" });
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      // console.log(user, "made it into the .then");
      // const bcryptRes = bcrypt.compareSync(password, user.password);
      // console.log(bcryptRes);
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);
        console.log(token, "token");
        res.status(200).json({ token, message: `Welcome ${user.username}` });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json({
        error,
        errorMessage: "internal error logging you in. Please try again."
      });
    });
});

module.exports = router;
