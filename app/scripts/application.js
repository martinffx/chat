define([
    'backbone',
    'events'
], function( Backbone, Events ) {
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
        Chat.vent.trigger(Chat.Events.Start);
    });

    return Chat;
});
