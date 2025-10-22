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
//# sourceMappingURL=menu.js.map
