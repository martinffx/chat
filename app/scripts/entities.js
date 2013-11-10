define([
    'backbone',
    'application'
], function(Backbone, App){
    'use strict';

    App.module("Entities", function(Entities){
        Entities.User = Backbone.Models.extend({});
        Entities.Room = Backbone.Models.extend({});

        Entities.Users = Backbone.Colection({
            model: Entities.User
        });

        Entities.Rooms = Backbone.Colection({
            model: Entities.Room
        });
    });
});
