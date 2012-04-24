// Filename: app.js
define([
    'jQuery',
    'Underscore',
    'Backbone',
    'router', // Request router.js
    'loadCss'
    ], function($, _, Backbone, Router, loadCss){
        var initialize = function(){
            //load css files
            loadCss.load([
                "themes/default/stylesheet.less",
                "assets/css/main.less"
            ], 'less');
            
            require(['order!less']);
            
            //Configure the underscore template to look like mustache
            _.templateSettings = {
                interpolate: /\{\{\=(.+?)\}\}/g,
                evaluate: /\{\{(.+?)\}\}/g
            };
            // Pass in our Router module and call it's initialize function
            Router.initialize();
        };

        return { 
            initialize: initialize
        };
    });
