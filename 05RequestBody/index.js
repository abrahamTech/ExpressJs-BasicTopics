const express = require("express");

const app = express();

//Needs to be declare before the request
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post("/usertext", (req, res) => {
    console.log(req.body);
    res.send("Data (text) received");
});

app.post("/userjson", (req, res) => {
    console.log(req.body);
    res.send("Data (json) received");
});

app.post("/userform", (req, res) => {
    console.log(req.body);
    res.send("Data from the Form received");
});

app.listen(3000, () => {
    console.log(`Server on port ${3000}`);
})