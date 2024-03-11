

const http = require("http");
const color=require('colors');
const server = http.createServer((req, res) => {
    console.log("green".green);
    console.log("OH MY GOD RAINBOW".rainbow.bold)
    const url=req.url;
    if(url=="/profile") {
        res.setHeader('Content-Type', 'text/html');
        res.write("<p>this is profile page </p>");
        return res.end();
    }
    if(url=="/") {
        res.setHeader('Content-Type', 'text/html');
        res.write("<p>Cheese Burger </p>");
        return res.end();
    }
    if(url=="/settings") {
        res.setHeader('Content-Type', 'text/html');
        res.write("<h1>Form Was Submitted </h1>");
        return res.end();
    }
    
    
    
});
server.listen(3001);

