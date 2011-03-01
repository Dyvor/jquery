(function($) {
	
	/**
	 * Parsing an URL query and returns the data as an key value object.
	 * @name queryData
	 * @author Peter Müller
	 * @example $.queryData('foo=bar&bla=&holz=bein');
	 * @depends jQuery 1.4.2
	 * @returns {object}
	 */
	$.queryData = function( query ) {
		if ( !query || $.type(query) !== 'string' ) {
			$.error('No valid data given.');
		}
		
		var data = {}, pairs = query.split(/&/gi), i = 0, len = pairs.length, pair;
		
		for ( ; i < len; i++ ) {
			pair = pairs[i].split(/=/gi);
			
			if ( pair.length ) {
				data[pair[0]] = pair[1] ? pair[1] : '';
			}
		}
		
		return data;
	};
	
})(jQuery);