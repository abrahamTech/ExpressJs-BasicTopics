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

    console.log("Creating Products");
    res.send(newProduct);
});

app.put("/products", (req, res) => {
    res.send("Updating Products");
});

app.delete("/products", (req, res) => {
    res.send("Deleting Products");
});

app.get("/products/:id", (req, res) => {
    //Id from the URL -> req.params.id is a STRING, thats why I add the Parse int in the next line of code
    console.log(req.params.id);

    //Find the product
    const productFound = products.find((product) => {
        //Return the product that has the same Id from the URL in the products Array
        return product.id === parseInt(req.params.id); //req.params.id is a STRING, so we want to use "===" we need to add the parseInt, otherwise we must use "==" 
    });
    // In ONE line -> const productFound = products.find((p) => p.id === parseInt(req.params.id));
    

    //If productFound is undefined:
    if(!productFound){

        return res.status(404).json({
            message: "Product not found"
        });

        //Or you can sendo a Message NOT a JSON file
        // return res.status(404).send("Product not found");
    }


    console.log("Getting One Product");
    console.log(productFound);
    res.json(productFound);
});


app.listen(3000, () => {
    console.log(`Server listening on port ${3000}`);
});