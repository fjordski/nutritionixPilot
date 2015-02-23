require('dotenv').load();
var app = require('./server/server');
var port = process.env.port || 8080;

app.listen(port);

console.log('listening on port', port);
