/**
 * Created by xafaR.
 * Copyright XASHLabs
 * Set of Custom Plugins or maybe copy/paste vendor plugins here as well...
 */

// add wait as $.wait() standalone and $(elem).wait() for animation chaining
(function ($) {
	if( xash_utility.xashDebug ) console.log('jQuery.plugins Loaded');

	// Jquery Wait plugin, better than setTimeout native.
	$.wait = function (duration, completeCallback, target) {
		var $target = $(target || '<queue />');
		return $target.delay(duration).queue(function (next) {
			completeCallback.call($target);
			next();
		});
	}

	$.fn.wait = function (duration, completeCallback) {
		return $.wait.call(this, duration, completeCallback, this);
	};




	// Checks & returns item in viewport.
	$.fn.isInViewport = function( offset=0 ) {
		var elementTop = $(this).offset().top ;
		var elementBottom = elementTop + $(this).outerHeight();

		var viewportTop = $(window).scrollTop() + offset ;
		var viewportBottom = viewportTop + $(window).height();

		return elementBottom > viewportTop && elementTop < viewportBottom;
	};

})(jQuery);



