const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');


router.post('/', 
  passport.authenticate('local', { session: false }),
  (req, res, next) => {
    // passport originのlogin
    req.login(req, {session: false}, (err) => {
      if (err) {
        res.send(err)
      }
      // jwtの払い出し
      const token = jwt.sign({user: req.body.user}, 'secret_token', {
        expiresIn: '15h',
        jwtid: uuid.v4(),
      })
      res.send({message: "success", token});
    })
});

module.exports = router;