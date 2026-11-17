const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Bienvenido a mi API REST");
});

app.listen(8000, () => {
  console.log("Escuchando en el puerto 8000");
});
