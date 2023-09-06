//Router Node Module - Option 1
const express = require("express");
const router = express.Router();

router.all("/about", (req, res) => {
    const newTitle = "My page created fromExpress";

    //EJS file in "views" folder
    res.render("index", {title: newTitle});
});

router.get("/dashboard", (req, res)=> {
    res.send("Dashboard Page");
});

module.exports = router;
