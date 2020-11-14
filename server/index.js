const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8082 });

wss.on('connection', ws => {
    ws.on('open', function open() {
        console.log("Client has connected");
    });

    ws.on('close', () => {
        console.log("Client has disconnected");
    });


    ws.on('message', function incoming(data) {
        console.log(`Client has sent us: ${data}`);

        ws.send(data)
    });
});

// A client WebSocket broadcasting to every other connected WebSocket clients, excluding itself.
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        wss.clients.forEach(function each(client) {
            if (client !== ws) {
                client.send(data);
            }
        });
    });
});