let express = require('express');
let router = express.Router();
const fs = require('fs')
const path = require('path');
const baseMediaLocationDir = '../../../images/games/'
const idToMediaLocationMap={1:"pokemon",2:"soccer",3:"bends"}

let hardCodedGamesData = {}

Object.keys(idToMediaLocationMap).map(key=>{
  const folder=idToMediaLocationMap[key];
  var filePath = path.join(__dirname, '..','..','..','images','games',folder);
  const files = fs.readdirSync(filePath,"utf-8");
  for (const file of files) {
    if(!hardCodedGamesData[key]){
      hardCodedGamesData[key]={mediaLocation:`${baseMediaLocationDir}${folder}`,images:[]}
    }
    hardCodedGamesData[key].images.push({image:file,letter:file.charAt(0)})
    console.log(file)
  }

})



router.get('/:gameId',
    function (req, res) {
      res.json({game: hardCodedGamesData[req.params.gameId]});
    });

module.exports = router;



