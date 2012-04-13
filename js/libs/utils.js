/**
 * NUtils
 * Utils Module
 * 
 */
(function(self, $) {
    /** 
     * Public t
     *
     * Get text from language file
     * @return string text The translation
     */
    self.t = function(key) {
        var text = key;
        if(NLang[key] != undefined) {
            text = NLang[key];
        }
        return text;
    }
    
    /** 
     * Public addHoveredClass
     *
     * Add hovered class to the element
     */
    self.toggleHoveredClass = function() {
        $(this).toggleClass('hovered');
    }
    
    
    
    /** 
     * Public addFirstLastClass
     *
     * Add first or last class to the element
     * 
     * @param domObject element The element
     * @param int num The number
     * @param int total The total
     */
    self.addFirstLastClass = function(element, num, total) {
        var elementClass = '';
        if(num == 1) {
            elementClass = 'first ';
        } 
        
        if(num == total) {
            elementClass += 'last';
        }
        
        if(elementClass != '') {
            element.addClass(elementClass);
        }
    }
    
    /** 
     * Public addOddEvenClass
     *
     * Add odd or even class to the element
     * 
     * @param domObject element The element
     * @param int num The number
     */
    self.addOddEvenClass = function(element, num) {
        var elementClass = 'odd';
        if (num%2 == 0) {
            elementClass = 'even';
        }
        $(element).addClass(elementClass);
    }
    
    /** 
     * Public injectElement
     *
     * Inject a label domObject at the begining or the end an domObject element
     *
     * @param domObject elementToInject The element to inject domObject
     * @param domObject element The element domObject
     * @param string where The position where will be injected the elementToInject
     * 
     * @return true
     */
    self.injectElement = function(elementToInject, element, where) {
        switch(where) {
            case 'top':
                element.prepend(elementToInject);
                break;
            case 'bottom':
                element.append(elementToInject);
                break;
            case 'before':
                element.before(elementToInject);
                break;
            case 'after':
            default:
                element.after(elementToInject);
                break;
        }
        return true;
    }
    
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

})(window.NUtils = window.NUtils || {}, jQuery);

define(['order!libs/jquery/jquery-min'], function () {
    return window.NUtils;
});