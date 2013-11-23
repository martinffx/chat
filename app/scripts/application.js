define([
    'backbone',
    'events',
    'views/login',
    'models/user'
],

function( Backbone, Events, LoginView, UserModel ) {
    'use strict';

    var Chat = new Backbone.Marionette.Application();

    // Register Event Names
    Chat.Events = Events;

    /* Add application regions here */
    Chat.addRegions({
        MainRegion: "#main"
    });

    /* Add initializers here */
    Chat.addInitializer( function () {
        Chat.MainRegion.show(new LoginView({ model: new UserModel({}) }));
    });



    return Chat;
});
