var passport = require('./passport'),
    actions = require('./actions'),
    authorize = require('./authorize'),
    authenticate = require('./authenticate'),
    oauth = require('./oauth');

exports.init = function (options) {
    oauth.init();

    return passport.init(options)
        .then(function (response) {
            return {auth: response.passport};
        });
};

exports.oauth = oauth;
exports.actions = actions;
exports.authorize = authorize;
exports.authenticate = authenticate;
