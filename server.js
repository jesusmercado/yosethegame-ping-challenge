var http = require('http');

var PORT = process.env.PORT || 5000;

http.createServer(function(req, res) {
    res.end(JSON.stringify({alive: true}));
}).listen(PORT);

