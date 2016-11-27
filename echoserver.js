var http = require('http');

http.createServer(function(req, res) {

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('ok');
  // console.log(message.toString());
  console.log('Server')
  console.log(JSON.stringify(req.headers, null, 4));

}).listen(8060);

console.log('Server listening on port 8060');

var http = require('http'),
httpProxy = require('http-proxy');

// read headers from a json file
var fs = require('fs');
var header = JSON.parse(fs.readFileSync('browser_headers.json', 'utf8'));
br_header = header.chrome; // set agents.firefox for mozilla headers

//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({});

// To modify the proxy connection before data is sent, you can listen
// for the 'proxyReq' event. When the event is fired, you will receive
// the following arguments:
// (http.ClientRequest proxyReq, http.IncomingMessage req,
//  http.ServerResponse res, Object options). This mechanism is useful when
// you need to modify the proxy request before the proxy connection
// is made to the target.
//
proxy.on('proxyReq', function(proxyReq, req, res, options) {
  // set the custom header for the request
  // for(var key in br_header){
  //   proxyReq.setHeader(key, br_header[key]);
  // }
  proxyReq.setHeader('user-agent', br_header['user-agent']);
  console.log('Request')
  console.log(JSON.stringify(req.headers, null, 4));
});

var server = http.createServer(function(req, res) {
  // You can define here your custom logic to handle the request
  // and then proxy the request.
  proxy.web(req, res, {
    target: 'http://127.0.0.1:8060'
  });
});

console.log("Proxy listening on port 8050")
server.listen(8050);
