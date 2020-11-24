const fs = require('fs')
const path = require('path');
const baseMediaLocationDir = '../../../images/games/alefbet/'
const idToMediaLocationMap = {
  1: "pokemon",
  2: "soccer",
  3: "bends",
  4: "animals"
}

function getGames() {
  let games = {}
  Object.keys(idToMediaLocationMap).map(key => {
    const folder = idToMediaLocationMap[key];
    let filePath = path.join(__dirname, '..', '..', '..', 'images', 'games','alefbet',
        folder);
    const files = fs.readdirSync(filePath, "utf-8");
    for (const file of files) {
      if (!games[key]) {
        games[key] = {
          mediaLocation: `${baseMediaLocationDir}${folder}`,
          images: []
        }
      }
      games[key].images.push({image: file, letter: file.charAt(0)})
      console.log(file)
    }

  })
  return games;
}

module.exports = {
  getGames: getGames,
};