const express = require("express");
const morgan = require("morgan");
const path = require("path");
const ejs = require("ejs");

const app = express();

//Routes
const HomeRoutes = require("./routes/home");
const UsersRoutes = require("./routes/users");

//Settings
app.set("port", 3000);
//EJS Configs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Middlewares
app.use(express.json());
app.use(morgan("dev"));

//Router Node Modules
app.use(HomeRoutes);
app.use(UsersRoutes);

// Using the /public or /uploads path we will be able to access the files within the /public or /uploads folder
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(app.get("port"), () => {
    console.log(`Server listen on port ${app.get("port")}`)
})
