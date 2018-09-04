
const http = require('http');
const WebSocket = require('ws');
const url = require('url');
var express = require("express");

const app = express();

app.use(function (req,res) {
    res.send({ msq: "hello"});
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
    const location = url.parse(ws.upgradeReq.url,true);

    ws.on('message', function incoming(message){
        console.log('received: %s', message);
    });

    ws.send('something');
});

server.listen(8080, function listening(){
    console.log('Listening on %d', server.address().port);
});

module.exports = wss;