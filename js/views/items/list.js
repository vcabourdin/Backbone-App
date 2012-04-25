define([
    'jQuery',
    'Underscore',
    'Backbone',
    'views/items/item',
    'text!templates/items/list.html'
    ], function($, _, Backbone, itemsItem, itemsListTpl){
        var list = Backbone.View.extend({
            el: $("#NQuizzWidget"),
            className:"items",
            initialize: function(options) {
                _.bindAll(this, 'render');
                this.options.items.bind('reset', this.render);
                $("ul#NItemsUl").on("mouseenter mouseleave", "li.NItemLi", NUtils.toggleHoveredClass);
                $("div.NRadioItem, div.NCheckboxItem").on("mouseenter mouseleave", "span", NUtils.toggleHoveredClass);
                $("ul#NItemsUl").on("click", "div.NRadioItem", self.addActiveClass);
            },
            render: function() { 
                var listTemplate = _.template(itemsListTpl);
                $(this.el).html(listTemplate);
                
                _.each(this.options.items.models, function(item){
                    new itemsItem({
                        model: item, 
                        el: $("#NItemsUl")
                    });
                });
                
                return this;
            }
        });
        return list;
    });