// define global cache
var gCache = {};
// disable scroll
document.ontouchstart = function(e){ 
    e.preventDefault(); 
}
// when document ready
$(function(){
	// init time and date
	update_time( new Date ( ) );
	// set interval
	setInterval('update_time( new Date ( ) )', 30000 );
	// add to gCache
	gCache.window = $(window);
	gCache.body = $('body');
	// window done
	gCache.window.load(function()
	{
		// add class to body
		gCache.body.addClass('ready');
	});
	// drag start
	$('[draggable=true]').draggable();
	
});