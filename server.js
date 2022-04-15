const net = require('net');
const fs = require('fs');

const server = net.createServer();

server.on('connection', (client) => {
  console.log('New client connected!');
  client.write('Hello there!');
  client.setEncoding('utf8'); // interpret data as text
  client.on('data', (data) => {
    const send = fs.readFileSync(data, {encoding:'utf8', flag:'r'});
    client.write(send);
  });
});

server.listen(3000, () => {
  console.log('server listening...');
});
