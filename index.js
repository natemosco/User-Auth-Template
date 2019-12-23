require("dotenv").config();

const server = require("./api/server.js");

const PORT = process.env.PORT || 3459;
server.listen(PORT, () => {
  console.log(
    `\n********************************************************\n*\n* Welcome Back Sir: server is listening on port ${PORT} \n*\n********************************************************\n`
  );
});
