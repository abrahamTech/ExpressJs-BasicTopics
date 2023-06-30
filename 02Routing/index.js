const express = require("express")

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Routing!");
});

app.get("/about", (req, res) => {
    res.send("About");
});

app.get("/weather", (req, res) => {
    res.send("The weather is nice!");
})

//Any routes that don't match those pages written with .get will show the following text
//Give the status 404 to know that this route wasn't found
app.use((req, res) => {
    res.status(404).send("Page Don't found");
})

app.listen(3000, ()=>{
    console.log(`Server on port ${3000}`)
});

