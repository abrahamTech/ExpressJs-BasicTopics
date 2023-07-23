const express = require("express");

const app = express();

// Can be accessed by all because it is located before the middlewares
app.get("/about", (req, res) => {
    res.send("About page")
});

// Show Info Middleware
app.use((req, res, next) => {
    console.log("First Middleware (Logger)")
    console.log(`Route: ${req.url} Method: ${req.method}`)
    next()
});

// Route that pass through the first middleware
app.get("/profile", (req, res) => {
    res.send("Profile page");
});

// Authentication Middleware
app.use((req, res, next) => {
    if(req.query.login === "abrahamTech"){
        // You need to add to the URL -> ?login=abrahamTech
        // Ex: http://localhost:3000/dashborad?login=abrahamTech
        console.log("Authorized");
        next(); 
    } else {
        res.send("Not authorized")
    }
});


// Route that must first pass through the second middleware
app.get("/dashboard", (req, res) => {
    res.send("Dashboard page");
});


app.listen(3000, () => {
    console.log(`Server listen in port ${3000}`)
});
