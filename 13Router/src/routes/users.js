/* 
Router with JS Functions

const UserRoutes = (app) => {

    app.get("/UserName", (req, res) => {
        res.send("Username Route");
    });

    app.get("/profile", (req, res) => {
        console.log(req.body);
        res.send("Profile Page");
    })
};

module.exports = UserRoutes;
*/


//Router Node Module -Option 2
const { Router } = require("express");
const router = Router();

router.get("/UserName", (req, res) => {
    res.send("Username Route");
});

router.get("/profile", (req, res) => {
    console.log(req.body);
    res.send("Profile Page");
});

module.exports = router;
