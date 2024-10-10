const express = require('express');
const controllers = require('../controllers/myController')
const blogController=require('../controllers/blogController')
const uploads = require('../config/multer')
const signUp = require('../controllers/signUpCon')
const logIn = require('../controllers/logInCon')
const passport = require('../config/passport')

const router = express();


router.get('/signUpForm', signUp.signUpForm);
router.post('/signUp', uploads.single('avatar'), signUp.signUpCon);
router.get('/logInForm', logIn.logInForm);
router.post('/logIn', passport.authenticate('local', { failureRedirect: '/loginForm' }), logIn.logInCon);
router.get('/logout', (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/logInForm');
    });
});
router.get('/profile', controllers.profileCon);

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/logInForm');
}

router.get('/', controllers.defaultCon);

// Add Blog Form - GET
router.get('/add-blog', ensureAuthenticated, blogController.getAddBlogForm);

// Add Blog - POST
router.post('/add-blog', ensureAuthenticated, uploads.single('image'), blogController.postAddBlog);

// My Blogs - Display user's own blogs
router.get('/myblogs', ensureAuthenticated, blogController.getMyBlogs);


// Edit Blog Form - GET
router.get('/edit-blog/:id', ensureAuthenticated, blogController.getEditBlogForm);

// Edit Blog - POST
router.post('/edit-blog/:id', ensureAuthenticated, uploads.single('image'), blogController.postEditBlog);

// Delete Blog - POST
router.post('/delete-blog/:id', ensureAuthenticated, blogController.postDeleteBlog);


module.exports = router;
