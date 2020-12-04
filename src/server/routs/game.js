const serverConsts = require('../constants/server_constants')

let express = require('express');
let router = express.Router();
const repository = require('../repository/redisClient')

router.get('/alefbet/:gameId',
    function (req, res) {
      const game = repository.getGames(serverConsts.ALEFBET)
      res.json({
        game: game[req.params.gameId]
      });

    });

router.get('/spelling/',
    function (req, res) {
      const game = repository.getGames(serverConsts.SPELLING)
      res.json({
        game: game
      });

    });

module.exports = router;



