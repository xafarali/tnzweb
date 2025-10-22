(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

require('./jquery');

require('./menu');

var _utilities = require('./utilities');

var _utilities2 = _interopRequireDefault(_utilities);

require('./jquery.plugins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Calling Global jquery

// Menu stuf
// import './babel-polyfill';
// import './core-js-ie8';
//

jQuery(document).ready(function ($) {

	/*
  @todo , Implement own scroll to element with help of even mouse wheel
 mouse scroll even on section class
 $(window).on('wheel', function(e) {
 	var delta = e.originalEvent.deltaY;
 		if (delta > 0) $('body').text('down');
 	else $('body').text('up');
 		return false; // this line is only added so the whole page won't scroll in the demo
 });
 */

	console.log('..:: Welcome ::..');

	// Check object to be animated first,
	// so custom speed can be applied
	// instead of default
	if ($('.do-animate[data-speed]').length) {
		$('.do-animate[data-speed]').each(function () {
			var $_this = $(this);
			$_this.css({
				'-webkit-transition-duration': _utilities2['default'].getSpeed($_this) + "s!Important;",
				'-moz-transition-duration': _utilities2['default'].getSpeed($_this) + "s!Important;",
				'transition-duration': _utilities2['default'].getSpeed($_this) + "s!Important;",
				'-webkit-animation-duration': _utilities2['default'].getSpeed($_this) + "s!Important;",
				'-moz-animation-duration': _utilities2['default'].getSpeed($_this) + "s!Important;",
				'animation-duration': _utilities2['default'].getSpeed($_this) + "s!Important;"
			});
		});
	}

	// Slick Slider---
	// Apply Class on widget currently.
	if ($('.slick-container').length) {

		$('.slick-container .ss-banner-cont > ul').each(function (i, v) {

			// If more than 1 Li are here.
			// More than 1 means need to slide
			if ($('li', $(this)).length > 1) {
				$(this).slick({
					speed: 600
					// adaptiveHeight: true
				});
			}
		});
	};

	//============================================================
	// Sliders for Products
	//============================================================
	var $_prd_slider = $('.is-slider');
	if ($_prd_slider.length) {

		_utilities2['default'].debugPrint('product slide found');

		$_prd_slider.each(function (i, v) {

			console.log('$_prd_slider slide Looping');

			var $_this = $(this),
			    sld_desktop = _utilities2['default'].getAttr($_this, 'slide-desktop', 4),
			    sld_tablet = _utilities2['default'].getAttr($_this, 'slide-tablet', 3),
			    sld_phone = _utilities2['default'].getAttr($_this, 'slide-phone', 2);

			$('.products.row', $_this).slick({
				variableWidth: true,
				infinite: false,
				speed: 300,
				slidesToShow: sld_desktop,
				//slidesToScroll: sld_desktop,
				responsive: [{
					breakpoint: 1024,
					settings: {
						slidesToShow: sld_tablet,
						slidesToScroll: sld_tablet,
						infinite: true,
						dots: true
					}
				}, {
					breakpoint: 480,
					settings: {
						slidesToShow: sld_phone,
						slidesToScroll: sld_phone
					}
					// You can unslick at a given breakpoint now by adding:
					// settings: "unslick"
					// instead of a settings object
				}]
			});
		}); // Loop ends!;

	}

	/*  Converts All the Svg to text svg
 //--------------------------------------------------*/
	_utilities2['default'].makeSVG();
}); // jQuery scope


},{"./jquery":2,"./jquery.plugins":3,"./menu":4,"./utilities":5}],2:[function(require,module,exports){
'use strict';

/**
 * Created by xafar
 */
$ = window.jQuery;
// Cookies = window.Cookies();
if (xash_utility.xashDebug) console.log('jquery.js Loaded');


},{}],3:[function(require,module,exports){
'use strict';

/**
 * Created by xafaR.
 * Copyright XASHLabs
 * Set of Custom Plugins or maybe copy/paste vendor plugins here as well...
 */

// add wait as $.wait() standalone and $(elem).wait() for animation chaining
(function ($) {
	if (xash_utility.xashDebug) console.log('jQuery.plugins Loaded');

	// Jquery Wait plugin, better than setTimeout native.
	$.wait = function (duration, completeCallback, target) {
		var $target = $(target || '<queue />');
		return $target.delay(duration).queue(function (next) {
			completeCallback.call($target);
			next();
		});
	};

	$.fn.wait = function (duration, completeCallback) {
		return $.wait.call(this, duration, completeCallback, this);
	};

	// Checks & returns item in viewport.
	$.fn.isInViewport = function () {
		var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

		var elementTop = $(this).offset().top;
		var elementBottom = elementTop + $(this).outerHeight();

		var viewportTop = $(window).scrollTop() + offset;
		var viewportBottom = viewportTop + $(window).height();

		return elementBottom > viewportTop && elementTop < viewportBottom;
	};
})(jQuery);


},{}],4:[function(require,module,exports){
'use strict';

require('./jquery');

var _utilities = require('./utilities');

var _utilities2 = _interopRequireDefault(_utilities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Created by xafaR.
 * Copyright XASHLabs
 * All Menu related functions
 */

var _target_menu = '.navbar-toggle',
    _menu_box = '.menu-curtain';

jQuery(document).ready(function ($) {

	if (xash_utility.xashDebug) console.log('Menu.js Loaded');

	var is_home = $('body').hasClass('homepage');

	// Nav Toggle Fn
	$(_target_menu).click(function () {

		var _this = $(this);

		if (!$(_menu_box).hasClass('active')) {
			$('body,html').wait(450, function () {
				$('body,html').addClass('overflow');
			});

			_this.addClass('active');
			// $(_menu_box).css('display', 'table');
			$(_menu_box).addClass('active');
		} else {

			_this.removeClass('active');
			// $(_menu_box).css('display', 'none');
			$(_menu_box).removeClass('active');
			$('.menu-curtain').find('.sub-menu').slideUp();
			$('body,html').removeClass('overflow');
		}
	});

	// scroll max val to stick
	var stick_start = get_menu_btn_pos('.super-navigation'),
	    $_body = $('body'),
	    waiting = false;

	//------------------------------------------------
	// Sticky Menu`
	// Overflow should not be applied on html.
	if (is_home && !is_home) {

		$(window).on('scroll', function () {
			return false;
			// console.log("Scrolling ... \nScrolling....")
			_utilities2['default'].scroll_event_trigger(_utilities2['default'].sticky_test_add('sticky', stick_start), 150);
		});
	}

	/*  Search Button
  //--------------------------------------------------*/

	$('.search-btn').on('click', function (e) {
		e.preventDefault();

		// alert('Mini Cart clicked.')
		$('#header-search').modal('show');
	});

	// Get element height with its offset position
	// so actual location is discovered
	function get_menu_btn_pos(elem) {
		return $(elem).offset().top + $(elem).height();
	}

	// Drop Downs for Bootstrap
	//---------------------------------------------------------------

	/*
 $('.___dropdown').on('show.bs.dropdown', function() {
 	$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
 });
 	// Add slideUp animation to Bootstrap dropdown when collapsing.
 $('.___dropdown').on('hide.bs.dropdown', function() {
 	$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
 });
 */

	$('.main-navigation .dropdown').hover(function () {
		$(this).find('.dropdown-menu').first().stop(true, true).addClass('show-menu');
	}, function () {
		$(this).find('.dropdown-menu').first().stop(true, true).removeClass('show-menu');
	});

	// Enable Menu click
	$('.main-navigation  .dropdown-toggle').click(function (e) {

		e.preventDefault();
		var location = $(this).attr('href');
		window.location.href = location;

		return false;
	});

	// Smart Phone Menu
	//@Note: Deprecated
	$('.menu-curtain .dropdown-arrow').on('click', function (e) {
		e.preventDefault();

		var $_this = $(this);

		$_this.next('ul').slideToggle();
		console.log('Menu Clicked');
	});

	$('.menu-toggle').on('click', function (e) {
		e.preventDefault();
		console.log('clicked menu toggle');
		$('.menu-curtain').addClass('show-menu');
		$('body, html').addClass('phone-menu-open');
	});

	$('.menu-curtain .cm-trigger').on('click', function (e) {
		e.preventDefault();
		var $_this = $(this);
		$_this.next('.sub-menu-wrapper').addClass('show-menu');
		console.log('Menu Clicked');
	});

	$('.menu-curtain .ctrl-gb').on('click', function (e) {
		e.preventDefault();
		var $_this = $(this);
		$_this.parents('.sub-menu-wrapper:first').removeClass('show-menu');
	});

	$('.menu-curtain .ctrl-x').on('click', function (e) {
		e.preventDefault();
		var $_this = $(this);
		$('.show-menu').removeClass('show-menu');
		$('html,body').removeClass('phone-menu-open');
	});
});


},{"./jquery":2,"./utilities":5}],5:[function(require,module,exports){
'use strict';

exports.__esModule = true;

require('./jquery');

if (xash_utility.xashDebug) console.log('Utitlies.js Loaded'); /**
                                                                * Created by xafaR
                                                                * Copyright XASHLabs
                                                                * Utility Module is based on static functions
                                                                */

var utils = {

	// Using object define globally, xash_utility via localized_script
	themeURL: xash_utility.themeUri,

	self: undefined,

	// Load CSS Element, instead of queue
	loadCss: function loadCss(path, location) {
		var link = document.createElement("link");
		location = location || "head";
		link.type = "text/css";
		link.rel = "stylesheet";
		link.href = path;
		$(link).appendTo($(location));
	},

	// Console Logs in debug mode
	debugPrint: function debugPrint() {
		var $string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		console.log($string);
	},

	menuIsVisible: function menuIsVisible() {
		var $menu = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		return $($menu).is(":visible");
	},

	getSpeed: function getSpeed($ele) {
		return parseInt(this.getAttr($ele, 'speed'));
	},

	getDelay: function getDelay($ele) {
		return parseInt(this.getAttr($ele, 'delay'));
	},

	getAnimation: function getAnimation($ele) {
		return $.trim(this.getAttr($ele, 'anim'));
	},

	// Private Helper fn
	getAttr: function getAttr($ele, attr, $default) {
		$default = $default || 1;
		return $ele.data(attr) != undefined ? $ele.data(attr) : $default;
	},

	// Animation Function
	/**
  * Animate recursive on child items which has class .do.animate
  * if reversable on then it will reverse everything,
  * Its combined with fullpage js  etc
  */

	animate: function animate($parent_element) {
		var $target_element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.do-animate';
		var $reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


		//	Need to add class who got delay paramer late.
		//	Check Delay first.
		// var cur_action = action;

		// repeation of animation
		// $('.current').find('.repeat').each(function () {
		// 	$(this).addClass('animate');
		// });

		$('.current').removeClass('current');
		$parent_element.addClass('current');

		console.log(this);

		$($parent_element).find($target_element).each(function (k, v) {

			var _this = $(this);

			var _delay = utils.getDelay(_this); // this. scope issue, so refering parent
			var _anim = utils.getAnimation(_this);

			// Pull Back all animation if reverse mode is on.
			// @note need to reverse delay as well, for better effect
			if ($reverse) {

				if (_delay) {

					// timer
					setTimeout(function () {
						_this.removeClass(_anim).delay(200);
						if (_this.hasClass('_invis')) {
							_this.addClass('invisible').removeClass('_invis');
						}
					}, _delay);

					// exit.
					return false;
				}
			}

			// Normal Animation Procedure
			if (_delay) {

				// timer
				setTimeout(function () {
					_this.addClass(_anim).delay(200);
					if (_this.hasClass('invisible')) {
						_this.addClass('_invis').removeClass('invisible');
					}
				}, _delay);
			} else {
				_this.removeClass(_anim);
			}
		});
	},

	// Adding helper function timeouts to scroll event fn,
	// to make scroll bit smoother.
	scroll_event_trigger: function scroll_event_trigger(fn, timeout) {
		var waiting = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


		// making it local
		var _waiting = waiting;

		if (_waiting) {
			return;
		} else {

			var _timer = setTimeout(function () {

				fn;
				_waiting = true;
			}, timeout);
		}
	},

	/**
  * Scroll to any element
  * @todo, Need to add easing
  * */
	scroll_to_element: function scroll_to_element(elem) {
		var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
		var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
		var easing = arguments[3];

		$('html, body').animate({
			scrollTop: $(elem).offset().top
		}, {
			duration: speed,
			complete: function complete() {
				if ($.isFunction(callback)) {
					callback();
				}
			}
		});
	},

	// add class sticky based on scroll value.
	sticky_test_add: function sticky_test_add(className, limit) {
		var $_body = $('body');

		if ($(window).scrollTop() > limit) {
			$_body.addClass(className);
		} else {
			$_body.removeClass(className);
		}
	},

	/*  Add to Cart Message.
  Temp solution, till find good way to handle by woocommerce
  trick is to check cart item number before and after
  */
	//--------------------------------------------------*/
	get_cart_item_number: function get_cart_item_number(elem) {
		return parseInt($(elem).text().split(' ')[0]);
	},

	//=========================================================================
	//=========================================================================
	//  Generate Bootstrap popup in footer dynamicallly
	//=========================================================================
	//=========================================================================
	generateModal: function generateModal(placementId, heading, formContent) {
		var timer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
		var strSubmitFunc = arguments[4];
		var btnText = arguments[5];


		strSubmitFunc = strSubmitFunc || null;
		heading = heading || null;

		var html = '<div id="modalWindow" class="modal fade " style="display:none;" tabindex="-1" role="dialog">';
		html += "<div class='modal-dialog'><div class='modal-content'>";
		html += '<div class="modal-header">';
		html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';

		if (heading != null) {
			html += '<h3>' + heading + '</h3>';
		}
		html += '</div>';

		//html += '<p>';
		html += '<div class="modal-body">';
		html += formContent;
		html += '</div>';

		if (btnText != '' && strSubmitFunc != null) {
			html += '<div class="modal-footer">';
			html += '<span class="btn btn-success"';
			html += ' onClick="' + strSubmitFunc + '">' + btnText;
			html += '</span>';
			html += '<span class="btn" data-dismiss="modal">';
			html += 'Close';
			html += '</span>'; // close button
			html += '</div>'; // footer
		}
		html += '</div></div>'; // modalContent
		html += '</div>'; // modalWindow

		$(html).appendTo(placementId);
		// $( placementId ).html(html);
		$("#modalWindow").modal('show');

		var _timer_dialog = null;

		// if Timer is On
		if (timer) {
			_timer_dialog = setTimeout(function () {

				$('#modalWindow').modal('hide');
			}, timer);
		}

		$('#modalWindow').on('hidden.bs.modal', function () {
			$(this).remove();
			clearTimeout(_timer_dialog);
		});
	},

	//=========================================================================
	//=========================================================================
	//  Generate SVG from SVG Img element
	//=========================================================================
	//=========================================================================
	makeSVG: function makeSVG(ele) {

		ele = ele || 'img.svg-import';
		jQuery(ele).each(function () {

			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');
			console.log('Converting svgs...' + imgClass);

			jQuery.get(imgURL, function (data) {
				// Get the SVG tag, ignore the rest
				var $svg = jQuery(data).find('svg');

				// Add replaced image's ID to the new SVG
				if (typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				// Add replaced image's classes to the new SVG
				if (typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass + ' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Check if the viewport is set, else we gonna set it if we can.
				if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
				}

				// Replace image with new SVG
				$img.replaceWith($svg);
			}, 'xml');
		});
	}

}; // utils


// Exports Module
exports['default'] = utils;
// });


},{"./jquery":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvRVM2L2NvbXBpbGVkL2FwcC5qcyIsImFzc2V0cy9qcy9FUzYvY29tcGlsZWQvanF1ZXJ5LmpzIiwiYXNzZXRzL2pzL0VTNi9jb21waWxlZC9qcXVlcnkucGx1Z2lucy5qcyIsImFzc2V0cy9qcy9FUzYvY29tcGlsZWQvbWVudS5qcyIsImFzc2V0cy9qcy9FUzYvY29tcGlsZWQvdXRpbGl0aWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuL2pxdWVyeScpO1xuXG5yZXF1aXJlKCcuL21lbnUnKTtcblxudmFyIF91dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcycpO1xuXG52YXIgX3V0aWxpdGllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsaXRpZXMpO1xuXG5yZXF1aXJlKCcuL2pxdWVyeS5wbHVnaW5zJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuLy8gQ2FsbGluZyBHbG9iYWwganF1ZXJ5XG5cbi8vIE1lbnUgc3R1ZlxuLy8gaW1wb3J0ICcuL2JhYmVsLXBvbHlmaWxsJztcbi8vIGltcG9ydCAnLi9jb3JlLWpzLWllOCc7XG4vL1xuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG5cblx0LypcbiAgQHRvZG8gLCBJbXBsZW1lbnQgb3duIHNjcm9sbCB0byBlbGVtZW50IHdpdGggaGVscCBvZiBldmVuIG1vdXNlIHdoZWVsXG4gbW91c2Ugc2Nyb2xsIGV2ZW4gb24gc2VjdGlvbiBjbGFzc1xuICQod2luZG93KS5vbignd2hlZWwnLCBmdW5jdGlvbihlKSB7XG4gXHR2YXIgZGVsdGEgPSBlLm9yaWdpbmFsRXZlbnQuZGVsdGFZO1xuIFx0XHRpZiAoZGVsdGEgPiAwKSAkKCdib2R5JykudGV4dCgnZG93bicpO1xuIFx0ZWxzZSAkKCdib2R5JykudGV4dCgndXAnKTtcbiBcdFx0cmV0dXJuIGZhbHNlOyAvLyB0aGlzIGxpbmUgaXMgb25seSBhZGRlZCBzbyB0aGUgd2hvbGUgcGFnZSB3b24ndCBzY3JvbGwgaW4gdGhlIGRlbW9cbiB9KTtcbiAqL1xuXG5cdGNvbnNvbGUubG9nKCcuLjo6IFdlbGNvbWUgOjouLicpO1xuXG5cdC8vIENoZWNrIG9iamVjdCB0byBiZSBhbmltYXRlZCBmaXJzdCxcblx0Ly8gc28gY3VzdG9tIHNwZWVkIGNhbiBiZSBhcHBsaWVkXG5cdC8vIGluc3RlYWQgb2YgZGVmYXVsdFxuXHRpZiAoJCgnLmRvLWFuaW1hdGVbZGF0YS1zcGVlZF0nKS5sZW5ndGgpIHtcblx0XHQkKCcuZG8tYW5pbWF0ZVtkYXRhLXNwZWVkXScpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyICRfdGhpcyA9ICQodGhpcyk7XG5cdFx0XHQkX3RoaXMuY3NzKHtcblx0XHRcdFx0Jy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbic6IF91dGlsaXRpZXMyWydkZWZhdWx0J10uZ2V0U3BlZWQoJF90aGlzKSArIFwicyFJbXBvcnRhbnQ7XCIsXG5cdFx0XHRcdCctbW96LXRyYW5zaXRpb24tZHVyYXRpb24nOiBfdXRpbGl0aWVzMlsnZGVmYXVsdCddLmdldFNwZWVkKCRfdGhpcykgKyBcInMhSW1wb3J0YW50O1wiLFxuXHRcdFx0XHQndHJhbnNpdGlvbi1kdXJhdGlvbic6IF91dGlsaXRpZXMyWydkZWZhdWx0J10uZ2V0U3BlZWQoJF90aGlzKSArIFwicyFJbXBvcnRhbnQ7XCIsXG5cdFx0XHRcdCctd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbic6IF91dGlsaXRpZXMyWydkZWZhdWx0J10uZ2V0U3BlZWQoJF90aGlzKSArIFwicyFJbXBvcnRhbnQ7XCIsXG5cdFx0XHRcdCctbW96LWFuaW1hdGlvbi1kdXJhdGlvbic6IF91dGlsaXRpZXMyWydkZWZhdWx0J10uZ2V0U3BlZWQoJF90aGlzKSArIFwicyFJbXBvcnRhbnQ7XCIsXG5cdFx0XHRcdCdhbmltYXRpb24tZHVyYXRpb24nOiBfdXRpbGl0aWVzMlsnZGVmYXVsdCddLmdldFNwZWVkKCRfdGhpcykgKyBcInMhSW1wb3J0YW50O1wiXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIFNsaWNrIFNsaWRlci0tLVxuXHQvLyBBcHBseSBDbGFzcyBvbiB3aWRnZXQgY3VycmVudGx5LlxuXHRpZiAoJCgnLnNsaWNrLWNvbnRhaW5lcicpLmxlbmd0aCkge1xuXG5cdFx0JCgnLnNsaWNrLWNvbnRhaW5lciAuc3MtYmFubmVyLWNvbnQgPiB1bCcpLmVhY2goZnVuY3Rpb24gKGksIHYpIHtcblxuXHRcdFx0Ly8gSWYgbW9yZSB0aGFuIDEgTGkgYXJlIGhlcmUuXG5cdFx0XHQvLyBNb3JlIHRoYW4gMSBtZWFucyBuZWVkIHRvIHNsaWRlXG5cdFx0XHRpZiAoJCgnbGknLCAkKHRoaXMpKS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdCQodGhpcykuc2xpY2soe1xuXHRcdFx0XHRcdHNwZWVkOiA2MDBcblx0XHRcdFx0XHQvLyBhZGFwdGl2ZUhlaWdodDogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHQvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQvLyBTbGlkZXJzIGZvciBQcm9kdWN0c1xuXHQvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHR2YXIgJF9wcmRfc2xpZGVyID0gJCgnLmlzLXNsaWRlcicpO1xuXHRpZiAoJF9wcmRfc2xpZGVyLmxlbmd0aCkge1xuXG5cdFx0X3V0aWxpdGllczJbJ2RlZmF1bHQnXS5kZWJ1Z1ByaW50KCdwcm9kdWN0IHNsaWRlIGZvdW5kJyk7XG5cblx0XHQkX3ByZF9zbGlkZXIuZWFjaChmdW5jdGlvbiAoaSwgdikge1xuXG5cdFx0XHRjb25zb2xlLmxvZygnJF9wcmRfc2xpZGVyIHNsaWRlIExvb3BpbmcnKTtcblxuXHRcdFx0dmFyICRfdGhpcyA9ICQodGhpcyksXG5cdFx0XHQgICAgc2xkX2Rlc2t0b3AgPSBfdXRpbGl0aWVzMlsnZGVmYXVsdCddLmdldEF0dHIoJF90aGlzLCAnc2xpZGUtZGVza3RvcCcsIDQpLFxuXHRcdFx0ICAgIHNsZF90YWJsZXQgPSBfdXRpbGl0aWVzMlsnZGVmYXVsdCddLmdldEF0dHIoJF90aGlzLCAnc2xpZGUtdGFibGV0JywgMyksXG5cdFx0XHQgICAgc2xkX3Bob25lID0gX3V0aWxpdGllczJbJ2RlZmF1bHQnXS5nZXRBdHRyKCRfdGhpcywgJ3NsaWRlLXBob25lJywgMik7XG5cblx0XHRcdCQoJy5wcm9kdWN0cy5yb3cnLCAkX3RoaXMpLnNsaWNrKHtcblx0XHRcdFx0dmFyaWFibGVXaWR0aDogdHJ1ZSxcblx0XHRcdFx0aW5maW5pdGU6IGZhbHNlLFxuXHRcdFx0XHRzcGVlZDogMzAwLFxuXHRcdFx0XHRzbGlkZXNUb1Nob3c6IHNsZF9kZXNrdG9wLFxuXHRcdFx0XHQvL3NsaWRlc1RvU2Nyb2xsOiBzbGRfZGVza3RvcCxcblx0XHRcdFx0cmVzcG9uc2l2ZTogW3tcblx0XHRcdFx0XHRicmVha3BvaW50OiAxMDI0LFxuXHRcdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IHNsZF90YWJsZXQsXG5cdFx0XHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogc2xkX3RhYmxldCxcblx0XHRcdFx0XHRcdGluZmluaXRlOiB0cnVlLFxuXHRcdFx0XHRcdFx0ZG90czogdHJ1ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdGJyZWFrcG9pbnQ6IDQ4MCxcblx0XHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdFx0c2xpZGVzVG9TaG93OiBzbGRfcGhvbmUsXG5cdFx0XHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogc2xkX3Bob25lXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIFlvdSBjYW4gdW5zbGljayBhdCBhIGdpdmVuIGJyZWFrcG9pbnQgbm93IGJ5IGFkZGluZzpcblx0XHRcdFx0XHQvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCJcblx0XHRcdFx0XHQvLyBpbnN0ZWFkIG9mIGEgc2V0dGluZ3Mgb2JqZWN0XG5cdFx0XHRcdH1dXG5cdFx0XHR9KTtcblx0XHR9KTsgLy8gTG9vcCBlbmRzITtcblxuXHR9XG5cblx0LyogIENvbnZlcnRzIEFsbCB0aGUgU3ZnIHRvIHRleHQgc3ZnXG4gLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cdF91dGlsaXRpZXMyWydkZWZhdWx0J10ubWFrZVNWRygpO1xufSk7IC8vIGpRdWVyeSBzY29wZVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgeGFmYXJcbiAqL1xuJCA9IHdpbmRvdy5qUXVlcnk7XG4vLyBDb29raWVzID0gd2luZG93LkNvb2tpZXMoKTtcbmlmICh4YXNoX3V0aWxpdHkueGFzaERlYnVnKSBjb25zb2xlLmxvZygnanF1ZXJ5LmpzIExvYWRlZCcpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anF1ZXJ5LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgeGFmYVIuXG4gKiBDb3B5cmlnaHQgWEFTSExhYnNcbiAqIFNldCBvZiBDdXN0b20gUGx1Z2lucyBvciBtYXliZSBjb3B5L3Bhc3RlIHZlbmRvciBwbHVnaW5zIGhlcmUgYXMgd2VsbC4uLlxuICovXG5cbi8vIGFkZCB3YWl0IGFzICQud2FpdCgpIHN0YW5kYWxvbmUgYW5kICQoZWxlbSkud2FpdCgpIGZvciBhbmltYXRpb24gY2hhaW5pbmdcbihmdW5jdGlvbiAoJCkge1xuXHRpZiAoeGFzaF91dGlsaXR5Lnhhc2hEZWJ1ZykgY29uc29sZS5sb2coJ2pRdWVyeS5wbHVnaW5zIExvYWRlZCcpO1xuXG5cdC8vIEpxdWVyeSBXYWl0IHBsdWdpbiwgYmV0dGVyIHRoYW4gc2V0VGltZW91dCBuYXRpdmUuXG5cdCQud2FpdCA9IGZ1bmN0aW9uIChkdXJhdGlvbiwgY29tcGxldGVDYWxsYmFjaywgdGFyZ2V0KSB7XG5cdFx0dmFyICR0YXJnZXQgPSAkKHRhcmdldCB8fCAnPHF1ZXVlIC8+Jyk7XG5cdFx0cmV0dXJuICR0YXJnZXQuZGVsYXkoZHVyYXRpb24pLnF1ZXVlKGZ1bmN0aW9uIChuZXh0KSB7XG5cdFx0XHRjb21wbGV0ZUNhbGxiYWNrLmNhbGwoJHRhcmdldCk7XG5cdFx0XHRuZXh0KCk7XG5cdFx0fSk7XG5cdH07XG5cblx0JC5mbi53YWl0ID0gZnVuY3Rpb24gKGR1cmF0aW9uLCBjb21wbGV0ZUNhbGxiYWNrKSB7XG5cdFx0cmV0dXJuICQud2FpdC5jYWxsKHRoaXMsIGR1cmF0aW9uLCBjb21wbGV0ZUNhbGxiYWNrLCB0aGlzKTtcblx0fTtcblxuXHQvLyBDaGVja3MgJiByZXR1cm5zIGl0ZW0gaW4gdmlld3BvcnQuXG5cdCQuZm4uaXNJblZpZXdwb3J0ID0gZnVuY3Rpb24gKCkge1xuXHRcdHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG5cblx0XHR2YXIgZWxlbWVudFRvcCA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuXHRcdHZhciBlbGVtZW50Qm90dG9tID0gZWxlbWVudFRvcCArICQodGhpcykub3V0ZXJIZWlnaHQoKTtcblxuXHRcdHZhciB2aWV3cG9ydFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArIG9mZnNldDtcblx0XHR2YXIgdmlld3BvcnRCb3R0b20gPSB2aWV3cG9ydFRvcCArICQod2luZG93KS5oZWlnaHQoKTtcblxuXHRcdHJldHVybiBlbGVtZW50Qm90dG9tID4gdmlld3BvcnRUb3AgJiYgZWxlbWVudFRvcCA8IHZpZXdwb3J0Qm90dG9tO1xuXHR9O1xufSkoalF1ZXJ5KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpxdWVyeS5wbHVnaW5zLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuL2pxdWVyeScpO1xuXG52YXIgX3V0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzJyk7XG5cbnZhciBfdXRpbGl0aWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxpdGllcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuLyoqXG4gKiBDcmVhdGVkIGJ5IHhhZmFSLlxuICogQ29weXJpZ2h0IFhBU0hMYWJzXG4gKiBBbGwgTWVudSByZWxhdGVkIGZ1bmN0aW9uc1xuICovXG5cbnZhciBfdGFyZ2V0X21lbnUgPSAnLm5hdmJhci10b2dnbGUnLFxuICAgIF9tZW51X2JveCA9ICcubWVudS1jdXJ0YWluJztcblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuXG5cdGlmICh4YXNoX3V0aWxpdHkueGFzaERlYnVnKSBjb25zb2xlLmxvZygnTWVudS5qcyBMb2FkZWQnKTtcblxuXHR2YXIgaXNfaG9tZSA9ICQoJ2JvZHknKS5oYXNDbGFzcygnaG9tZXBhZ2UnKTtcblxuXHQvLyBOYXYgVG9nZ2xlIEZuXG5cdCQoX3RhcmdldF9tZW51KS5jbGljayhmdW5jdGlvbiAoKSB7XG5cblx0XHR2YXIgX3RoaXMgPSAkKHRoaXMpO1xuXG5cdFx0aWYgKCEkKF9tZW51X2JveCkuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG5cdFx0XHQkKCdib2R5LGh0bWwnKS53YWl0KDQ1MCwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKCdib2R5LGh0bWwnKS5hZGRDbGFzcygnb3ZlcmZsb3cnKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRfdGhpcy5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHQvLyAkKF9tZW51X2JveCkuY3NzKCdkaXNwbGF5JywgJ3RhYmxlJyk7XG5cdFx0XHQkKF9tZW51X2JveCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdF90aGlzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdC8vICQoX21lbnVfYm94KS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0JChfbWVudV9ib3gpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdCQoJy5tZW51LWN1cnRhaW4nKS5maW5kKCcuc3ViLW1lbnUnKS5zbGlkZVVwKCk7XG5cdFx0XHQkKCdib2R5LGh0bWwnKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3cnKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIHNjcm9sbCBtYXggdmFsIHRvIHN0aWNrXG5cdHZhciBzdGlja19zdGFydCA9IGdldF9tZW51X2J0bl9wb3MoJy5zdXBlci1uYXZpZ2F0aW9uJyksXG5cdCAgICAkX2JvZHkgPSAkKCdib2R5JyksXG5cdCAgICB3YWl0aW5nID0gZmFsc2U7XG5cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly8gU3RpY2t5IE1lbnVgXG5cdC8vIE92ZXJmbG93IHNob3VsZCBub3QgYmUgYXBwbGllZCBvbiBodG1sLlxuXHRpZiAoaXNfaG9tZSAmJiAhaXNfaG9tZSkge1xuXG5cdFx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIlNjcm9sbGluZyAuLi4gXFxuU2Nyb2xsaW5nLi4uLlwiKVxuXHRcdFx0X3V0aWxpdGllczJbJ2RlZmF1bHQnXS5zY3JvbGxfZXZlbnRfdHJpZ2dlcihfdXRpbGl0aWVzMlsnZGVmYXVsdCddLnN0aWNreV90ZXN0X2FkZCgnc3RpY2t5Jywgc3RpY2tfc3RhcnQpLCAxNTApO1xuXHRcdH0pO1xuXHR9XG5cblx0LyogIFNlYXJjaCBCdXR0b25cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0JCgnLnNlYXJjaC1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdC8vIGFsZXJ0KCdNaW5pIENhcnQgY2xpY2tlZC4nKVxuXHRcdCQoJyNoZWFkZXItc2VhcmNoJykubW9kYWwoJ3Nob3cnKTtcblx0fSk7XG5cblx0Ly8gR2V0IGVsZW1lbnQgaGVpZ2h0IHdpdGggaXRzIG9mZnNldCBwb3NpdGlvblxuXHQvLyBzbyBhY3R1YWwgbG9jYXRpb24gaXMgZGlzY292ZXJlZFxuXHRmdW5jdGlvbiBnZXRfbWVudV9idG5fcG9zKGVsZW0pIHtcblx0XHRyZXR1cm4gJChlbGVtKS5vZmZzZXQoKS50b3AgKyAkKGVsZW0pLmhlaWdodCgpO1xuXHR9XG5cblx0Ly8gRHJvcCBEb3ducyBmb3IgQm9vdHN0cmFwXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0LypcbiAkKCcuX19fZHJvcGRvd24nKS5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKCkge1xuIFx0JCh0aGlzKS5maW5kKCcuZHJvcGRvd24tbWVudScpLmZpcnN0KCkuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZURvd24oKTtcbiB9KTtcbiBcdC8vIEFkZCBzbGlkZVVwIGFuaW1hdGlvbiB0byBCb290c3RyYXAgZHJvcGRvd24gd2hlbiBjb2xsYXBzaW5nLlxuICQoJy5fX19kcm9wZG93bicpLm9uKCdoaWRlLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oKSB7XG4gXHQkKHRoaXMpLmZpbmQoJy5kcm9wZG93bi1tZW51JykuZmlyc3QoKS5zdG9wKHRydWUsIHRydWUpLnNsaWRlVXAoKTtcbiB9KTtcbiAqL1xuXG5cdCQoJy5tYWluLW5hdmlnYXRpb24gLmRyb3Bkb3duJykuaG92ZXIoZnVuY3Rpb24gKCkge1xuXHRcdCQodGhpcykuZmluZCgnLmRyb3Bkb3duLW1lbnUnKS5maXJzdCgpLnN0b3AodHJ1ZSwgdHJ1ZSkuYWRkQ2xhc3MoJ3Nob3ctbWVudScpO1xuXHR9LCBmdW5jdGlvbiAoKSB7XG5cdFx0JCh0aGlzKS5maW5kKCcuZHJvcGRvd24tbWVudScpLmZpcnN0KCkuc3RvcCh0cnVlLCB0cnVlKS5yZW1vdmVDbGFzcygnc2hvdy1tZW51Jyk7XG5cdH0pO1xuXG5cdC8vIEVuYWJsZSBNZW51IGNsaWNrXG5cdCQoJy5tYWluLW5hdmlnYXRpb24gIC5kcm9wZG93bi10b2dnbGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHZhciBsb2NhdGlvbiA9ICQodGhpcykuYXR0cignaHJlZicpO1xuXHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbG9jYXRpb247XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xuXG5cdC8vIFNtYXJ0IFBob25lIE1lbnVcblx0Ly9ATm90ZTogRGVwcmVjYXRlZFxuXHQkKCcubWVudS1jdXJ0YWluIC5kcm9wZG93bi1hcnJvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dmFyICRfdGhpcyA9ICQodGhpcyk7XG5cblx0XHQkX3RoaXMubmV4dCgndWwnKS5zbGlkZVRvZ2dsZSgpO1xuXHRcdGNvbnNvbGUubG9nKCdNZW51IENsaWNrZWQnKTtcblx0fSk7XG5cblx0JCgnLm1lbnUtdG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc29sZS5sb2coJ2NsaWNrZWQgbWVudSB0b2dnbGUnKTtcblx0XHQkKCcubWVudS1jdXJ0YWluJykuYWRkQ2xhc3MoJ3Nob3ctbWVudScpO1xuXHRcdCQoJ2JvZHksIGh0bWwnKS5hZGRDbGFzcygncGhvbmUtbWVudS1vcGVuJyk7XG5cdH0pO1xuXG5cdCQoJy5tZW51LWN1cnRhaW4gLmNtLXRyaWdnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR2YXIgJF90aGlzID0gJCh0aGlzKTtcblx0XHQkX3RoaXMubmV4dCgnLnN1Yi1tZW51LXdyYXBwZXInKS5hZGRDbGFzcygnc2hvdy1tZW51Jyk7XG5cdFx0Y29uc29sZS5sb2coJ01lbnUgQ2xpY2tlZCcpO1xuXHR9KTtcblxuXHQkKCcubWVudS1jdXJ0YWluIC5jdHJsLWdiJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dmFyICRfdGhpcyA9ICQodGhpcyk7XG5cdFx0JF90aGlzLnBhcmVudHMoJy5zdWItbWVudS13cmFwcGVyOmZpcnN0JykucmVtb3ZlQ2xhc3MoJ3Nob3ctbWVudScpO1xuXHR9KTtcblxuXHQkKCcubWVudS1jdXJ0YWluIC5jdHJsLXgnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR2YXIgJF90aGlzID0gJCh0aGlzKTtcblx0XHQkKCcuc2hvdy1tZW51JykucmVtb3ZlQ2xhc3MoJ3Nob3ctbWVudScpO1xuXHRcdCQoJ2h0bWwsYm9keScpLnJlbW92ZUNsYXNzKCdwaG9uZS1tZW51LW9wZW4nKTtcblx0fSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lbnUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnJlcXVpcmUoJy4vanF1ZXJ5Jyk7XG5cbmlmICh4YXNoX3V0aWxpdHkueGFzaERlYnVnKSBjb25zb2xlLmxvZygnVXRpdGxpZXMuanMgTG9hZGVkJyk7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQ3JlYXRlZCBieSB4YWZhUlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQ29weXJpZ2h0IFhBU0hMYWJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBVdGlsaXR5IE1vZHVsZSBpcyBiYXNlZCBvbiBzdGF0aWMgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxudmFyIHV0aWxzID0ge1xuXG5cdC8vIFVzaW5nIG9iamVjdCBkZWZpbmUgZ2xvYmFsbHksIHhhc2hfdXRpbGl0eSB2aWEgbG9jYWxpemVkX3NjcmlwdFxuXHR0aGVtZVVSTDogeGFzaF91dGlsaXR5LnRoZW1lVXJpLFxuXG5cdHNlbGY6IHVuZGVmaW5lZCxcblxuXHQvLyBMb2FkIENTUyBFbGVtZW50LCBpbnN0ZWFkIG9mIHF1ZXVlXG5cdGxvYWRDc3M6IGZ1bmN0aW9uIGxvYWRDc3MocGF0aCwgbG9jYXRpb24pIHtcblx0XHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXHRcdGxvY2F0aW9uID0gbG9jYXRpb24gfHwgXCJoZWFkXCI7XG5cdFx0bGluay50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRcdGxpbmsucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cdFx0bGluay5ocmVmID0gcGF0aDtcblx0XHQkKGxpbmspLmFwcGVuZFRvKCQobG9jYXRpb24pKTtcblx0fSxcblxuXHQvLyBDb25zb2xlIExvZ3MgaW4gZGVidWcgbW9kZVxuXHRkZWJ1Z1ByaW50OiBmdW5jdGlvbiBkZWJ1Z1ByaW50KCkge1xuXHRcdHZhciAkc3RyaW5nID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuXG5cdFx0Y29uc29sZS5sb2coJHN0cmluZyk7XG5cdH0sXG5cblx0bWVudUlzVmlzaWJsZTogZnVuY3Rpb24gbWVudUlzVmlzaWJsZSgpIHtcblx0XHR2YXIgJG1lbnUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG5cblx0XHRyZXR1cm4gJCgkbWVudSkuaXMoXCI6dmlzaWJsZVwiKTtcblx0fSxcblxuXHRnZXRTcGVlZDogZnVuY3Rpb24gZ2V0U3BlZWQoJGVsZSkge1xuXHRcdHJldHVybiBwYXJzZUludCh0aGlzLmdldEF0dHIoJGVsZSwgJ3NwZWVkJykpO1xuXHR9LFxuXG5cdGdldERlbGF5OiBmdW5jdGlvbiBnZXREZWxheSgkZWxlKSB7XG5cdFx0cmV0dXJuIHBhcnNlSW50KHRoaXMuZ2V0QXR0cigkZWxlLCAnZGVsYXknKSk7XG5cdH0sXG5cblx0Z2V0QW5pbWF0aW9uOiBmdW5jdGlvbiBnZXRBbmltYXRpb24oJGVsZSkge1xuXHRcdHJldHVybiAkLnRyaW0odGhpcy5nZXRBdHRyKCRlbGUsICdhbmltJykpO1xuXHR9LFxuXG5cdC8vIFByaXZhdGUgSGVscGVyIGZuXG5cdGdldEF0dHI6IGZ1bmN0aW9uIGdldEF0dHIoJGVsZSwgYXR0ciwgJGRlZmF1bHQpIHtcblx0XHQkZGVmYXVsdCA9ICRkZWZhdWx0IHx8IDE7XG5cdFx0cmV0dXJuICRlbGUuZGF0YShhdHRyKSAhPSB1bmRlZmluZWQgPyAkZWxlLmRhdGEoYXR0cikgOiAkZGVmYXVsdDtcblx0fSxcblxuXHQvLyBBbmltYXRpb24gRnVuY3Rpb25cblx0LyoqXG4gICogQW5pbWF0ZSByZWN1cnNpdmUgb24gY2hpbGQgaXRlbXMgd2hpY2ggaGFzIGNsYXNzIC5kby5hbmltYXRlXG4gICogaWYgcmV2ZXJzYWJsZSBvbiB0aGVuIGl0IHdpbGwgcmV2ZXJzZSBldmVyeXRoaW5nLFxuICAqIEl0cyBjb21iaW5lZCB3aXRoIGZ1bGxwYWdlIGpzICBldGNcbiAgKi9cblxuXHRhbmltYXRlOiBmdW5jdGlvbiBhbmltYXRlKCRwYXJlbnRfZWxlbWVudCkge1xuXHRcdHZhciAkdGFyZ2V0X2VsZW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcuZG8tYW5pbWF0ZSc7XG5cdFx0dmFyICRyZXZlcnNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuXG5cdFx0Ly9cdE5lZWQgdG8gYWRkIGNsYXNzIHdobyBnb3QgZGVsYXkgcGFyYW1lciBsYXRlLlxuXHRcdC8vXHRDaGVjayBEZWxheSBmaXJzdC5cblx0XHQvLyB2YXIgY3VyX2FjdGlvbiA9IGFjdGlvbjtcblxuXHRcdC8vIHJlcGVhdGlvbiBvZiBhbmltYXRpb25cblx0XHQvLyAkKCcuY3VycmVudCcpLmZpbmQoJy5yZXBlYXQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdCQodGhpcykuYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcblx0XHQvLyB9KTtcblxuXHRcdCQoJy5jdXJyZW50JykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKTtcblx0XHQkcGFyZW50X2VsZW1lbnQuYWRkQ2xhc3MoJ2N1cnJlbnQnKTtcblxuXHRcdGNvbnNvbGUubG9nKHRoaXMpO1xuXG5cdFx0JCgkcGFyZW50X2VsZW1lbnQpLmZpbmQoJHRhcmdldF9lbGVtZW50KS5lYWNoKGZ1bmN0aW9uIChrLCB2KSB7XG5cblx0XHRcdHZhciBfdGhpcyA9ICQodGhpcyk7XG5cblx0XHRcdHZhciBfZGVsYXkgPSB1dGlscy5nZXREZWxheShfdGhpcyk7IC8vIHRoaXMuIHNjb3BlIGlzc3VlLCBzbyByZWZlcmluZyBwYXJlbnRcblx0XHRcdHZhciBfYW5pbSA9IHV0aWxzLmdldEFuaW1hdGlvbihfdGhpcyk7XG5cblx0XHRcdC8vIFB1bGwgQmFjayBhbGwgYW5pbWF0aW9uIGlmIHJldmVyc2UgbW9kZSBpcyBvbi5cblx0XHRcdC8vIEBub3RlIG5lZWQgdG8gcmV2ZXJzZSBkZWxheSBhcyB3ZWxsLCBmb3IgYmV0dGVyIGVmZmVjdFxuXHRcdFx0aWYgKCRyZXZlcnNlKSB7XG5cblx0XHRcdFx0aWYgKF9kZWxheSkge1xuXG5cdFx0XHRcdFx0Ly8gdGltZXJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdF90aGlzLnJlbW92ZUNsYXNzKF9hbmltKS5kZWxheSgyMDApO1xuXHRcdFx0XHRcdFx0aWYgKF90aGlzLmhhc0NsYXNzKCdfaW52aXMnKSkge1xuXHRcdFx0XHRcdFx0XHRfdGhpcy5hZGRDbGFzcygnaW52aXNpYmxlJykucmVtb3ZlQ2xhc3MoJ19pbnZpcycpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIF9kZWxheSk7XG5cblx0XHRcdFx0XHQvLyBleGl0LlxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBOb3JtYWwgQW5pbWF0aW9uIFByb2NlZHVyZVxuXHRcdFx0aWYgKF9kZWxheSkge1xuXG5cdFx0XHRcdC8vIHRpbWVyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdF90aGlzLmFkZENsYXNzKF9hbmltKS5kZWxheSgyMDApO1xuXHRcdFx0XHRcdGlmIChfdGhpcy5oYXNDbGFzcygnaW52aXNpYmxlJykpIHtcblx0XHRcdFx0XHRcdF90aGlzLmFkZENsYXNzKCdfaW52aXMnKS5yZW1vdmVDbGFzcygnaW52aXNpYmxlJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCBfZGVsYXkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X3RoaXMucmVtb3ZlQ2xhc3MoX2FuaW0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXG5cdC8vIEFkZGluZyBoZWxwZXIgZnVuY3Rpb24gdGltZW91dHMgdG8gc2Nyb2xsIGV2ZW50IGZuLFxuXHQvLyB0byBtYWtlIHNjcm9sbCBiaXQgc21vb3RoZXIuXG5cdHNjcm9sbF9ldmVudF90cmlnZ2VyOiBmdW5jdGlvbiBzY3JvbGxfZXZlbnRfdHJpZ2dlcihmbiwgdGltZW91dCkge1xuXHRcdHZhciB3YWl0aW5nID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuXG5cdFx0Ly8gbWFraW5nIGl0IGxvY2FsXG5cdFx0dmFyIF93YWl0aW5nID0gd2FpdGluZztcblxuXHRcdGlmIChfd2FpdGluZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHZhciBfdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRmbjtcblx0XHRcdFx0X3dhaXRpbmcgPSB0cnVlO1xuXHRcdFx0fSwgdGltZW91dCk7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuICAqIFNjcm9sbCB0byBhbnkgZWxlbWVudFxuICAqIEB0b2RvLCBOZWVkIHRvIGFkZCBlYXNpbmdcbiAgKiAqL1xuXHRzY3JvbGxfdG9fZWxlbWVudDogZnVuY3Rpb24gc2Nyb2xsX3RvX2VsZW1lbnQoZWxlbSkge1xuXHRcdHZhciBzcGVlZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTAwMDtcblx0XHR2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG5cdFx0dmFyIGVhc2luZyA9IGFyZ3VtZW50c1szXTtcblxuXHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcblx0XHRcdHNjcm9sbFRvcDogJChlbGVtKS5vZmZzZXQoKS50b3Bcblx0XHR9LCB7XG5cdFx0XHRkdXJhdGlvbjogc3BlZWQsXG5cdFx0XHRjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG5cdFx0XHRcdGlmICgkLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXG5cdC8vIGFkZCBjbGFzcyBzdGlja3kgYmFzZWQgb24gc2Nyb2xsIHZhbHVlLlxuXHRzdGlja3lfdGVzdF9hZGQ6IGZ1bmN0aW9uIHN0aWNreV90ZXN0X2FkZChjbGFzc05hbWUsIGxpbWl0KSB7XG5cdFx0dmFyICRfYm9keSA9ICQoJ2JvZHknKTtcblxuXHRcdGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiBsaW1pdCkge1xuXHRcdFx0JF9ib2R5LmFkZENsYXNzKGNsYXNzTmFtZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRfYm9keS5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuXHRcdH1cblx0fSxcblxuXHQvKiAgQWRkIHRvIENhcnQgTWVzc2FnZS5cbiAgVGVtcCBzb2x1dGlvbiwgdGlsbCBmaW5kIGdvb2Qgd2F5IHRvIGhhbmRsZSBieSB3b29jb21tZXJjZVxuICB0cmljayBpcyB0byBjaGVjayBjYXJ0IGl0ZW0gbnVtYmVyIGJlZm9yZSBhbmQgYWZ0ZXJcbiAgKi9cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cdGdldF9jYXJ0X2l0ZW1fbnVtYmVyOiBmdW5jdGlvbiBnZXRfY2FydF9pdGVtX251bWJlcihlbGVtKSB7XG5cdFx0cmV0dXJuIHBhcnNlSW50KCQoZWxlbSkudGV4dCgpLnNwbGl0KCcgJylbMF0pO1xuXHR9LFxuXG5cdC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0Ly8gIEdlbmVyYXRlIEJvb3RzdHJhcCBwb3B1cCBpbiBmb290ZXIgZHluYW1pY2FsbGx5XG5cdC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0Z2VuZXJhdGVNb2RhbDogZnVuY3Rpb24gZ2VuZXJhdGVNb2RhbChwbGFjZW1lbnRJZCwgaGVhZGluZywgZm9ybUNvbnRlbnQpIHtcblx0XHR2YXIgdGltZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDA7XG5cdFx0dmFyIHN0clN1Ym1pdEZ1bmMgPSBhcmd1bWVudHNbNF07XG5cdFx0dmFyIGJ0blRleHQgPSBhcmd1bWVudHNbNV07XG5cblxuXHRcdHN0clN1Ym1pdEZ1bmMgPSBzdHJTdWJtaXRGdW5jIHx8IG51bGw7XG5cdFx0aGVhZGluZyA9IGhlYWRpbmcgfHwgbnVsbDtcblxuXHRcdHZhciBodG1sID0gJzxkaXYgaWQ9XCJtb2RhbFdpbmRvd1wiIGNsYXNzPVwibW9kYWwgZmFkZSBcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiPic7XG5cdFx0aHRtbCArPSBcIjxkaXYgY2xhc3M9J21vZGFsLWRpYWxvZyc+PGRpdiBjbGFzcz0nbW9kYWwtY29udGVudCc+XCI7XG5cdFx0aHRtbCArPSAnPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPic7XG5cdFx0aHRtbCArPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L2J1dHRvbj4nO1xuXG5cdFx0aWYgKGhlYWRpbmcgIT0gbnVsbCkge1xuXHRcdFx0aHRtbCArPSAnPGgzPicgKyBoZWFkaW5nICsgJzwvaDM+Jztcblx0XHR9XG5cdFx0aHRtbCArPSAnPC9kaXY+JztcblxuXHRcdC8vaHRtbCArPSAnPHA+Jztcblx0XHRodG1sICs9ICc8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPic7XG5cdFx0aHRtbCArPSBmb3JtQ29udGVudDtcblx0XHRodG1sICs9ICc8L2Rpdj4nO1xuXG5cdFx0aWYgKGJ0blRleHQgIT0gJycgJiYgc3RyU3VibWl0RnVuYyAhPSBudWxsKSB7XG5cdFx0XHRodG1sICs9ICc8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+Jztcblx0XHRcdGh0bWwgKz0gJzxzcGFuIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCInO1xuXHRcdFx0aHRtbCArPSAnIG9uQ2xpY2s9XCInICsgc3RyU3VibWl0RnVuYyArICdcIj4nICsgYnRuVGV4dDtcblx0XHRcdGh0bWwgKz0gJzwvc3Bhbj4nO1xuXHRcdFx0aHRtbCArPSAnPHNwYW4gY2xhc3M9XCJidG5cIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPic7XG5cdFx0XHRodG1sICs9ICdDbG9zZSc7XG5cdFx0XHRodG1sICs9ICc8L3NwYW4+JzsgLy8gY2xvc2UgYnV0dG9uXG5cdFx0XHRodG1sICs9ICc8L2Rpdj4nOyAvLyBmb290ZXJcblx0XHR9XG5cdFx0aHRtbCArPSAnPC9kaXY+PC9kaXY+JzsgLy8gbW9kYWxDb250ZW50XG5cdFx0aHRtbCArPSAnPC9kaXY+JzsgLy8gbW9kYWxXaW5kb3dcblxuXHRcdCQoaHRtbCkuYXBwZW5kVG8ocGxhY2VtZW50SWQpO1xuXHRcdC8vICQoIHBsYWNlbWVudElkICkuaHRtbChodG1sKTtcblx0XHQkKFwiI21vZGFsV2luZG93XCIpLm1vZGFsKCdzaG93Jyk7XG5cblx0XHR2YXIgX3RpbWVyX2RpYWxvZyA9IG51bGw7XG5cblx0XHQvLyBpZiBUaW1lciBpcyBPblxuXHRcdGlmICh0aW1lcikge1xuXHRcdFx0X3RpbWVyX2RpYWxvZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdCQoJyNtb2RhbFdpbmRvdycpLm1vZGFsKCdoaWRlJyk7XG5cdFx0XHR9LCB0aW1lcik7XG5cdFx0fVxuXG5cdFx0JCgnI21vZGFsV2luZG93Jykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRjbGVhclRpbWVvdXQoX3RpbWVyX2RpYWxvZyk7XG5cdFx0fSk7XG5cdH0sXG5cblx0Ly89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQvLyAgR2VuZXJhdGUgU1ZHIGZyb20gU1ZHIEltZyBlbGVtZW50XG5cdC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0bWFrZVNWRzogZnVuY3Rpb24gbWFrZVNWRyhlbGUpIHtcblxuXHRcdGVsZSA9IGVsZSB8fCAnaW1nLnN2Zy1pbXBvcnQnO1xuXHRcdGpRdWVyeShlbGUpLmVhY2goZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR2YXIgJGltZyA9IGpRdWVyeSh0aGlzKTtcblx0XHRcdHZhciBpbWdJRCA9ICRpbWcuYXR0cignaWQnKTtcblx0XHRcdHZhciBpbWdDbGFzcyA9ICRpbWcuYXR0cignY2xhc3MnKTtcblx0XHRcdHZhciBpbWdVUkwgPSAkaW1nLmF0dHIoJ3NyYycpO1xuXHRcdFx0Y29uc29sZS5sb2coJ0NvbnZlcnRpbmcgc3Zncy4uLicgKyBpbWdDbGFzcyk7XG5cblx0XHRcdGpRdWVyeS5nZXQoaW1nVVJMLCBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHQvLyBHZXQgdGhlIFNWRyB0YWcsIGlnbm9yZSB0aGUgcmVzdFxuXHRcdFx0XHR2YXIgJHN2ZyA9IGpRdWVyeShkYXRhKS5maW5kKCdzdmcnKTtcblxuXHRcdFx0XHQvLyBBZGQgcmVwbGFjZWQgaW1hZ2UncyBJRCB0byB0aGUgbmV3IFNWR1xuXHRcdFx0XHRpZiAodHlwZW9mIGltZ0lEICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdCRzdmcgPSAkc3ZnLmF0dHIoJ2lkJywgaW1nSUQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEFkZCByZXBsYWNlZCBpbWFnZSdzIGNsYXNzZXMgdG8gdGhlIG5ldyBTVkdcblx0XHRcdFx0aWYgKHR5cGVvZiBpbWdDbGFzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHQkc3ZnID0gJHN2Zy5hdHRyKCdjbGFzcycsIGltZ0NsYXNzICsgJyByZXBsYWNlZC1zdmcnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJlbW92ZSBhbnkgaW52YWxpZCBYTUwgdGFncyBhcyBwZXIgaHR0cDovL3ZhbGlkYXRvci53My5vcmdcblx0XHRcdFx0JHN2ZyA9ICRzdmcucmVtb3ZlQXR0cigneG1sbnM6YScpO1xuXG5cdFx0XHRcdC8vIENoZWNrIGlmIHRoZSB2aWV3cG9ydCBpcyBzZXQsIGVsc2Ugd2UgZ29ubmEgc2V0IGl0IGlmIHdlIGNhbi5cblx0XHRcdFx0aWYgKCEkc3ZnLmF0dHIoJ3ZpZXdCb3gnKSAmJiAkc3ZnLmF0dHIoJ2hlaWdodCcpICYmICRzdmcuYXR0cignd2lkdGgnKSkge1xuXHRcdFx0XHRcdCRzdmcuYXR0cigndmlld0JveCcsICcwIDAgJyArICRzdmcuYXR0cignaGVpZ2h0JykgKyAnICcgKyAkc3ZnLmF0dHIoJ3dpZHRoJykpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVwbGFjZSBpbWFnZSB3aXRoIG5ldyBTVkdcblx0XHRcdFx0JGltZy5yZXBsYWNlV2l0aCgkc3ZnKTtcblx0XHRcdH0sICd4bWwnKTtcblx0XHR9KTtcblx0fVxuXG59OyAvLyB1dGlsc1xuXG5cbi8vIEV4cG9ydHMgTW9kdWxlXG5leHBvcnRzWydkZWZhdWx0J10gPSB1dGlscztcbi8vIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbGl0aWVzLmpzLm1hcFxuIl19
