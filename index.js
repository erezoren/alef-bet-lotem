const express = require('express');
const path = require('path');
const topicsApi = require('./src/server/routs/topics');
const gameApi = require('./src/server/routs/game');



(function() {
  var childProcess = require("child_process");
  var oldSpawn = childProcess.spawn;
  function mySpawn() {
    console.log('spawn called');
    console.log(arguments);
    var result = oldSpawn.apply(this, arguments);
    return result;
  }
  childProcess.spawn = mySpawn;
})();

const app = express();
app.use(express.static(__dirname + '/dist'));
app.use(express.json());

app.get('/api/', (req, res) => {
  res.json({erez: "oren2"});
});
app.use('/api/topics', topicsApi);
app.use('/api/games', gameApi);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('/error', (req, res) => {
  console.error(JSON.stringify(res));
  res.sendFile(path.join(__dirname + '/src/client/build/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`listening on ${port}`);
