const bcrypt = require("bcryptjs");

const users = [
  { id: 1, username: "bruce_banner@gmail.com", password: "Hulk" },
  { id: 2, username: "tony_stark@gmail.com", password: "Ironman" },
  { id: 3, username: "thor_odinson@gmail.com", password: "Thor" },
  { id: 4, username: "natasha_romanova@gmail.com", password: "Black_Widow" },
  { id: 5, username: "steve_rogers@gmail.com", password: "Captain_America" }
];
function hashing(arr) {
  return arr.map(userObj => {
    var salt = bcrypt.genSaltSync(14);
    var hash = bcrypt.hashSync(userObj.password, salt);
    userObj.password = hash;
    return userObj;
  });
}

exports.seed = function(knex) {
  return knex("users").insert(hashing(users));
};
