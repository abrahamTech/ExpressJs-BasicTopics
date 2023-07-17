const express = require("express");

const app = express();

app.get("/hello/:userName", (req, res) => {
    //All info from "params"
    console.log(req.params);
    //Type of value from the params (All are String)
    console.log(typeof req.params.userName)

    //Show the params in the page
    // res.send(`Hello ${req.params.userName}`);

    //Some useful methods
    res.send(`Hello ${req.params.userName.toUpperCase()}`)
});

app.get("/add/:x/:y", (req, res) => {

    const result1 = parseInt(req.params.x) + parseInt(req.params.y);
    const {x, y} = req.params

    res.send(`Result 1: ${result1} <br> Result 2: ${parseInt(x) + parseInt(y)}`);
});

app.get("/users/:username/photo", (req, res) => {
    if(req.params.username === "iphone") {
        return res.sendFile("./src/iphoneMockup.png", {
            root: __dirname
        })
    }

    res.send("The user does not have access to the image");
});

app.get("/name/:userName/age/:age", (req, res) => {
    const {userName, age} = req.params;

    res.send(`The user ${userName} is ${age} years old`);
})



app.listen(3000, () => {
    console.log(`Server listen in port ${3000}`)
});