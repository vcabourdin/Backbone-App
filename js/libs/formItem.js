/** 
         * Public capitalize
         *
         * Capitalise string
         *
         * @return string The capitalized string
         */
String.prototype.capitalize = function(){ //v1.0
    return this.replace(/\w+/g, function(a){
        return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
    });
};


/**
 * formItem
 * Form item creation Module 
 * 
 */
(function(self, $) {
    /** 
     * Public initView
     *
     * Init the view
     *
     */
    self.initView = function(){
    }
    
    /** 
     * Public getItemFormContent
     *
     * Get the item form content html
     *
     * @param object item The item to render
     */
    self.getItemFormContent = function(item) {
        var $itemFormContent = null;
        var itemFormContentClass = 'N'+item.type.capitalize();
        switch(item.type) {
            case 'radio':
            case 'checkbox':
                $itemFormContent = renderMultipleChoice(item.type, item.items, item.id, 'item_'+item.id);
                itemFormContentClass += 'Group'; 
                break;
            default:
                break;
        }
        $itemFormContent.addClass('NItemFormContent');
        $itemFormContent = addAttributes($itemFormContent, item.attributes, itemFormContentClass);
        return $itemFormContent;
    }
    
    /** 
     * Private renderLabel
     *
     * Render label
     *
     * @param string text The label text
     * @param string labelFor The label text
     * @param array attributes The radio attributes
     * 
     * @return domObject The label html
     */
    function renderLabel(label, labelFor,  attributes) {
        var $label = $('<label/>');
        $label.attr('for',labelFor);
        $label.html(label.text);
        
        if(label.display != undefined) {
            $label.css('display',label.display);
        }
        
        $label = addAttributes($label, attributes, 'NLabel');
        return $label;
    }
    
    /** 
     * Private renderMultipleChoice
     *
     * Render radio or checkbox
     *
     * @param string type The multiple choice type (radio or checkbox)
     * @param array items The items array
     * @param string name The multiple choice name
     * @param object attributes The multiple choice attributes
     * 
     * @return domObject The multiple choice html
     */
    function renderMultipleChoice(type, items, name, id) {
        var $multipleChoice = $('<div/>');
        var nbItems = items.length;
        if(nbItems > 0) {
            for(var i = 0; i < nbItems; i++) {
                var choiceId = id+'_'+i;
                var $multipleChoiceItem = renderMultipleChoiceItem(type, items[i], name, choiceId);
                NUtils.addFirstLastClass($multipleChoiceItem, (parseInt(i)+1), nbItems);
                $multipleChoice.append($multipleChoiceItem);
            }
        }    
        return $multipleChoice;
    }
    
    /** 
     * Private renderMultipleChoiceItem
     *
     * Render radio or checkbox
     *
     * @param string type The multiple choice type (radio or checkbox)
     * @param object item The item object
     * @param string name The multiple choice item name
     * @param string id The multiple choice item id
     * 
     * @return domObject The multiple choice item html
     */
    function renderMultipleChoiceItem(type, item, name, id) {
        var $multipleChoiceItem = $('<div/>');
        $multipleChoiceItem.addClass('NItemFormContentItem');
        $multipleChoiceItem.addClass('N'+type.capitalize()+'Item');
        if(item.display != undefined) {
            $multipleChoiceItem.css('display',item.display);
        }
        
        var $input = renderInput(type, item.value, name, id, item.attributes);
        var $spanInput = $('<span/>');
        $spanInput.append($input);
        $multipleChoiceItem.append($spanInput);
        
        
        if(item.label != undefined) {
            var $label = renderLabel(item.label, id);
            NUtils.injectElement($label, $spanInput, item.label.position);
        }
        
        return $multipleChoiceItem;
    }
    
    /** 
     * Private renderInput
     *
     * Render input
     *
     * @param string type The input type
     * @param string value The input value
     * @param string name The input name
     * @param array attributes The input attributes
     * 
     * @return domObject The input html
     */
    function renderInput(type, value, name, id, attributes) {
        var $input = $('<input/>');
        $input.attr('type', type);
        $input.attr('name', name);
        $input.attr('id', id);
        $input.val(value);
        $input = addAttributes($input, attributes, 'N'+type.capitalize());
        return $input;
    }
    
    /** 
     * Private addAttributes
     *
     * Add attributes to an element
     * If attribute already exist on the element, it completes the attribute
     *
     * @param string element The element
     * @param array attributes The attributes
     * @param string elementClass The optionnal element class
     * 
     * @return domObject The element
     */
    function addAttributes(element, attributes, elementClass) {
        for(var attributeName in attributes) {
            var newAttributeValue = attributes[attributeName];
            if(element.attr(attributeName) != undefined) {
                if(attributeName == 'class' || attributeName == 'style') {
                    newAttributeValue = element.attr(attributeName)+ ' '+ newAttributeValue;
                }
                element.attr(attributeName, newAttributeValue);
                
            } else {
                element.attr(attributeName, newAttributeValue);
            }
        }
        
        if(elementClass != undefined) {
            element.removeClass(elementClass).addClass(elementClass);
        }
        return element;
    }
    
})(window.formItem = window.formItem || {}, jQuery);

define(['order!libs/jquery/jquery-min'], function () {
    return window.formItem;
});