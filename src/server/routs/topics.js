let express = require('express');
let router = express.Router();
const repository = require('../repository/redisClient')

router.get('/',
    function (req, res) {
      repository.getTopics((resp) => {
        res.json({
          topics: JSON.parse(resp)
        })
      })

    });

module.exports = router;



