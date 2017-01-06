module.exports = function(app, passport){
    app.get('/', function(req, res){
        res.render('index');
    });

    app.get('/login', function(req, res){
        res.render('login', { message: req.flash('loginMessage')});
    }); 
    app.post('/login', passport.authenticate('local-signup', {
        successRedirect:'/profile',
        failureRedirect: '/login',
        failureFlash:true
    }));

    app.get('/signup', function(req, res){
        res.render('signup', { message: req.flash('signupMessage')});
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect:'/profile',
        failureRedirect:'/signup',
        failureFlash:true
    }));

    // Facebook
    app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email'}));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        successRedirect:'/profile',
        failureRedirect:'/'
    }));

    // Twitter
    app.get('/auth/twitter', passport.authenticate('twitter'));
    app.get('/auth/twitter/callback', passport.authenticate('twitter', {
        successRedirect: '/profile',
        failureRedirect: '/'
    }));

    // Google
    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email']}));
    app.get('/auth/google/callback', passport.authenticate('google', {
        successRedirect: '/profile',
        failureRedirect:'/'
    }))

    app.get('/profile', function(req, res){
        res.render('profile', { user: req.user });
    });

    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    })


};

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();

    res.redirect('/');

    }
}