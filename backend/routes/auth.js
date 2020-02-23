const express = require('express');
const router = express.Router();
const passport = require('passport');


router.post('/', 
  passport.authenticate('local', { session: false }),
  (req, res, next) => {
    res.send('respond with a resource');
});

module.exports = router;