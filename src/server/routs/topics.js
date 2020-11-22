let express = require('express');
let router = express.Router();
const repository = require('../repository/redisClient')

router.get('/',
    function (req, res) {

      const topics=repository.getTopics();
      res.json({
        topics: JSON.parse(topics)
      });

      /*repository.getTopics((resp) => {
        res.json({
          topics: JSON.parse(resp)
        })
      })*/

    });

module.exports = router;



