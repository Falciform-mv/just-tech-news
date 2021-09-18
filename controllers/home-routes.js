
const router = require('express').Router();

// sets up main homepage route
router.get('/', (req, res) => {
  // renders a file you can choose which file by putting in parentheses
  res.render('homepage');
});



module.exports = router;