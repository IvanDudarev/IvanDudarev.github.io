const http = require("http");

const hostname = "176.123.167.21";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/getColor") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    // Генерация случайного цвета
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const response = JSON.stringify({ color });

    res.end(response);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
