const express = require("express");
const morgan = require("morgan");

const app = express();

let products = [
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

app.put("/products/:id", (req, res) => {

    const newData = req.body;

    //Check if the product exist
    const productFound = products.find(
        (product) => product.id === parseInt(req.params.id)
    );

    if(!productFound){
        return res.status(404).json({
            message: "Product not found",
        })
    }

    //If I pass one of the values ​​that the product already has, it will be replaced (updated) by the one in the newData variable
    //If the ids do not match, pass the product as it is. (But we had already validated that in the previous if and filter method)
    //JSON sended to update the product {"name": "Mouse","price": 200}
    products = products.map(p => p.id === parseInt(req.params.id) ? {...p, ...newData} : p);
    console.log(products);

    res.json({
        message: "Product updated successfully"
    });
});

app.delete("/products/:id", (req, res) => {
    const productFound = products.find(
        (product) => product.id === parseInt(req.params.id)
    );

    if(!productFound){
        return res.status(404).json({
            message: "Product not found",
        })
    }

    //The products array without the product with the ID from the URL
    products = products.filter(p => p.id !== parseInt(req.params.id));
    console.log(products);

    // To indicate that everything went well and that nothing will be returned to the client
    res.sendStatus(204);
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