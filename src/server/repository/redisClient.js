/*const redis = require("redis");
const client = redis.createClient();*/
const gamesInitializer = require('./gamesInitializer')
const topicsInitializer = require('./topicsInitializer')
//nconst RedisServer = require('redis-server');
const NodeCache = require( "node-cache" );
const lotemCache = new NodeCache();



//const server = new RedisServer(6379);

/*server.open(async (err) => {
  if (err === null) {
    await init()
  }
});*/

/*client.on("error", function (error) {
  console.error(error);
});*/

async function init() {
  console.log("INIT TOPICS")
  const topics = JSON.stringify(topicsInitializer.getTopics())
  lotemCache.set("topics", topics,
      0);
  console.log("INIT GAMES")
  const games = JSON.stringify(gamesInitializer.getGames());
  lotemCache.set("games", games, 0)

}

function getGames(/*callback*/) {
  return lotemCache.get("games");
  /*return lotemCache.get("games", (err, response)  => {
    callback(response);
  });*/
}

function getTopics(/*callback*/) {
  return lotemCache.get("topics");
  /*return lotemCache.get("topics", (err, response) => {
    callback(response);
  });*/
}

module.exports = {
  getGames: getGames,
  getTopics: getTopics,
  init:init
};