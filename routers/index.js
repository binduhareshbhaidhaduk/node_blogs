const express = require('express');
const controllers = require('../controllers/myController')
const uploads = require('../config/multer')
const signUp = require('../controllers/signUpCon')
const logIn = require('../controllers/logInCon')
const passport = require('../config/passport')

const router = express();

router.get('/', controllers.defaultCon);
router.get('/signUpForm', signUp.signUpForm);
router.post('/signUp', uploads.single('avatar'), signUp.signUpCon);
router.get('/logInForm', logIn.logInForm);
router.post('/logIn', passport.authenticate('local', { failureRedirect: '/loginForm' }), logIn.logInCon);
router.get('/profile', controllers.profileCon);



module.exports = router;