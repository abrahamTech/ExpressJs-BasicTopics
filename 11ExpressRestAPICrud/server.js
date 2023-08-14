const express = require("express");
const morgan = require("morgan");

const app = express();

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 3000
    }
];

app.use(morgan("dev"));

//Middleware for read the JSON data from POST Request
app.use(express.json())



app.get("/products", (req, res) => {
    res.json(products);
});

app.post("/products", (req, res) => {
    //ID is the length of products array plus 1
    const newProductId = products.length + 1;
    //Copy of all the elements in the request body and include the new ID
    const newProduct = {id: newProductId, ...req.body}
    console.log(newProduct); 

    // Add the product in the request body to the array products
    products.push(newProduct);

    res.send("Creating Products");
});

app.put("/products", (req, res) => {
    res.send("Updating Products");
});

app.delete("/products", (req, res) => {
    res.send("Deleting Products");
});

app.get("/products/:id", (req, res) => {
    res.send("Getting One Product");
});

app.listen(3000, () => {
    console.log(`Server listening on port ${3000}`);
});