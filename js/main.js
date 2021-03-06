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
        loadCss: 'libs/loadCss',
        Underscore: 'libs/underscore/underscore',
        Backbone: 'libs/backbone/backbone',
        templates: '../templates'
    }

});

//require([
//    'order!loadCss'
//    ], function(loadCss){
//        //load css files
//        loadCss.load([
//            "main-build.css"
//            ], 'css');
//    });

require([
    'order!loader',
    'order!app'
    ], function(Loader, App){
        App.initialize(); 
    });