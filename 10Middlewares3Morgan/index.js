const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
// app.use(morgan("short"));
// app.use(morgan("tiny"));

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/profile", (req, res) => {
    res.send("Profile Page");
});

app.listen(3000, () => {
    console.log(`Server listening on port ${3000}`);
});