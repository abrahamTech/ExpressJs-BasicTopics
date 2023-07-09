const express = require("express");

const app = express();


app.get("/products", (req, res) =>{
    res.send("Products list");
});

//We use Thunder Client Extension for the next methods

app.post("/products", (req, res) => {
    res.send("CREATING Products");
});

app.put("/products", (req, res) => {
    res.send("UPDATING Product");
});

app.delete("/products", (req, res) => {
    res.send("DELETING Product");
});

app.patch("/products", (req, res) => {
    res.send("UPDATING one characteristic of the Product");
});

app.listen(3000, () => {
    console.log(`Server listen on port ${3000}`);
})