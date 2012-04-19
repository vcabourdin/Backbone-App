//Use ECMA strict mode
"use strict"

//Require configuration
require.config({
    paths: {
        loader: 'libs/backbone/loader',
        jQuery: 'libs/jquery/jquery',
        Underscore: 'libs/underscore/underscore',
        Backbone: 'libs/backbone/backbone',
        templates: '../templates'
    }

});

require([
    'order!loader',
    'order!app',
    '../tests/main',
    ], function(Loader, App){
        App.initialize();
    });