define([
    'backbone',
    'application',
    'controllers/loginController'
],
function ( Backbone, Chat, LoginController ) {
    'use strict';

    Chat.vent.on(Chat.Events.Start, function(){
        Chat.MainRegion.show(LoginController.LoginView());
    });

    Chat.start();
});
