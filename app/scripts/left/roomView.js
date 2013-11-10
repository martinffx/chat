define([
    'marionette',
    'application',
    'initOptions'
], function(Marionette, App, InitOptions){
    'use strict';

    App.module("Left", function(Left, _){
        Left.Room = Marionette.ItemView.extend({
            template: _.template("<a href=\"<%= action %>\"><%= text %></a>"),
            tagName: "li"
        });

        Left.Rooms = Marionette.ColectionView.extend({
            template: _.template("<h2>Rooms</h2><ul><ul>"),
            ItemView: Left.Room,
            tagName: "ul"
        });
    });
});
