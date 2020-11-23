const gamesInitializer = require('./gamesInitializer')
const topicsInitializer = require('./topicsInitializer')
const NodeCache = require("node-cache");
const lotemCache = new NodeCache();

async function init() {
  console.log("INIT TOPICS")
  lotemCache.set("topics", topicsInitializer.getTopics(),
      10000);
  console.log("INIT GAMES")
  lotemCache.set("games", gamesInitializer.getGames(), 10000)

}

function getGames() {
  return lotemCache.get("games");
}

function getTopics() {
  return lotemCache.get("topics");
}

module.exports = {
  getGames: getGames,
  getTopics: getTopics,
  init: init
};