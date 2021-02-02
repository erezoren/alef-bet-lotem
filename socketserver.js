/*
module.exports = function (app) {

  var http = require('http');
  var server = http.createServer(app);
  server.listen(8081)
  console.log("****************TRYING TO CONNECT SOCKET****************",server)
  //var socket = require('/Users/eoren/alef-bet-lotem/node_modules/socket.io')(server);



  const io = require('/Users/eoren/alef-bet-lotem/node_modules/socket.io')(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    }
  });



  // a new client joined :)
  io.on('connection', function (socket) {
    console.log("****************SOCKET CONNECTED****************")
    socket.on('echo', function (data) {
      console.log('Got event', data);
      // Send a message to the socket that sent the event
      // socket.emit('echo', data);

      // Send a message to ALL active clients
      socket.emit('echo', data);

      // Send a message to ALL BUT sending socket
      // socket.broadcast.emit('echo', data);
    });
  });
}
*/
