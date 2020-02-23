const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const passportJWT = require('passport-jwt') // Todo JWTの設定はあとで

const JWTStrategy = passportJWT.Strategy;

// dummy user
const user = {
  username: 'user',
  password: 'password'
}

passport.use(new LocalStrategy(
  {usernameField: 'username', passwordField: 'password'}, 
  (username, password, callback) => {
    // Note DBからアカウント情報取得
    if (user.username === username & user.password === password) {
      return callback(null, {username})
    } 
    return callback(null, false)
  }
))