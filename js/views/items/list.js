define([
    'jQuery',
    'Underscore',
    'Backbone',
    'views/items/item',
    'text!templates/items/list.html'
    ], function($, _, Backbone, itemsItem, itemsListTpl){
        var list = Backbone.View.extend({
            el: $("#page"),
            className:"items",
            initialize: function(options) {
                _.bindAll(this, 'render');
                this.options.items.bind('reset', this.render);
            },
            render: function() { 
                var listTemplate = _.template(itemsListTpl);
                $(this.el).html(listTemplate);
                
                _.each(this.options.items.models, function(item){
                    new itemsItem({
                        model: item, 
                        el: $("#ulItems")
                    });
                });
                
                return this;
            }
        });
        return list;
    });