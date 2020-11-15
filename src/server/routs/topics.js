let express = require('express');
let router = express.Router();



const hardCodedData = [{id: 1, image: 'pokemon.jpg', name: 'פוקימון'},
  {id: 2, image: 'soccer.jpg', name: 'כדורגל'},
  {id: 3, image: 'bends.jpg', name: 'להקות'}]

router.get('/',
    function (req, res) {
      res.json({topics: hardCodedData});
    });

module.exports = router;



