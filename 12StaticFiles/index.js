const express = require("express");
const morgan = require("morgan");

const app = express();

//Settings
app.set("port", 3000);

//Middlewares
app.use(express.json());
app.use(morgan("dev"));


//Routes

//Path with the same name as a file in the "public" folder
app.get("/note.txt", (req, res) => {
    res.send("This isn't a file, is a ROUTE");
});


//You can access to all in "public" folder
//app.use(express.static("./public"));
//You can acces to: http://localhost:3000/note.txt

//You can access to all in "public" folder but you need first to write public in the path
app.use("/public", express.static("./public"));
//You can acces to: http://localhost:3000/public/note.txt
app.use("/uploads", express.static("./uploads"));


app.listen(app.get("port"), ()=>{
    console.log(`Server listen on port ${app.get("port")}`);
})