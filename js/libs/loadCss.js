/**
 * loadCss
 * Load css and less files
 * 
 */
(function(self) {
    /** 
     * Public load
     *
     * Load Stylesheet files
     * 
     * @param string cssPath The stylesheet url
     * @param string type The stylesheet type (css, less,...)
     *
     */
    self.load = function(cssPath, type){
        if( Object.prototype.toString.call( cssPath ) === '[object Array]' ) {
            for (var i in cssPath) {
                loadFile(cssPath[i], type);
            }
        } else {
            loadFile(cssPath, type);
        }
    }
    
    
    /** 
     * Private loadFile
     *
     * Load Stylesheet file with the good type (css, less,...)
     * 
     * @param string cssPath The stylesheet url
     * @param string type The stylesheet type (css, less,...)
     *
     */
    function loadFile(cssPath, type) {
        //Define stylesheet tag
        var linkTag = document.createElement("link");
        linkTag.setAttribute("rel","stylesheet/"+type);
        linkTag.setAttribute("type","text/"+type);
        linkTag.setAttribute("href",cssPath);
         
        //Add stylesheets to the dom 
        document.getElementsByTagName("head")[0].insertBefore(linkTag);
    }
    
})(window.loadStyleSheet = window.loadStyleSheet || {});

define(function () {
    return window.loadStyleSheet;
});