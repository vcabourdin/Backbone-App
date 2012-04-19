define([
    'Underscore',
    'jQuery',
    'Backbone',
    '../../../js/collections/Items',
    '../../../js/models/Item',
    ], function(_,$, Backbone, Items, Item) {
        module( "Items collection", {  
            setup: function() {  
                this.items = new Items;  
            },  
            teardown: function() {  
                window.errors = null;  
            }  
        });  
        
        // Items collection check
        test( "Items collection check", function() {  
            stop();
            this.items.fetch({
                success: function(collection,response) {
                    var actualItem = collection.toJSON();
                                        
                    expect(actualItem.length*3);
                    _.each(actualItem, function(item){
                        equals ( _.isObject(item), true, 'The item must be an object' );
                        equals ( _.isNumber(item.id), true, 'The item attribute id (' + item.id + ') must be a number ' );
                        equals ( _.isString(item.text), true, 'The item attribute text (' + item.text + ') must be a string' );
                    });
                    
                    start();
                }
            });
        }); 
        
        // Items collection check
        test( "Add item", function() {  
            stop();
            this.items.fetch({
                success: function(collection,response) {
                    var actualItem = collection.toJSON();
                    var actualCount = actualItem.length;
                    
                    //Add item
                    collection.add(new Item({
                        id: 9999,
                        text: "test",
                        "type":"radio",
                        "items":[{
                            "label":{
                                "text":"label 1",
                                "position":"before"
                            },
                            "value":"1"
                        },{
                            "value":"2"
                        },{
                            "value":"3"
                        },{
                            "value":"4"
                        },{
                            "label":{
                                "text":"label 5",
                                "position":"after"
                            },
                            "value":"5"
                        }]
                    }));  
                    
                    var expectedItem = collection.toJSON();
                    var expectedCount = expectedItem.length;
                    
                    expect((actualItem.length * 3) + 1);
                    
                    strictEqual ( expectedCount, (actualCount +1), 'The items count doit être incrémenté de 1 (' + actualCount + ' => ' + expectedCount + ')' );
                    
                    _.each(actualItem, function(item){
                        equals ( _.isObject(item), true, 'The item (' + item.id + ') must be an object' );
                        equals ( _.isNumber(item.id), true, 'The item attribute id (' + item.id + ') must be a number ' );
                        equals ( _.isString(item.text), true, 'The item attribute text (' + item.text + ') must be a string' );
                    });
                    
                    start();
                }
            });
        }); 
        return this;
    });