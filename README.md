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


#### YT Project: 

[Express Framework de Nodejs, Curso para principiantes (Javascript en el backend)](https://www.youtube.com/watch?v=JmJ1WUoUIK4&t=618s)
