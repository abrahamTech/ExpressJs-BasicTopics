/* 
Router with JS Functions

const HomeRoutes = (app) => {

    app.all("/about", (req, res) => {
        res.send("About Page");
    });
    
    app.get("./dashboard", (req, res)=> {
        res.send("Dashboard Page");
    });

};

module.exports = HomeRoutes;
*/


//Router Node Module -Option 1
const express = require("express");
const router = express.Router();

router.all("/about", (req, res) => {
    res.send("About Page");
});

router.get("/dashboard", (req, res)=> {
    res.send("Dashboard Page");
});

module.exports = router;
