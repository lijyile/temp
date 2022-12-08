const http = require("http");

const server = http.createServer((req, res) => {
  res.write("welcome bro!!");
  res.end();
});

server.listen(5000);
