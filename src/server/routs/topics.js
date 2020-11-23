let express = require('express');
let router = express.Router();
const repository = require('../repository/redisClient')

router.get('/',
    function (req, res) {

      const topics=repository.getTopics();
      res.json({
        topics: topics
      });

    });

module.exports = router;



