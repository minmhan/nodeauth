module.exports = {
    'facebookAuth':{
        /* https://developers.facebook.com/ */
        'clientID':'xxxx',
        'clientSecret':'xxxx',
        'callbackURL':'http://localhost:3000/auth/facebook/callback'
    },
    'twitterAuth':{
        /* https://dev.twitter.com/ */
        'consumerKey':'xxxx',
        'consumerSecret':'xxxx',
        'callbackURL':'http://localhost:3000/auth/twitter/callback'
    },
    'googleAuth':{
        /* https://cloud.google.com/ */
        'clientID':'xxxxxxx.apps.googleusercontent.com',
        'clientSecret':'xxxxxx',
        'callbackURL':'http://127.0.0.1:3000/auth/google/callback'
    }
}