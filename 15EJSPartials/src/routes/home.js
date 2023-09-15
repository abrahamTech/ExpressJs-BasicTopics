//Router Node Module - Option 1
const express = require("express");
const router = express.Router();

router.all("/about", (req, res) => {
    const message = "Message: Created form Express"

    //EJS file in "views" folder
    res.render("index", {title: message})
});

router.get("/dashboard", (req, res) => {
    res.send("Dashboard Page")
});

module.exports = router;