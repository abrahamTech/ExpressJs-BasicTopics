const HomeRoutes = (app) => {

    app.all("/about", (req, res) => {
        res.send("About Page");
    });
    
    app.get("./dashboard", (req, res)=> {
        res.send("Dashboard Page");
    });

};

module.exports = HomeRoutes;
