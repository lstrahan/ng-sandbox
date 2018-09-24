var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
	console.log('connection', ws);
  
  // echo
  ws.on('message', function incoming(message) {
    console.log('received', message);
    ws.send(message);
  });

  // broadcast
  setInterval(() => {
    let msg = Date.now()
    console.log(`sending ${msg}`);
    ws.send(`"${msg}"`);
  }, 1000);
});