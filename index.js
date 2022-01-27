const http = require("http");
const fs = require("fs");
const PORT = 8080;

const server = http.createServer((req, res) => {

  if(req.url == "/"){
    fs.readFile("index.html",(err, data) => {
      if(err){
        res.writeHead(200, {"content-type":"text/html"});
        res.write(err);
        return res.end();
      }
      res.writeHead(200, {"content-type":"text/html"});
      res.write(data);
      return res.end();
    })
  }else if(req.url == "/about"){
    fs.readFile("about.html", (err,data) => {
      if(err){
        res.writeHead(200, {"content-type":"text/html"});
        res.write(err);
        return res.end();
      }
      res.writeHead(200, {"content-type":"text/html"});
      res.write(data);
      return res.end();
    })
  }else if(req.url == "/contact-me"){
    fs.readFile("contact-me.html", (err, data) => {
      if(err){
        res.writeHead(200, {"content-type":"text/html"});
        res.write(err);
        return res.end();
      }
      res.writeHead(200, {"content-type":"text/html"});
      res.write(data);
      return res.end();
    })
  }else{
    fs.readFile("404.html", (err, data) => {
      if(err){
        res.writeHead(200, {"content-type":"text/html"});
        res.write(err);
        return res.end();
      }
      res.writeHead(200, {"content-type":"text/html"});
      res.write(data);
      return res.end();
    })
  }
});

server.listen(PORT);