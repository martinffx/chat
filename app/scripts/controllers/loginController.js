define([
    'underscore',
    'backbone',
    'application',
    'views/login',
    'models/user'
], function(_, Backbone, Chat, LoginView, UserModel){
    'use strict';

    var _LoginController = Backbone.Marionette.Controller.extend({
        LoginView: function(){
            var user = new UserModel({});
            return new LoginView({ model: user });
        }
    });

    var _loginController;

    var constructor = function(){
        if(_.isUndefined(_loginController)){
            _loginController = new _LoginController();
        }
        return _loginController;
    };

    return constructor();
});
