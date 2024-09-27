const fs = require('fs');
const path = require('path');
const signUp = require('../model/signUp-model')

const defaultCon = async (req, res) => {
    if (req.cookies.userid) {
            let user = await signUp.find();

            if (user) {
                res.render('home', { user });
            } else {
                console.log('User not found');
                res.status(404).send('User not found');
            }
    } else {
        res.redirect('/logInForm');
    }
};
const profileCon = async (req, res) => {
    let user = await signUp.findOne();
    console.log('User found:', user);
    res.render('profile', { user });

}



module.exports = { defaultCon, profileCon }