const express = require('express');
const router  = express.Router();
const article = require('./article')
const user    = require('./users')

router.get('/', function(req, res, next) {
  res.send('Api Work')
});

router.use('/api/articles', article)
router.use('/api/users', user)

module.exports = router;