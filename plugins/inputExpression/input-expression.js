(function($) {
	
	/**
	 * Live input validation.
	 * Fixed the mozilla value replacement bug.
	 * @name inputExpression
	 * @author Peter Müller
	 * @example $('#mytext').inputExpression(/^([\d]){0,5}$/i);
	 * @depends jQuery 1.4.2
	 * @todo extending num lock coverage.
	 */
	$.fn.inputExpression = function(regexp) {
	
		// Checking for an valid regular expression
		if ( $.type(regexp) !== 'regexp' ) {
			$.error('No valid regexp given');
		}
		
		return this.each(function() {
		
			var $this = $(this);
		
			// inputExpression works only with valid textareas or input fields
			if( !$this.is('input[type="text"],textarea') ) {
				$.error('inputExpression depends an valid inputfield, or a textarea.');
			}
		
			$this.bind('keydown', function(e) {
				
				// Ignoring system codes. e.g. backspace, delete, tab, ...
				if ( e.keyCode <= 46 ) {
					return true;
				}
				
				// Event cancelling, if the expression fails
				if ( !regexp.test($(this).val()+String.fromCharCode(e.keyCode)) ) {
					return false;
				}
			});
		});
	}
})(jQuery);