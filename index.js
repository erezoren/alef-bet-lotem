const express = require('express');
const path = require('path');
const topicsApi = require('./src/server/routs/topics');
const gameApi = require('./src/server/routs/game');
const repo=require('./src/server/repository/redisClient')
var socketServer = require('./socketserver');
const app = express();
var cors = require('cors')
const axios = require('axios');
const cron = require('node-cron');




app.use(express.static(__dirname + '/dist'));
app.use(express.json());
app.use(cors());


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
console.log("Litening on port " + port)
app.listen(port);
debugger
//var botHttpServer = require('http').createServer(app);
socketServer(app);

repo.init();

console.log(`listening on ${port}`);


cron.schedule('* * * * *', async () => {
  console.log('Refreshing application');
  axios
  .get(
      `https://alefbetlotem.herokuapp.com/`)
  .then(response => {
    console.info("Done refreshing application")
  })
  .catch(error => {
    console.error("Failed in refreshing application " + error)
  });
});
