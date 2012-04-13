define([
    'jQuery',
    'Underscore',
    'Backbone',
    'libs/formItem',
    'libs/utils'
    ], function($, _, Backbone, formItem) {
        var Item = Backbone.Model.extend({
            initialize: function() {
                _.bindAll(this, 'renderItemForm');
                this.renderItemForm();
            },
            renderItemForm : function() {
                var item = this.toJSON();
                var renderedItem = formItem.getItemFormContent(item);
                this.set({
                    formItemHtml: renderedItem.html()
                });
            }
        });
        return Item;
    });