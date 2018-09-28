var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var wss = new WebSocketServer({ port: 8080 });

setInterval(() => {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(Date.now());
    }
  });
}, 2000);

wss.on('connection', function connection(ws) {
  console.log('new connection');

  // echo
  ws.on('message', function incoming(message) {
    console.log('received', message);
    ws.send(message);
  });
});
