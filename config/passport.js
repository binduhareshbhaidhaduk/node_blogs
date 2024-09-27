const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('../model/signUp-model');
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy({ usernameField: 'email' },
    async function (email, password, done) {
        try {
            // Find user by email
            const user = await userModel.findOne({ username: email });
            console.log(user, 'user')

            if (user) {
                bcrypt.compare(req.body.password, user.password, (err, r) => {
                    if (!err) {
                        // Password matches
                        res.redirect('/');
                    } else {
                        res.redirect('/logInForm')
                    }

                })
            } else {
                // Password doesn't match or user not found
                res.render('logIn', { error: 'Invalid username or password' });
            }

            // Compare passwords
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return done(null, false, { message: 'Incorrect password.' });
            }

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(async function (id, done) {
    try {
        const user = await userModel.findById(id);
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        done(null, user);
    } catch (err) {
        done(err);
    }
});

module.exports = passport;
