define([
    'backbone',
    'hbs!templates/login'
], function( Backbone, Template ){
    'use strict';

    return new Backbone.Marionette.ItemView.extend({
        template: Template,
        onRender: function(){
            this.$el.fadeIn('slow');
        }
    });
});
