const express = require('express');
const router = express.Router();
const passport = require('passport')

/* GET users listing. */
router.get('/',
  passport.authenticate('jwt', {session: false}),
  (req, res, next) => {
    res.send('respond with a resource');
});

module.exports = router;
