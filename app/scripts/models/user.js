define([
    'backbone'
], function( Backbone ){
    'use strict';

    return Backbone.Model.extend({
        defaults: { name: '' },
        validate: function(attrs, options){
           var error = {};

            if(attrs.name === ''){
                error.name = 'Please enter a username';
            }

            return error;
        }
    });
});
