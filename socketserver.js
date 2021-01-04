const io = require('socket.io')();

module.exports = function (server) {
  const socket = io(server);
  // a new client joined :)
  socket.on('connection', function (socket) {
    socket.on('echo', function (data) {
      console.log('Got event', data);
      // Send a message to the socket that sent the event
      // socket.emit('echo', data);

      // Send a message to ALL active clients
      socket.sockets.emit('echo', data);

      // Send a message to ALL BUT sending socket
      // socket.broadcast.emit('echo', data);
    });
  });
}
