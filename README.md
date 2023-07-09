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

## sendFile()
You can send an image, audio, video, PDF, txt etc., but you you need to indicate the root path with the `__dirname` property

Ex:
```bash
app.get("/myfile", (req, res) => {
    res.sendFile("./image.jpg", {
        root: __dirname
    });
});
```

## json()
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

## sendStatus()
Only send a status number but no content, so it stays on the same page but sends a status code.
```bash
app.get("/isalive", (req, res) => {
    res.sendStatus(204)
});
```

#### YT Project: 

[Express Framework de Nodejs, Curso para principiantes (Javascript en el backend)](https://www.youtube.com/watch?v=JmJ1WUoUIK4&t=618s)
