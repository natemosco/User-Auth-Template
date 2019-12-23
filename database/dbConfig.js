const knex = require("knex");

const knexfileConfig = require("../knexfile");

const environment = process.env.DB_ENV || "development";

module.exports = knex(knexfileConfig[environment]);
