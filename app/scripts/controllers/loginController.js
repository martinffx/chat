define([
    'views/login',
    'models/user'
], function(View, Model){
    'use strict';

    return {
        LoginView: function(){
            var model = new Model({});
            return new View({ model: model });
        }
    };
});
