/* //HTTP without Express

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    //Read the File
    const read = fs.createReadStream("./static/index.html");
    //Transfer the file
    read.pipe(res);
});

server.listen(3000);
console.log(`Server on port ${3000}`); */




//With Express
const express = require("express");

const app = express();

//Function that allows sending the file with the path which is being specified.
app.get("/", (req, res) => {
    res.sendFile("./static/index.html", {
        //__dirname -> Gives the initial path from the root to the location of the file
        root: __dirname
    })
});

app.listen(3000);
console.log(`Server on port ${3000}`)