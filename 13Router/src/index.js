const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

const HomeRoutes = require("./routes/home");
const UserRoutes = require("./routes/users");


//Settings
app.set("port", 3000);

//Middlewares
app.use(express.json());
app.use(morgan("dev"));


HomeRoutes(app);
UserRoutes(app);


app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(app.get("port"), ()=> {
    console.log(`Server listening on port ${app.get("port")}`);
});
