const http = require('http');
const dataapi =require('./dataapi');
http.createServer((req,res) => {
res.writeHead(200,{'Content-Type' : 'application\json'});
res.write(JSON.stringify(dataapi));
res.end();
}).listen(5000);