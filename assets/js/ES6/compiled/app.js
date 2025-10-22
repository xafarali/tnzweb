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
//# sourceMappingURL=app.js.map
