//Use ECMA strict mode
"use strict"

//Require configuration
require.config({
    paths: {
        loader: 'libs/loader',
        jQuery: 'libs/jquery/jquery',
        bootstrap: 'libs/bootstrap.min',
        cssua: 'libs/cssua.min',
        html5: 'libs/html5',
        less: 'libs/less-1.3.0.min',
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