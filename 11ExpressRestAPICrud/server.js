const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
// app.use(morgan("short"));
// app.use(morgan("tiny"));

app.get("/products", (req, res) => {
    res.send("Getting Products");
});

app.post("/products", (req, res) => {
    res.send("Creating Products");
});

app.put("/products", (req, res) => {
    res.send("Updating Products");
});

app.delete("/products", (req, res) => {
    res.send("Deleting Products");
});

app.get("/products/:id", (req, res) => {
    res.send("Getting One Product");
});

app.listen(3000, () => {
    console.log(`Server listening on port ${3000}`);
});