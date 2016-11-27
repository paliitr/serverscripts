var http = require('http');
var port = 8070;

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('URL: ' + req.url + '\n' + 'Hostname: ' + req.hostname + '\n' +
    'ip: ' + req.ip + '\n' + 'ips: ' + req.ips + '\n' +
    'oroginalUrl: ' + req.originalUrl + '\n' +
    'Hostname: ' + req.hostname + '\n' +  JSON.stringify(req.headers, null, 4));
  res.end();
  // console.log(message.toString());
  console.log('Server')
  console.log(JSON.stringify(req.headers, null, 4));

}).listen(port);

console.log('Server listening on port '+port);
