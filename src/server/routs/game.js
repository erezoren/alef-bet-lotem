let express = require('express');
let router = express.Router();
const repository = require('../repository/redisClient')

router.get('/:gameId',
    function (req, res) {
      const game = repository.getGames()
      res.json({
        game: game[req.params.gameId]
      });

    });

module.exports = router;



