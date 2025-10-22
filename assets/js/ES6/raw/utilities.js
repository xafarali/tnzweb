/**
 * Created by xafaR
 * Copyright XASHLabs
 * Utility Module is based on static functions
 */

import './jquery';

if( xash_utility.xashDebug ) console.log('Utitlies.js Loaded');

var utils = {

		// Using object define globally, xash_utility via localized_script
		themeURL: xash_utility.themeUri,

		self : this,


		// Load CSS Element, instead of queue
		loadCss: function (path, location) {
			var link = document.createElement("link");
			location = location || "head"
			link.type = "text/css";
			link.rel = "stylesheet";
			link.href = path;
			$(link).appendTo($(location));
		},



		// Console Logs in debug mode
		debugPrint : function ($string = null ) {
			console.log( $string );
		},





		menuIsVisible: function ($menu = null) {
			return $($menu).is(":visible");
		},




		getSpeed: function ($ele) {
			return parseInt(this.getAttr($ele, 'speed'));
		},




		getDelay: function ($ele) {
			return parseInt( this.getAttr($ele, 'delay'));
		},




		getAnimation: function ($ele) {
			return ($.trim( this.getAttr($ele, 'anim' ) ) )
		},


		// Private Helper fn
		getAttr: function ($ele, attr, $default) {
			$default = $default || 1;
			return  $ele.data(attr) != undefined ? $ele.data(attr) : $default ;
		},




		// Animation Function
		/**
		 * Animate recursive on child items which has class .do.animate
		 * if reversable on then it will reverse everything,
		 * Its combined with fullpage js  etc
		 */

		animate: function ( $parent_element, $target_element = '.do-animate', $reverse = false ) {

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

			$( $parent_element ).find( $target_element ).each( function (k, v) {

				var _this = $(this);

				var _delay = utils.getDelay(_this); // this. scope issue, so refering parent
				var _anim = utils.getAnimation(_this);


				// Pull Back all animation if reverse mode is on.
				// @note need to reverse delay as well, for better effect
				if ( $reverse ) {

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
						if( _this.hasClass('invisible') ) {
							_this.addClass('_invis').removeClass('invisible');
						}
					}, _delay );

				} else {
					_this.removeClass(_anim);
				}


			})

		},







		// Adding helper function timeouts to scroll event fn,
		// to make scroll bit smoother.
		scroll_event_trigger:	function  ( fn , timeout , waiting = false ) {

			// making it local
			let _waiting  = waiting ;

			if ( _waiting ) {
				return
			}

			else {

				let _timer = setTimeout( function () {

					fn;
					_waiting = true;

				}, timeout );
			}
		},




		/**
		 * Scroll to any element
		 * @todo, Need to add easing
		 * */
		scroll_to_element: function  ( elem , speed = 1000 , callback = null, easing ) {
			$('html, body').animate({
				scrollTop: $(elem).offset().top
			}, {
				duration : speed,
				complete: function () {
					if ( $.isFunction( callback ) ) {
						callback();
					}
				}
			} );
		},





		// add class sticky based on scroll value.
		sticky_test_add: function  ( className, limit ) {
			let $_body = $('body');

			if ( $(window).scrollTop() > limit ) {
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
		get_cart_item_number: function  (elem) {
			return parseInt( $(elem).text().split(' ')[0] );
		},




		//=========================================================================
		//=========================================================================
		//  Generate Bootstrap popup in footer dynamicallly
		//=========================================================================
		//=========================================================================
		generateModal: function ( placementId, heading , formContent, timer = 0, strSubmitFunc, btnText ) {

			strSubmitFunc = strSubmitFunc || null;
			heading = heading || null;

			var html =  '<div id="modalWindow" class="modal fade " style="display:none;" tabindex="-1" role="dialog">';
			html += "<div class='modal-dialog'><div class='modal-content'>";
			html += '<div class="modal-header">';
			html += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';

			if( heading != null ) {
				html += '<h3>'+ heading +'</h3>';
			}
			html += '</div>';

			//html += '<p>';
			html += '<div class="modal-body">';
			html += formContent;
			html += '</div>';

			if ( btnText!='' && strSubmitFunc != null ) {
				html += '<div class="modal-footer">';
				html += '<span class="btn btn-success"';
				html += ' onClick="' +  strSubmitFunc + '">' + btnText;
				html += '</span>';
				html += '<span class="btn" data-dismiss="modal">';
				html += 'Close';
				html += '</span>'; // close button
				html += '</div>';  // footer
			}
			html += '</div></div>';  // modalContent
			html += '</div>';  // modalWindow

			$(html).appendTo( placementId );
			// $( placementId ).html(html);
			$("#modalWindow").modal('show');

			let _timer_dialog = null;

			// if Timer is On
			if ( timer ) {
				_timer_dialog = setTimeout( function () {

					$('#modalWindow').modal('hide');

				}, timer );
			}

			$('#modalWindow').on('hidden.bs.modal', function () {
				$(this).remove();
				clearTimeout( _timer_dialog );
			})
		},




	//=========================================================================
	//=========================================================================
	//  Generate SVG from SVG Img element
	//=========================================================================
	//=========================================================================
	makeSVG: function (ele) {

			ele = ele || 'img.svg-import';
        	jQuery(ele).each(function() {

            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
            console.log('Converting svgs...' + imgClass);


            jQuery.get(imgURL, function(data) {
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
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });
    }


} ; // utils


// Exports Module
export default utils;
// });
