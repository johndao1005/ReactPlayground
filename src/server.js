const http = require('http');
//const test = require('./test');
const routes = require("./routes"); // creating routes
const server = http.createServer(routes.handler);//creating server
server.listen(5000) //listening to port 3000 (can choose other port address)
