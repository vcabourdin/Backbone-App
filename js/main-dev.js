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

require([
    'order!loader',
    'order!app',
    'loadCss'
    ], function(Loader, App, loadCss){
        //load css files
        loadCss.load([
            "assets/css/main.less"
            ], 'less');
            
        require(['order!less']);
        App.initialize(); 
    });