define([
    'backbone',
    'hbs!templates/login'
], function( Backbone, Template ){
    'use strict';

    return Backbone.Marionette.ItemView.extend({
        template: Template,

        initialize: function(){
            this.model.on('invalid', this.onInvalidModel);
        },

        onRender: function(){
            this.$el.fadeIn(1000);
        },
        className: 'span6 offset3',

        events: {
            'click input#login': 'onLogin'
        },

        onLogin: function(evt){
            var username = this.$el.find('input#username').val();
            this.model.set('name', username, { validate: true });

            alert('Login Click!');
            return false;
        },

        onInvalidModel: function(){
            alert('On Invalid User Model!');
        },

        onError: function(msg){
            alert(msg);
        }
    });
});
