
const router = require('express').Router();

// sets up main homepage route
router.get('/', (req, res) => {
  // renders a file you can choose which file by putting in parentheses
  res.render('homepage', {
    id: 1,
    post_url: 'https://handlebarsjs.com/guide/',
    title: 'handlebars docs',
    created_at: new Date(),
    vote_count: 10,
    comments: [{}, {}],
    user: {
      username: 'test_user'
    }
  });
});



module.exports = router;