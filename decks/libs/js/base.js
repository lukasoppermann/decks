// define global cache
var gCache = {};
// disable scroll
// document.ontouchstart = function(e){
// 	console.log(e);
// 	e.preventDefault(); 
// }
// when document ready
$(function(){
	// add to gCache
	gCache.window = $(window);
	gCache.body = $('body');
	//
	gCache.body.bind("touchmove", function(e) {
		if(e.target.nodeName === "BODY"){
			e.preventDefault();
		}
	});
	$('.scrollable').bind("touchmove", function(e) {
		e.stopPropagation();
	});
	// init time and date
	update_time( new Date ( ) );
	// set interval
	setInterval('update_time( new Date ( ) )', 30000 );
	// window done
	gCache.window.load(function()
	{
		// add class to body
		gCache.body.addClass('ready');
	});
	// drag start
	$('[draggable=true]').draggable();
	
});