define([
    'marionette',
    'application',
    'initOptions'
], function(Marionette, App, InitOptions){
    'use strict';

    App.module("Left", function(Left, _){
        Left.Layout = Marionette.Layout({
            template: _.template("<div id=\"rooms\"></div><div class=\"users\"></div>"),

            regions: {
                Rooms: "#rooms",
                Users: "#users"
            },

            onRender: function(){
                this.Rooms.show(new Left.Rooms.CollectionView(
                    { collection: InitOptions.data.rooms }));
                this.Users.show(new Left.Users.CollectionView(
                    { collection: InitOptions.data.users }));
            }
        });
    });
});
