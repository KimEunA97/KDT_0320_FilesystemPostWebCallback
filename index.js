import http from 'http';
import fs from 'fs'
import url from 'url'
import path from 'path';


const hostname = "localhost";
const port = 2080;

const formTag = `
<form method="POST" action="/post">
<input type="text" name="id">
<input type="submit" name="submit" value= "제출">
</form>
`;

function htmlPage(data) {

  return `
  <!DOCTYPE html>
  <html>
  <head>
  <title>Node.js</title>
  </head>
  <body>
  <h1>로그인</h1>
  ${data}
  </body>
  </html>`
}

const server = http.createServer(function (req, res) {


  let _url = req.url;
  // let pathname = url.parse(_url, true).pathname;


  if (req.method === 'GET' && _url === '/') {

    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8'})
    let page = htmlPage(formTag);
    res.write(page);
    res.end();

  }
  if (req.method === 'POST' && _url === '/post') {

  }

  else {
    res.writeHead(404);
    res.end('Not Found Page!');
  }
})

server.listen(port, hostname, (error) => {
  console.log(`Server Runing at http://${hostname}:${port}/`)


  if (error) {
    console.error("server is not working");
  }
})
