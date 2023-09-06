const express = require("express");
const morgan = require("morgan");
const path = require("path");
const ejs = require("ejs");

const app = express();

const HomeRoutes = require("./routes/home");
const UserRoutes = require("./routes/users");


//Settings
app.set("port", 3000);
//EJS Config
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Middlewares
app.use(express.json());
app.use(morgan("dev"));

//Router Node Module
app.use(HomeRoutes);
app.use(UserRoutes);

app.use("/public", express.static(path.join(__dirname, "public"))); //Concatenate the absolute route path (__dirname) and the folder "public"
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); //Concatenate the absolute route path (__dirname) and the folder "uploads"

app.listen(app.get("port"), ()=> {
    console.log(`Server listening on port ${app.get("port")}`);
});
