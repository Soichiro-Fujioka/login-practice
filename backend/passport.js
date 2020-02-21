const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const passportJWT = require('passport-jwt') // Todo JWTの設定はあとで

const JWTStrategy = passportJWT.Strategy;


passport.use(new LocalStrategy(
  {usernameField: 'username', passwordField: 'password'}, 
  (req, username, password, callback) => {
    // Note DBからアカウント情報取得
    // とりあえず今は誰でもログイン可能
    return callback(null, {username}, {message: 'login success'})
  }
))