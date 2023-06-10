const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');

router.get('/register', (req, res) => {
    // res.send('heyyy')
    // res.render('/');
    res.render('authentication.ejs')
});

router.post('/register', catchAsync(async (req, res, next) => {
    console.log("hi i am here");
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', '');
            console.log("hi ai a");
            // res.render('main/home');
            res.redirect('/');
        })
    } catch (e) {
        // var jj = document.getElementsByClassName('signup-error');
        // jj.innerText = e.message;
        // alert(e.message);
        req.flash('error', e.message);
        res.redirect('register');
    }
}));

router.get('/login', (req, res) => {
    res.render('authentication');
})

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    req.flash('success', 'welcome back!');
    const redirectUrl = req.session.returnTo || '/';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
    // res.redirect(redirectUrl);
})

router.get('/logout', (req, res) => {
    // res.render('authentication');
    // req.logout();
    req.flash('success', 'Goodbye!');
    res.redirect('/login');
})


module.exports = router;