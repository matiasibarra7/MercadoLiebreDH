const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("running!");
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});