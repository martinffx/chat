define([
    'backbone',
    'communicator'
],

function( Backbone, Communicator ) {
    'use strict';

    var App = new Backbone.Marionette.Application();

    /* Add application regions here */
    App.addRegions({
        LeftRegion: "#left",
        ChatRefion: "#chat"
    });

    /* Add initializers here */
    App.addInitializer( function () {
	Communicator.mediator.trigger("APP:START");
    });

    return App;
});