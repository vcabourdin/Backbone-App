define([
    'order!libs/jquery/jquery-min', 
//    'order!less',
    'order!libs/underscore/underscore-min', 
    'order!libs/backbone/backbone-min', 
    'order!html5',
    'order!bootstrap',
    'order!cssua'
],
function(){
  return {
    Backbone: Backbone.noConflict(),
    _: _.noConflict(),
    $: jQuery.noConflict()
  };
});
