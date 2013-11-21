define([
    'underscore',
    'marionette',
    'application',
    'hbs!templates/layout.hbs'
], function(_, Marionette, App, Template){
    'use strict';

    var _Layout = Marionette.Layout({
        template: Template,

        regions: {
            RoomsRegion: "#rooms",
            UsersRegion: "#users",
            HistoryRegion: "#history",
            InputRegion: "#input"
        }
    });

    var _layout;

    var initialize = function(){
        _layout = new _Layout({});
    };

    return {
        getLayout: function(){
            if(_.isUndefined(_layout)){
                initialize();
            }
            return _layout;
        }
    };
});
