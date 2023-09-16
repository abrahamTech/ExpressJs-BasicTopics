//Router Node Module - Option 1
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const message = "Message: Home Page"
    //EJS file in "views" folder
    res.render("index", {title: message});
})

router.all("/about", (req, res) => {
    //EJS file in "views" folder
    res.render("about");
});

router.get("/dashboard", (req, res) => {
    //EJS file in "views" folder
    res.render("dashboard");
});

module.exports = router;