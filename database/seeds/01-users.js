exports.seed = function(knex) {
  return knex("users").insert([
    { id: 1, username: "bruce_banner@gmail.com", password: "Hulk" },
    { id: 2, username: "tony_stark@gmail.com", password: "Ironman" },
    { id: 3, username: "thor_odinson@gmail.com", password: "Thor" },
    { id: 4, username: "natasha_romanova@gmail.com", password: "Black_Widow" },
    { id: 5, username: "steve_rogers@gmail.com", password: "Captain_America" }
  ]);
};
