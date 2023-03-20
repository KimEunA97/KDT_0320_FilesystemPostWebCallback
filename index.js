import http from 'http';
import fs from 'fs'
import url from 'url'

const hostname = "localhost";
const port = 2080;

const server = http.createServer(function (req, res) {



  // let body = "";
  // body += "<!DOCTYPE html>";
  // body += "<html>";
  // body += "<head>";
  // body += "<title>Node.js</title>";
  // body += "</head>";
  // body += "<body>";
  // body += "<h1>Hello World</h1>";
  // body += "</body>";
  // body += "</html>";



  if(req.method === 'GET'){
    
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain')
      res.end('Hellow World');

  }
  res.writeHead(404);
  res.end('Not Found Page!');

})

server.listen(port, hostname, (error) => {
  console.log(`Server Runing at http://${hostname}:${port}/`)


  if (error) {
    console.error("server not working")
  }
})
