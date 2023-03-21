import fs from 'fs'
import http, { createServer } from 'http'
import url from 'url'
const first =
  `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<form method="post" action="/login">
  <input type="text" name="title" placeholder="title">
  <textarea name="content" placeholder="content"></textarea>
  <input type="submit">
</form>
</body>
</html>`
const server = http.createServer(function (request, response) {
  
  if (request.url == "/") {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end(first);
  }

  if (request.method == 'POST') {
    let body = ""
    request.on('data', (chunk) => {
      body = body + chunk;
    })
    request.on('end', () => {
      console.log(body);
    });
  }
})


server.listen(2080, () => {
  console.log('웹 서버가 시작되었습니다.');
});