define([
    'backbone'
], function( Backbone ){
    'use strict';

    return Backbone.Model.extend({
        defaults: { name: '' },
        validate: function(attrs, options){
           var error = {};

            if(this.username === ''){
                error.username = 'Please enter a username';
            }

            return error;
        }
    });
});
