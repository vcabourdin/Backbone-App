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
    'jQuery', 
    'Underscore', 
    'Backbone',
    'app',
    '../tests/main',
    ], function($, _, Backbone, App){
        App.initialize();
    });