/**
 * Created by xafaR.
 * Copyright XASHLabs
 * Set of Custom Plugins or maybe copy/paste vendor plugins here as well...
 */
define(['jqueryVanilla'], function ($) {
	// add wait as $.wait() standalone and $(elem).wait() for animation chaining
	(function ($) {

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

	})(jQuery);


	return jQuery;

});