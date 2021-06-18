const express = require("express");
const app = express();
const port = 3030
const path = require("path")

app.get("/", (req,res) => res.sendFile(path.join(__dirname,"visual", "index.html")))
app.get("/babbage", (req,res) => res.sendFile(path.join(__dirname,"visual", "babbage.html")))
app.get("/berners-lee", (req,res) => res.sendFile(path.join(__dirname,"visual", "berners-lee.html")))
app.get("/clarke", (req,res) => res.sendFile(path.join(__dirname,"visual", "clarke.html")))
app.get("/hamilton", (req,res) => res.sendFile(path.join(__dirname,"visual", "hamilton.html")))
app.get("/hopper", (req,res) => res.sendFile(path.join(__dirname,"visual", "hopper.html")))
app.get("/lovelace", (req,res) => res.sendFile(path.join(__dirname,"visual", "lovelace.html")))
app.get("/turing", (req,res) => res.sendFile(path.join(__dirname,"visual", "turing.html")))

app.listen(port, () => console.log(`el servidor esta corriendo en http://localhost:${port}`))