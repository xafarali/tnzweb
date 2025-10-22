'use strict';

require('./jquery');

var _utilities = require('./utilities');

var _utilities2 = _interopRequireDefault(_utilities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Created by xafaR.
 * Copyright sepiasoltuions
 * All WooCom related functions
 */
jQuery(document).ready(function ($) {

	/*  Cart Button
  //--------------------------------------------------*/
	$('body').on('click', 'a._cart-button', function (e) {

		e.preventDefault();
		$('body').addClass('woocommerce');
		$('#modal-minicart').modal('show');

		return false;
	});

	/*  Search Button
  //--------------------------------------------------*/

	$('.sec-menu-container a.search-btn').on('click', function (e) {
		e.preventDefault();

		// alert('Mini Cart clicked.')
		$('#header-search').modal('show');
	});

	//=========================================================================
	//=========================================================================
	//  Cart Message
	//=========================================================================
	//=========================================================================

	/**
  * Message shows in BS Popup, if CART is updated,
  * Grabs current item cart frm html, checks from incoming...
  * checks title of product from LI.
  * @uses wc_add_to_cart_params JS object
  *  cart_redirect_after_add :  "no"
  *	cart_url:"http://local.rangoli"
  *	i18n_view_cart	 : "View cart"
  * @uses cookie : show-notice
  *
  * */

	var wc_params = window.wc_add_to_cart_params,
	    btn_continue_shop = "<a href='#' class='continue-shop-ajax btn'>Continue Shopping</a>",
	    btn_view_cart = '<a href=\'' + wc_params.cart_url + '\' class=\'viewcart-shop-ajax btn\'>' + wc_params.i18n_view_cart + '</a>';

	// If cart redirect is off. and cookie doesnt exist.
	if (wc_params.cart_redirect_after_add == "no") {

		var _product_title = void 0,
		    _thumb_img = null;
		var _cart_item_elem = $('.cart-num');
		var current_items = _utilities2['default'].get_cart_item_number(_cart_item_elem);

		$('body').on('adding_to_cart', function (e, data) {

			// data is event trigger, a in this case
			console.clear();
			console.log(e);
			console.log(data);
			current_items = _utilities2['default'].get_cart_item_number('.cart-num');

			// Grab Title.
			var _trigger_elem = $(data[0]).parents('li');
			_product_title = $.trim(_trigger_elem.find('.woocommerce-loop-product__title').text());

			// Grab Thumb
			_thumb_img = _trigger_elem.find('img.wp-post-image').attr('src');

			$('body').addClass('modal-open ajax-loader');
		}); // adding to cart


		$('body').on('added_to_cart', function (e, data) {
			//console.log('====================================================\n');
			//console.log(e);
			//console.log(data);


			// Old Cart...
			var old_cart_num = current_items;

			// cart item number return from woocom
			var $target_cart = $(data['a._cart-button']).find('.cart-num');

			// Get latest cart number to compare.
			current_items = _utilities2['default'].get_cart_item_number($target_cart);

			var notice_msg = "";

			if (window.Cookies.get('hideCartMsg') == 0 || window.Cookies.get('hideCartMsg') == 'undefined') {
				notice_msg = '<p>Would you like to ' + btn_continue_shop + ' or ' + btn_view_cart + '</p>';
			}

			// Main message
			var cart_item_message = '<div class=\'woocommerce-message\'>\n\t\t\t\t\t\t<div class="row-table">\n\t\t\t\t\t\t\t<div class="col-md-4 hide-device">\n\t\t\t\t\t\t\t\t<a href="#" style="width: 100px;"><img src="' + _thumb_img + '" class="media-object" width="100"/></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="col-md-8">\n\t\t\t\t\t\t\t\t<p class="lead"><strong>' + _product_title + '</strong> <br/>has been added to cart</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>';
			cart_item_message += notice_msg;

			// alert( old_cart_num + ',' + current_items);


			// current is new one, now.
			//-----------------------------------------------------
			if (current_items > old_cart_num) {

				// Success
				// Generate Boostrap Message
				_utilities2['default'].generateModal('#footer', "Item Added", cart_item_message, 2500);
			} else {
				alert('Something went wrong, please reload page');
			}

			$('body').removeClass('modal-open');
		});
	}

	/**
  * Setup a cookie on continue shopping ..
  * */
	$('body').on('click', 'a.continue-shop-ajax', function (e) {

		e.preventDefault();
		window.Cookies.set('hideCartMsg', 1, {
			expires: 1,
			path: '/'
		});
	});

	//-----------------------------------------------------------
	//  Quantity Controller
	//-----------------------------------------------------------
	$('body').on('click', '.qty-ctrl td.btn-add', function (e) {

		e.preventDefault();
		var qty_input = $(this).prev('td').find(' input.qty ');
		qty_input.val(parseInt(qty_input.val()) + 1);

		$('td.actions input[type="submit"]').removeAttr('disabled');
	});

	$('body').on('click', '.qty-ctrl td.btn-remove', function (e) {

		e.preventDefault();
		var qty_input = $(this).next('td').find(' input.qty ');

		if (qty_input.val() != 0) {
			qty_input.val(Math.abs(qty_input.val() - 1));
			$('td.actions input[type="submit"]').removeAttr('disabled');
		}
	});
});
//# sourceMappingURL=woocom.js.map
