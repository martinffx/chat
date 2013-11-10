define([
    'marionette',
    'application',
    'initOptions'
], function(Marionette, App, InitOptions){
    'use strict';

    App.module("Left", function(Left){
        Left.Layout = Marionette.Layout({
            template: _.template("<div id=\"chat\"></div><div class=\"msg\"></div>"),

            regions: {
                Chat: "#chat",
                Msg: "#msg"
            },

            onRender: function(){
                this.Chat.$el.innerHtml("<h1> Hello </h1>");
            }
        });
    });
});
