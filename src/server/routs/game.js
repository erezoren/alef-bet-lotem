let express = require('express');
let router = express.Router();
const repository = require('../repository/redisClient')

router.get('/:gameId',
    function (req, res) {
      repository.getGames((resp) => {
        const game = JSON.parse(resp);
        if (game){
          res.json({
            game: game[req.params.gameId]
          });
      }
      else{
          res.json({
            game: {}
          });
        }
      })

    });

module.exports = router;



