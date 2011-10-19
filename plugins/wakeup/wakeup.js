/**
 * Register several callback functions with $.wakeup,
 * to respond on your computers idle mode.
 * @name wakeup
 * @author Peter Müller
 * @example $.wakeup(function( sleep_ms, awake_ms ) { });
 * @depends jQuery 1.4.2
 * @returns {undefined}
 */
(function( $, window, undefined ) {
	
	var	callbacks = [],
		lastseen,
		interval;
	
	$.wakeup = function( callback ) {
		
		if ( ! $.isFunction( callback ) ) {
			$.error('No function given in $.wakeup().');
		}
		
		callbacks.push( callback );
		
		if ( ! interval ) {
			
			lastseen = $.now();
			
			interval = window.setInterval(function() {
				var i = 0, len = callbacks.length, now = $.now();
				
				if ( now > ( lastseen + 1000 * 2 ) ) {
					for ( ; i < len ; i++ ) {
						callbacks[i]( lastseen, now );
					}
				}
				
				lastseen = $.now();
			}, 1000);
		}
	};
	
})( jQuery, window );