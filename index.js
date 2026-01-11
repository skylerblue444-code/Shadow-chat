const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  const filePath = path.join(__dirname, "public", "index.html");

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end("UI load error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    }
  });
}).listen(PORT, () => {
  console.log("ShadowChat UI live on port", PORT);
});