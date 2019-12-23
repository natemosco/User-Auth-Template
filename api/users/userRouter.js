const router = require("express").Router();

const Users = require("./userModel");
const restricted = require("../../utils/auth-restricted-middleware");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      console.log(users, "response from GET /");
      res.status(200).json(users);
    })
    .catch(error => {
      console.log(error, "Error from get /");
      res
        .status(500)
        .json({ error, errorMessage: "internal error fetching users" });
    });
});

router.get("/user", (req, res) => {
  const { username } = req.body;
  Users.findBy({ username })
    .then(singleUser => {
      //console.log(singleUser, 'response from GET /user');
      res.status(200).json(singleUser);
    })
    .catch(error => {
      console.log(error, "Error from get /user");
      res.status(500).json({
        errorMessage: "internal error fetching specified User by username",
        error
      });
    });
});

module.exports = router;
