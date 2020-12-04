const gamesInitializer = require('./gamesInitializer')
const topicsInitializer = require('./topicsInitializer')
const NodeCache = require("node-cache");
const lotemCache = new NodeCache();
const serverConsts = require('../constants/server_constants')

async function init() {
  console.log("INIT TOPICS")
  lotemCache.set("topics", topicsInitializer.getTopics(),
      10000);
  console.log("INIT GAMES")
  lotemCache.set(serverConsts.ALEFBET,
      gamesInitializer.getGames(serverConsts.ALEFBET),
      10000);
  lotemCache.set(serverConsts.SPELLING,
      gamesInitializer.getGames(serverConsts.SPELLING),
      10000)

}

function getGames(name) {
  return lotemCache.get(name);
}

function getTopics() {
  return lotemCache.get("topics");
}

module.exports = {
  getGames: getGames,
  getTopics: getTopics,
  init: init
};