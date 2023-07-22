const express = require("express");

const app = express();

// Before going to the routes, they will all go through this Middleware
app.use((req, res, next) => {
    
    console.log("Middlewares")
    console.log(`Route: ${req.url} Method: ${req.method}`)

    //Method to pass to the routes
    next()
});

app.get("/profile", (req, res) => {
    res.send("Profile Page")
});

//You can test it with any method using thunder client
app.all("/about", (req, res) => {
    res.send("About Page");
});

app.listen(3000, () => {
    console.log(`Server listen in port ${3000}`)
});