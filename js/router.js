define([
    'jQuery',
    'Underscore',
    'Backbone',
    'views/home/main',
    'collections/Items',
    'views/items/list',
    ], function($, _, Backbone, mainHomeView, Items, itemsList ){
        var AppRouter = Backbone.Router.extend({
            routes: {
                '/items': 'itemsAction',
                '*actions': 'defaultAction'
            },
            
            itemsAction: function(){
                //Get the collection
                var items = new Items;
                
                //Get the view and assign the collection
                new itemsList({
                    "items": items
                });
            },
            
            defaultAction: function(actions){
                // We have no matching route, lets display the home page 
                mainHomeView.render(); 
            }
        });

        var initialize = function(){
            new AppRouter;
            Backbone.history.start();
        };
        
        return { 
            initialize: initialize
        };
    });