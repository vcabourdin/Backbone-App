define([
    'jQuery',
    'Underscore',
    'Backbone',
    'text!templates/items/item.html'
    ], function($, _, Backbone, itemsItem){
        var itemsView = Backbone.View.extend({
            className:"item",
            initialize: function(options) {
                _.bindAll(this, 'render');
                this.model.bind('change', this.render);
                this.render();
            },
            render: function() {  
                var data = {
                    item : this.model,
                    _: _ 
                }
                var itemTemplate = _.template(itemsItem, data);
                $(this.el).append( itemTemplate ); 
                
                return this;
            }
        });
        return itemsView;
    });