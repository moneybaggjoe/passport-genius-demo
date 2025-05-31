const express = require('express');
const app = express();

const passport = require('passport');
const GeniusStrategy = require('passport-genius');

passport.use(new GeniusStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.BASE_URL + "/auth/genius/callback",
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(null, profile);
  }
));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/auth/genius',
  passport.authenticate('genius', { session: false }));

app.get('/auth/genius/callback',
  passport.authenticate('genius', { failureRedirect: '/', session: false }),
  function(request, response) {
    response.send(request.user);
  });

var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
