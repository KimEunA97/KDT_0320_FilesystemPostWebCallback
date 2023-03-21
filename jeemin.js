import http from 'http'
import querystring from 'querystring';
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
  <input type="submit">
</form>
</body>
</html>`
const server = http.createServer((req, res) => {

  if (req.url == '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(first);
  } 
  
  else if (req.method == 'POST' && req.url == '/login') {
    let body = ""

    req.on('data', (data) => {
      body = body + data;
    })

    req.on('end', () => {
      console.log(body);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      const parseBody = querystring.parse(body);
      console.log(parseBody);
      let bodyA = parseBody.title;

      function splitString(stringParams) {
        let result = stringParams.split(' ');
        return result;
      }

      function appendString(stringArray, callback) {
        let body1 = "";
        stringArray.forEach(function (element) {
          body1 = body1 + element;
        });
        callback(body1);
      };

      let bodyTemplate = ``;
      let resultCase = appendString(splitString(bodyA), function (body1) {
        console.log(body1);
        bodyTemplate += body1.substring(0, body1.indexOf("티") + 1);
        console.log(bodyTemplate);
      });

      function elementMaker(string) {
        return `<div>${string}</div>`;
      }
      res.end(bodyTemplate);
    })
    
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    res.end('page not found')
  }
})
server.listen(2080, () => {
  console.log('웹 서버가 시작되었습니다.')
})