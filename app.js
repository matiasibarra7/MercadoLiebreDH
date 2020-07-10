const express = require("express");
const app = express();
const user = require(`${__dirname}/public/js/user.js`)

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("running!");
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/", (req, res) => {
  user.writeUser(req.body)
  //res.send(user.readUsers())  // --> te muestra como quedó el archivo con los users
  res.sendFile(`${__dirname}/index.html`);           // --> te devuelve a la home
});

app.get("/register", (req, res) => {
  res.sendFile(`${__dirname}/views/register.html`);
});

app.get("/login", (req, res) => {
  res.sendFile(`${__dirname}/views/login.html`);
});
