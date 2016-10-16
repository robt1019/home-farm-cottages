var express = require('express');
var router = express.Router();

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
var pg = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/hfc';

const client = new pg.Client(connectionString);

client.connect();

passport.use(new LocalStrategy(
    function(username, password, done) {

        client.query('SELECT * FROM users WHERE username = ($1);', [username], function(err, result) {

            console.log(result);

            if (result.rows[0].password !== password) {
                return done(null, false, { message: 'Incorrect password' });
            }
            return done(null, result);
        });
    }
));

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/admin',
        failureRedirect: '/',
        session: false
    })
);

module.exports = router;
