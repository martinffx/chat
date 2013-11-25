define([
    'underscore',
    'backbone',
    'application',
    'views/login',
    'models/user'
], function(_, Backbone, Chat, View, Model){
    'use strict';

    var _LoginController = Backbone.Marionette.Controller.extend({
        LoginView: function(){
            var model = new Model({});
            return new View({ model: model });
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
