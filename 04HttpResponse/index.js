const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/myfile", (req, res) => {
  res.sendFile("./juliaRoberts.jpg", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "Abraham",
    lastname: "Ray",
    age: 35,
    points: [1, 2, 3],
    address: {
      city: "New York",
      street: "Some street 123",
    },
  });
});

app.get("/isalive", (req, res) => {
    res.sendStatus(204);
});

app.listen(3000);
console.log(`Server listen on port ${3000}`);
