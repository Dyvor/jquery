(function($) {

	/**
	 * Parsing the mailto value, defined in href anker attribute.
	 * @name mailtoParser
	 * @author Peter Müller
	 * @example $.mailtoParser('mailto:peter.mueller@1und1.de?subject=foo&body=bar');
	 * @depends jQuery 1.4.2
	 * @depends queryData Plugin
	 * @returns {object}
	 */
	$.mailtoParser = function( mailto ) {
		if ( !mailto || $.type(mailto) !== 'string' ) {
			$.error('No valid data given.');
		}
		
		var email = mailto.replace(/^mailto:/gi,'').replace(/\?.*$/gi,''),
			query = mailto.match(/\?.*$/gi);
		
		query = $.isArray(query) && query.length ? query[0].replace(/^\?/gi,'') : '';
		
		return $.extend(this.queryData(query), { email : email });
	};
	
})(jQuery);