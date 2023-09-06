# ExpressJs-BasicTopics
This is my personal repo to learn the basic topics of Express Js Framework


## Initialize the Node Project (package.json File)
``` bash
npm init -y
```

## Intallation Express Js 
```bash
npm i express
```

## HTTP Methods
* GET (Send a Request)
* POST (Send a Request and Info)
* PUT (Update all the data)
* DELETE (Delete Info)
* PATCH (Update only part of the data)
* ALL (URL that can work with all the methods: GET, POST, PUT, DELETE, PATCH)

## Install "Thunder Client" Extension
Install Thunder Client extension for do Client request to our backend page.

## Info to SEND

### sendFile()
You can send an image, audio, video, PDF, txt etc., but you you need to indicate the root path with the `__dirname` property

Ex:
```bash
app.get("/myfile", (req, res) => {
    res.sendFile("./image.jpg", {
        root: __dirname
    });
});
```

### json()
You can send a json file.
Ex:
```bash
app.get("/user", (req, res) => {
  res.json({
    name: "Abraham",
    age: 35,
    points: [1, 2, 3],
    address: {
      city: "New York",
      street: "Some street 123",
    },
  });
});
```

### sendStatus()
Only send a status number but no content, so it stays on the same page but sends a status code.
```bash
app.get("/isalive", (req, res) => {
    res.sendStatus(204)
});
```

## Request & Response Structure

* Endpoint
Route Ex: "/about"

* Header
Body type Ex: "json"
Status code (Only in Response Object) Ex: "200"

* Body
Data Ex: "{ "name": "Abraham", "age": 35}


## Methods for Process Client Applications

### text()
The `text()` method is so that Express can process text sent to it by client applications.
```bash
app.use(express.text());
```

### json()
The `json()` method is so that Express can process json files sent to it by client applications.
```bash
app.use(express.json());
```

### urlencoded()
The `urlencoded()` method is so that Express can process the data that comes from a **Form** by client applications.
```bash
app.use(express.urlencoded(extended: false));
```
Notes: 
1.- `extended: false` is to specify that it is a fairly simple URL that doesn't need to interpret any complicated data (it's only text data).
2.- The received data converts it to a **json file**
3.- In Thunder client Extension you need to select in `Body` section the option `Form-encode`, NOT "Form".


## Queries (?)

Extra information that the browser can send to the backend to use it
Ex: 
```bash
app.get("/users/:username", (req, res) => {})
http://localhost:3000/users/hello?name=Peter
```
So you will receive `{ name: "Peter" }`

### 2 or more Variables (&)
With **`&`** you can receive more than one variable
Ex:
```bash
app.get("/users", (req, res) => {})
http://localhost:3000/users?name=Peter&age=40
```
So you will receive `{ name: "Peter", age: "40" }`

### 1 Variable with 2 or more Values
If you write the same variable 2 times or mores, all the values will save in an array

```bash
app.get("/users", (req, res) => {})
http://localhost:3000/users?name=Peter&name=Steve
```
So you will receive `{ name: [ "Peter", "Steve" ] }`


## Middlewares
Before going to the routes, they will all go through this Middleware.
Ex: 
```bash
app.use((req, res, next) => {
    
    console.log("Middlewares")
    console.log(`Route: ${req.url} Method: ${req.method}`)

    //Method to pass to the routes
    next()
});
```

If we put these lines of code before the routes (The order does matter)

Ex:
```bash
//This line won't go through the middleware
app.get("/profile", (req, res) => {...});

app.use((req, res, next) => {...} );

// This line will go through the middleware
app.get("/profile", (req, res) => {...});
```

### Morgan Middleware
Install Morgan middleware 

```bash
npm i morgan
```

It will work as a function in the `use` method and it will send some info from the request by console. You can write inside () the format that you want to show this messages by console ("tiny", "short", "dev").

```bash
app.use(morgan())

app.use(morgan("dev"))
```

Here you can see [Morgan Docuementation](https://www.npmjs.com/package/morgan)


# REST API CRUD

### Routes
 * GET      /products
 * POST     /products
 * GET      /products/:id
 * PUT      /products/:id
 * DELETE   /products/:id

 All these routes have recommendation for create them that comes from **REST** (Respresentation State Transfer) document.


## NPM Modules:

### EJS
Embedded JavaScript templates

Install:
`npm i ejs`

Import Module:
```bash
const ejs = require("ejs");
```

[Info Link](https://www.npmjs.com/package/ejs)

#### YT Project: 

[Express Framework de Nodejs, Curso para principiantes (Javascript en el backend)](https://www.youtube.com/watch?v=JmJ1WUoUIK4&t=618s)
