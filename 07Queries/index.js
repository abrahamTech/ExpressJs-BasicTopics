const express = require("express");

const app = express();

app.get("/users/:username", (req, res) => {
    console.log(req.query);
    res.send(`Hi ${req.query.name}, you are ${req.query.age} years old`)
});

app.get("/search", (req, res) => {
    if(req.query.place === "Cancun") {
        // http://localhost:3000/search?place=Cancun
        res.send("Best Beach in the world");
    } else {
        // http://localhost:3000/search
        res.send("Normal page");
    }
});

app.get("/array", (req, res) => {
    // http://localhost:3000/array?user=Steve&user=Peter&user=Tony
    console.log(req.query);
    res.send(`The array ${JSON.stringify(req.query.user)}`)
    // { user: [ 'Steve', 'Peter', 'Tony' ] }
})


app.listen(3000, () => {
    console.log(`Server listen in port ${3000}`);
})