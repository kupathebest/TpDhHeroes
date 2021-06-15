const express = require("express");
const app = express();
const port = 3030
const path = require("path")

app.get("/", (req,res) => res.send("funcionando"))

app.listen(port, () => console.log(`el servidor esta corriendo en http://localhost:${port}`))