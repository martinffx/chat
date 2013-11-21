define([
    'backbone',
    'events',
    'views/login'
],

function( Backbone, Events, Login ) {
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
        Chat.View
    });



    return Chat;
});
