const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.listen(4000, () => {
  console.log("running!");
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.post("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.get("/register", (req, res) => {
  res.sendFile(`${__dirname}/views/register.html`);
});

app.get("/login", (req, res) => {
  res.sendFile(`${__dirname}/views/login.html`);
});
