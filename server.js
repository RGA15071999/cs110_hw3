const http = require('http');

const server = http.createServer(function(req, res) {
  switch (req.url) {
    case '/hello':
      res.writeHead(200, {'content-type' : 'text/plain'});
      res.end('<h1>Hello World!!!</h1>');
      break;
    case '/secret':
      res.writeHead(200, {'content-type' : 'text/plain'});
      res.end('<h1>Well Done. You found a secret place</h1>');
      break;
    case '/admin':
      res.writeHead(200, {'content-type' : 'text/plain'});
      res.end('<h1>Really? You are not admin :)</h1>');
      break;
    case '/goodbye':
      res.writeHead(200, {'content-type' : 'text/plain'});
      res.end("<h1>I will miss you... :'(</h1>");
      break;
    case '/home':
      res.writeHead(200, {'content-type' : 'text/plain'});
      res.end('<h1>Home, sweet home!!!</h1>');
      break;
    default: res.end();

  }
}).listen(8000);
