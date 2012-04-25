// Filename: app.js
define([
    'jQuery',
    'Underscore',
    'Backbone',
    'router'
    ], function($, _, Backbone, Router, loadCss){
        var initialize = function(){
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
