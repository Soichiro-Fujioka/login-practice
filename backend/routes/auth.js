const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/login', (req, res, next) => {
  passport.authenticate('local', {
    session: false,
  }, async (err, user, info) => {
    // Todo トークンの払い出しとか
  })  
})

module.exports = router;