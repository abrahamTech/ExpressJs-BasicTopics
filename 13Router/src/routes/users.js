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