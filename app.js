const express = require("express");
const app = express();



app.use(express.static("public"));
app.use(express.urlencoded({ extended:false }))

app.listen(3000, () => {
  console.log("running!");
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/register", (req, res) => {
  res.sendFile(`${__dirname}/views/register.html`);
});

app.post("/register", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/login", (req, res) => {
  res.sendFile(`${__dirname}/views/login.html`);
});

app.post("/login", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});