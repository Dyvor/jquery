(function($) {
	
	/**
	 * Parses an URL and returns an object with protocol, host, port, query and hash.
	 * Supported Protocols: http, https and ftp.
	 * @name urlParser
	 * @author Peter Müller
	 * @example $.urlParser('http://test.de:8080?foo=bar#hashme');
	 * @depends jQuery 1.4.2
	 * @returns {object}
	 */
	$.urlParser = function( url ) {
		if ( !url || $.type(url) !== 'string' ) {
			$.error('No valid data given.');
		}
		
		var protocol, host, port, query, hash;
		
		protocol = url.match(/^(https?|ftp)/gi);
		protocol = $.isArray(protocol) && protocol.length ? protocol[0] : '';
		
		host = url.replace(/^(https?:|ftp:|)\/\//gi,'').match(/^([\w\.]){6,}/gi);
		host = $.isArray(host) && host.length ? host[0] : '';
		
		port = url.replace(/^((https?:|ftp:|)\/\/)?([\w\.]){6,}/gi,'').match(/^:(\d){2,4}/gi);
		port = $.isArray(port) && port.length ? parseInt(port[0].replace(/^:/gi, ''), 10) : 80;
		
		query = url.match(/\?.*$/gi);
		query = $.isArray(query) && query.length ? query[0].replace(/^\?/gi,'').replace(/(#(.*)?)?$/,'') : '';
		
		hash = url.match(/#.*$/gi);
		hash = $.isArray(hash) && hash.length ? hash[0].replace(/^#/gi,'') : '';
		
		return {
			protocol : protocol,
			host : host,
			port : port,
			query : query,
			hash : hash
		};
	};
	
})(jQuery);