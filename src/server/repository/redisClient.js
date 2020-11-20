const redis = require("redis");
const client = redis.createClient();
const gamesInitializer = require('./gamesInitializer')
const topicsInitializer = require('./topicsInitializer')
const RedisServer = require('redis-server');

// Simply pass the port that you want a Redis server to listen on.
const server = new RedisServer(6379);

server.open(async (err) => {
  if (err === null) {
    await init()
  }
});

client.on("error", function (error) {
  console.error(error);
});

async function init() {
  console.log("INIT TOPICS")
  const topics = JSON.stringify(topicsInitializer.getTopics())
  client.set("topics", topics,
      redis.print);
  console.log("INIT GAMES")
  const games = JSON.stringify(gamesInitializer.getGames());
  client.set("games", games, redis.print)

}

function getGames(callback) {
  return client.get("games", (err, response)  => {
    callback(response);
  });
}

function getTopics(callback) {
  return client.get("topics", (err, response) => {
    callback(response);
  });
}

module.exports = {
  getGames: getGames,
  getTopics: getTopics,
};