let express = require('express');
let router = express.Router();
const repository = require('../repository/redisClient')

router.get('/:gameId',
    function (req, res) {
      const game=repository.getGames()
      res.json({
        game: JSON.parse(game)[req.params.gameId]
      });

      /*(resp) => {
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
      }*/

    });

module.exports = router;



