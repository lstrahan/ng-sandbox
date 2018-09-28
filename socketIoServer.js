// Loading socket.io
var io = require('socket.io')(8888);

// When a client connects, we note it in the console
console.log('listening...');
io.on('connection', function (socket) {
    console.log('A client is connected!');
});
