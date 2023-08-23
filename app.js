const express = require('express');
const path = require('path');

const port = process.env.PORT || 3001
const app = express();

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"))
})


app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"))
})

app.listen(port, () => {
  console.log(`Servidor levantado en http://localhost:${port} `);
})