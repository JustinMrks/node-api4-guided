const server = require("./api/server.js");

require("dotenv").config();

const port = process.env.PORT || 5000;
const secret = process.env.SECRET_THING || "I don't know about that";

console.log(port, secret);

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
