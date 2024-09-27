const signUp = require('../model/signUp-model');
const bcrypt = require('bcrypt');

const logInForm = (req, res) => {
    res.render('logIn');
}

const logInCon = async (req, res) => {

    // const user = await signUp.findOne({ email: req.body.email }); // Assuming username is used for login
    // console.log("user", user)

    // if (user ) {
    //      bcrypt.compare(req.body.password, user.password, (err,r)=>{
    //         if(!err){

    //             res.cookie('userid',user._id)
    //             // Password matches
    //             res.redirect('/');
    //         }else{
    //             res.redirect('/logInForm')
    //         }
        
    //     })
    // } else {
    //     // Password doesn't match or user not found
    // }
    res.render('logIn', { error: 'Invalid username or password' });
};


module.exports = { logInCon, logInForm }