const userModel = require('../model/signUp-model')
const Blog = require('../model/blog-Model');


const defaultCon = async (req, res) => {
    const user = await userModel.findOne();
    console.log(userModel.Users, 'user model')
    if (req.isAuthenticated()) {
    console.log(user, 'user in home')
    const blogs = await Blog.find().populate('author', 'username'); // Populate author username

        // Passport adds the authenticated user to req.user
        res.render('home', { user: req.user,blogs });
    } else {
        res.redirect('/logInForm');
        console.log('form')
    }
};


const profileCon = async (req, res) => {
    let user = await userModel.findOne();
    console.log('User found:', user);
    res.render('profile', { user });

}



module.exports = { defaultCon, profileCon }