const http = require("http");

const pages = {
  "/": "Welcome to our home page",
  "/about": "Here is our short story",
  "/login": "Here is our login page",
  404: `
    <h1>Oops that page does not exist!</h1>
    <p>Go back to <a href="/">home</a></p>
  `,
};

const server = http.createServer((req, res) => {
  res.end(pages[req.url] || pages[404]);
});

server.listen(5000, () => console.log("running on 5000"));
