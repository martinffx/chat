define([
    'backbone',
    'application',
    'controllers/loginController'
],
function ( Backbone, Chat, LoginController ) {
    'use strict';

    Chat.vent.on(Chat.Events.Start, function(){
        var view = LoginController.LoginView();
        Chat.MainRegion.show(view);
    });

    Chat.start();
});
