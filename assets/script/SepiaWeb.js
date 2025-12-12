(function ($) {
    $(document).ready(function () {
        
        
    });

    function Update(RecId, Action, Subscribe) {

        $.ajax({
            url: "/Update/",
            data: { RecId: RecId, Act: Action, Flag: Subscribe },
            type: "GET",
            dataType: "json",
            //success: function (response) {
            //},
            //error: function () {
            //    console.log("Internal server error!");
            //}
        });
    }
})(jQuery);


jQuery(document).ready(function ($) {
    "use strict"; // Start of use strict

    var c_lang = $('html').attr('lang');

    $.noConflict();
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });


    //=======================================================================
    // Temp phone tester via menu button
    //=======================================================================
    checkPhone();

    $(window).on('resize', function () {
        checkPhone();
    });


    // // Highlight the top nav as scrolling occurs
    // $('_body').scrollspy({
    // 	target: '.navbar-fixed-top',
    // 	offset: 51
    // })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });


    // Offset for Main Navigation
    /*
     $('#mainNav').affix({
         offset: {
             top: 100
         }
     })
     */


    //----------------------------------------------------------------------
    // Main Menu Toggle
    $('.btn-menu').on('click', function (e) {
        
        e.preventDefault()

        // TRIGGER CUSTOM EVENT
        

        if (!$('body').hasClass('menu-visible')) {
            // TRIGGER CUSTOM EVENT
            $('body').trigger('event-menu-open')
            // $('.navigation ').find('.active-menu').removeClass('active-menu');
        } else {
            $('body').trigger('event-menu-close');
            //$('body').addClass('menu-visible');    
        }

    });
    $('.menu-burger').on('click', function (e) {
        $('body').trigger('event-menu-close');
    })


    //// Sticky Menu
    //if ($('.btn-menu').is(":hidden")) {

    //    var _mn = $('.super-navigation.main-navigation'),
    //        _offset = _mn.offset().top;
    //    $(window).on('scroll', function (e) {



    //        if ($(window).scrollTop() >= _offset) {

    //            _mn.addClass('fixed');
    //            $('body').css('margin-top', _mn.height());

    //        } else {

    //            _mn.removeClass('fixed');
    //            $('body').css('margin-top', 0);

    //        }

    //    });
    //}



    // Employee Login Button in Mobile Menu
    if ($("body").hasClass('mobile-app')) {
        $('.btn-menu-employee').on('click', function (e) {
            $(this).next('.tab-flat').toggleClass('active');
        })
    }

    // Menu Switch for Mobile/Employee Sectin
    // Adds on load 2 menu items
    // ---------------------------------------------------------
    var _tmpMenuItems = $('#navigation-top .super-menu > ul > li').clone();
    _tmpMenuItems.addClass('hide-desktop vp-menu');
    _tmpMenuItems.insertAfter('.navigation.top-main-menu li.home');
    $("<div/ class='clearfix hide-desktop'>").insertAfter(_tmpMenuItems.last());

    $('.navigation.top-main-menu').find('div.dropdown > *').unwrap();





    // Toggle Menu fix
    $('.navigation .dropdown-menu').each(function () {
        var $a_tag = $(this).prev('a');
        $a_tag.addClass('dropdown-toggle');
        $('<span class="caret"></span>').appendTo($a_tag);
        $(this).parent('li').addClass('dropdown');
    });

    $('body').on('click', '.caret, span.menu-close', function (e) {
        console.log($(e.target).text());
        $(this).parents('li.dropdown').first().toggleClass('active-menu');
    });









    //=============================================================================
    // Select/Input Navigation
    //=============================================================================
    var nav_host = window.location.origin;

    $('div.nav-wrap select, #cat-filter, .jumpmenu').on('change', function (e) {

        var $_t = $(this);

        var nav_val = $_t.val();

        // temp prefix

        console.log(nav_val);
       // window.location = nav_host + nav_val;
    });



    //---------------------------------------------------

    //---------------------------------------------------
    // Tab filters
    //---------------------------------------------------
    $('.filter-btn-area .btn').on('click', function (e) {
        var _trgTab = "." + $(this).attr('data-target');

        $('.tab-filters').addClass('not-active');
        $(_trgTab).removeClass('not-active');
    });



    // Profile Tabs
    //  -------------------------------------------------------
    /**
     *
     Adds active class to current tab based on slug
     */
    if ($('.tab-flat').length && $('.tab-flat li').length > 1) {
        var _cur_loc = window.location.pathname;

        $('.tab-flat li').each(function (i, v) {
            var _cur_href = $('a', this).attr('href');

            if ($.trim(_cur_href) == $.trim(_cur_loc)) {
                $(this).addClass('active');
            }
        });
    }




    //============================================================
    //============================================================
    // General Tabs
    //============================================================
    //============================================================
    if ($('.tab-container').length) {

        // If target attr missing
        // go for href attr




        // By default Tab active
        var c_tab = $('.tab-trigger li[data-lang="' + c_lang + '"]');


        if (c_tab.length) {
            c_tab.addClass('active');

            var tab_tgt = $('a.tab-link', c_tab).attr('href');
            $('.tab-content').hide();
            $(tab_tgt).show();
        }


        $('.tab-container .tab-link').on('click', function (e) {
            e.preventDefault();

            var tab_tgt = $(this).attr('href');
            $('.tab-trigger li').removeClass('active');
            $(this).parents('li').addClass('active');

            $('.tab-content').hide();
            $(tab_tgt).show();
        })

    }









    if ($('.slider-wrapper').length) {

        $('.slider-wrapper .banner-content-wrapper').not(':first-child').addClass('anim-section');

        // CHeck switches

        var dyn_dots,
            custom_nav = $.trim( $('.slider-wrapper').attr('data-custom-slide') ),
            as_nav_ctrl = null;


        // set up custom nav
        if (  custom_nav   ) {
            dyn_dots = false;
            var as_nav_for = $(custom_nav),
                nav_parent = $.trim( $('.slider-wrapper').attr('data-slide-parent') );
                // child thumb based
                as_nav_ctrl = as_nav_for;

        } else {
            dyn_dots = true
        }

        // SLICK IS DISABLED FOR NOW
        // $('.__DEPRICATED_code_need_toslider-wrapper').slick({
        //     prevArrow: '<button type="button" class="slick-prev"></button>',
        //     nextArrow: '<button type="button" class="slick-next"></button>',
        //     autoplay: true,
        //     fade: true,
        //     autoplaySpeed: 4000,
        //     //waitForAnimate: true,
        //     dots: dyn_dots,
        //     asNavFor : as_nav_ctrl

        // });

        // if custom nav exists
        if (  $(custom_nav).length   ) {

            $(as_nav_ctrl).slick( {
                asNavFor : nav_parent,
               // dots: false,
                slidesToShow: 4,
                slidesToScroll: 1,
            });

            // custom click

            $('.cc-pager').find('li').on('click', function (e) {
                //$(this).css('backgroundColor','green')
                var __sld_index = $(this).attr('data-slick-index');
                //alert(__sld_index);
                $(nav_parent).slick('slickGoTo', __sld_index)
            })



        }


        // Events
        $('.slider-wrapper').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var sld = currentSlide + 1
            $('.slider-wrapper .banner-content-wrapper').addClass('anim-section');
            // $('.slider-wrapper .banner-content-wrapper[data-slick-index=' + nextSlide + ']').addClass('anim-section');


        });


        $('.slider-wrapper').on('afterChange', function (event, slick, currentSlide) {
            var sld = currentSlide + 1
            $('.slider-wrapper .banner-content-wrapper[data-slick-index=' + currentSlide + ']').removeClass('anim-section');
        });



    }





    // ===========================================================================
    // MEDIA GALLERY MODULE
    // ===========================================================================
    // Detail Galelry page:
    //---------------------------------
    if ($('.media-detail .gallery-detail').length) {
        $('.media-detail .gallery-detail').slick({
            // slidesToShow: 3,
            // slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            fade: true,
            asNavFor: '.thumb-area',
            // vertical: true
        });



        $('.media-detail .gallery-thumb').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            fade: false,
            asNavFor: '.gallery-detail',
            vertical: true,
            centerMode: true,
        });
    }

    // Media Archive:
    //-----------------------------------------
    if ($('.media-archive .gallery-detail').length) {

        $('.media-archive .gallery-detail').slick({
            // slidesToShow: 3,
            // slidesToScroll: 1,
            //arrows: false,
            autoplay: true,
            fade: true,
            // asNavFor: '.thumb-area',
            // vertical: true
        });

        $('.media-archive .gallery-detail').on('beforeChange', function (s, c, o, d) {
            //console.log( $('li.active',
            var $parent = $(s.currentTarget),
                _sld_ind = parseInt(d), // $parent.find('li.slick-active').data('slick-index'),
                $parent_thumb = $parent.parents('.media-gallery-wrap').find('.gallery-thumb');

            $parent_thumb.find('li.active').removeClass('active');
            var $li_ele = $('li:eq(' + _sld_ind + ')', $parent_thumb);
            $li_ele.addClass('active');
            //console.log('gallery', s, c, d );

        });

        // Navigator for
        $('.media-archive .gallery-thumb li').on('click', function () {
            var $_t = $(this),
                ind = $(this).index(),
                target_slider = $_t.parents('.media-gallery-wrap').find('.gallery-detail');


            /// trigger
            target_slider.slick('goTo', parseInt(ind));

            // console.log('pager' , ind);

        });


    }



    //----------------------------------------------------------------------
    //--------------------- SLick General/Global Slider
    if ($('.___section-slider').length) {


        var $_thumb_ctrl = '',
            num_slides = $('.section-slider').attr('data-slide') ? parseInt($('.section-slider').attr('data-slide')) : 3,
            num_slides_phone = $('.section-slider').attr('data-slide-phone') ? parseInt($('.section-slider').attr('data-slide-phone')) : 1,
            num_slides_tablet = $('.section-slider').attr('data-slide-tablet') ? parseInt($('.section-slider').attr('data-slide-tablet')) : 2,
            num_slides = parseInt(num_slides),

            breakpoint = {
                num_dsk: num_slides,
                num_tbl: num_slides_tablet,
                num_phn: num_slides_phone,
                res_phn: 768,
                res_tbl: 1024
            }

        // check if got thumb controller
        if ($.trim($('.section-slider').attr('data-thumb')) != '') {
            $_thumb_ctrl = $('.section-slider').attr('data-thumb');


            if (!$($_thumb_ctrl).length) {
                $_thumb_ctrl = null;
            }
        }





        $('.section-slider').slick({
            slidesToShow: breakpoint.num_dsk,
            autoplay: true,
            asNavFor: $_thumb_ctrl,
            // mobileFirst:true,
            // vertical: true

            responsive: [
                {
                    breakpoint: breakpoint.res_tbl,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '30px',
                        slidesToShow: breakpoint.num_tbl
                    }
                },{
                    breakpoint: breakpoint.res_phn,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '30px',
                        slidesToShow: breakpoint.num_phn
                    }
                }
            ]
        });





    }







    //============================================================================
    //== SLICK ENDS             ==================================================
    //============================================================================




   //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    // NEWSLETTER SUBMISSION ---------------------------------------------------
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    if ($('.form-newsletter').length) {

        var form = $('.form-newsletter'),
            field = $('.txt-email', form);



        field.on('focus', function () {
            $('.notify-box').fadeOut();
        });


        form.on('submit', function (e) {

            e.preventDefault();

            var form_data = $.trim(field.val()),
                url = form.attr('action'),
                data = form.serialize();

            if (validateEmail(form_data)) {
                $.ajax({
                    url: url,
                    type: 'POST',
                    data: data,
                    dataType: 'json',

                }).done(function (response) {
                    console.log(response);

                    if (response.isSuccess == true) {
                        showResponse(1, "Thank You For Subscribing");
                    }
                    else {
                        showResponse(3, response.result);
                    }
                });
            }

            else {
                showResponse(2, "Please enter valid email address");
            }


        });

        field.on('focus', function () {
            $('.notify-box').fadeOut();
        })

    }




    

    function validate_field(element) {

        var type_element = typeof (element).is('input') ? 'input' : 'div',
            has_error = false;

        if ('input' != type_element) {

            $('.men', element).each(function () {

                if ($.trim($(this).val()) == "") {
                    $(this).parent('.form-group').addClass('has-error');
                    has_error = true;
                }
            });

        } else {

            $('.men, input[required]').each(function (i, v) {
                if ($.trim($(this).val()) == "") {
                    $(this).addClass('has-error');
                    has_error = true;
                }
            });
        }






        return has_error ? false : true;
    }



    // Validate Email.
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }





    $('body').on('keypress', '.has-error input', function () {
        $(this).parent().removeClass('has-error');
    })



    //----------------------------------------------------------------------------
    // img to svg import
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    // img to svg import
    //----------------------------------------------------------------------------
    // DISABLED HERE.. IMPLEMETED IN MODULE
    var $__tmp_svg_length = $('._disabled_svg-import').length;

    if ( $__tmp_svg_length > 0 ) {

        $('img.svg-import').each(function (i, v) {

            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.is('img') ? $img.attr('src') : $img.attr('data-src');

            console.log('Converting svgs...' + imgClass);

            $.ajaxSetup({
                //cache: false
            });

            $.get( imgURL, function (data) {

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
                // $svg = $svg.removeAttr('xmlns:a').removeAttr('id');


                // Check if the viewport is set, else we gonna set it if we can.
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml').done(function () {

                // console.log(i ,( $__tmp_svg_length - 1) );
                if ( i == ( $__tmp_svg_length - 1) ) {

                    console.log(':::Looping:::' + i );

                    $('body').trigger('svgImported');

                }
            });


            // Create Custom Event for svg import in case some animation is needed after it
            // Loop is finished, trigger event


        });

    }

    else  {
        // In case no SVG exist on page
        //@TODO, this need to be fixed, if svg is not imported, code in mainJS isnt triggering for some reason
        //$('body').trigger('svgImported');
        console.log('SVG Doesnt exist, so by bypassed:: svgImported Inovked');

    }



    $('body').on('svgReady', function (e,v) {
        console.log( "content loaded");
    });



    // Contact Slider
    $(".btn-wrapper .contact-list button").on('click', function (e) {

        e.preventDefault();


        if ($(this).hasClass('active')) {

            $('.btn-wrapper').find('.active').removeClass('active');

            //$(this).removeClass('active').next().removeClass('active');
        }
        else {
            $('.btn-wrapper').find('.active').removeClass('active');
            $(this).addClass('active').next().addClass('active');
        }
    });


    function checkPhone() {

        var is_phone = $('.footer .dv-device').is(":visible") ? true : false;

        if (is_phone) {
            $('body').addClass('is-phone');
        } else {
            $('body').removeClass('is-phone');
        }

    }


    // Location Loader

    if ($('.user-location').length) {
        GetLocations();
        $(".user-location").on('change', function (e) {
            $('.user-locationid').find('option').remove().end();
            GetLocations();
        });
    }

    function GetLocations() {
        var LocationSel = $(".user-location");
        var LocationVal = $("option:selected", LocationSel).val();

        if (LocationVal != null && LocationVal != '') {
            LocationSel.addClass('ajax-loader');
            $.ajax({
                url: "/" + c_lang + "/User/GetLocations",
                type: "GET",
                dataType: "json",
                data: { Location: LocationVal },
                contentType: "application/json; charset=utf-8",

            }).done(function (data) {

                LocationSel.removeClass('ajax-loader');

                if (!data.length) {
                    $('.user-locationid').append($("<option>No result found</option>"));

                } else {
                    $('.LocationId').find('option').remove().end();
                    $.each(data, function (index, item) {

                        //alert(item.parentId);

                        if (item.parentId == null) {
                            $('.user-location').add($("<option disabled='disabled'></option>").text(item.name).val(item.locationId));
                        } else {
                            $('.user-locationid').append($("<option value='" + item.locationId + "'>" + item.name + "</option>"));
                        }
                    });
                }
            }).fail(function (err) {
                LocationSel.removeClass('ajax-loader');
                console.log("error");
            });

        };
    }





    ////////////////////////////////////
    // 		  Rating with Stars
    //////////////////////////////////
    $(".rating-meter span").click(function (event) {
        //alert(event.target.id);
        var ratingid = event.target.id;
        var perct = '';
        if (ratingid != null) {
            $.ajax({
                url: '/en/post/news/rateme',
                data: { data: ratingid },
                datatype: "json",
                success: function (mydata) {
                    var rMDiv = "#CommentMsg-" + mydata["divID"].toString();
                    console.log(rMDiv);
                    $(rMDiv).empty();
                    $(rMDiv).removeClass();
                    $(rMDiv).addClass(mydata["divClass"].toString());
                    $(rMDiv).append(mydata["Message"].toString());
                    $(rMDiv).show();

                    if (mydata["divClass"].toString() == "success") {
                        var RatePercent = mydata["RatePercent"].toString();
                        if (RatePercent == 0) {
                            var rate = $(this).index() + 1;
                            var _perct = 20 * rate;
                            perct = _perct + "%";
                        }
                        else {
                            perct = RatePercent + "%";
                        }

                        console.log(perct);
                        var rStar = "#rating-" + mydata["divID"].toString();
                        $(rStar).find(".rating-bar").css({ "width": perct });
                        $(rStar).find("input.rate").val(rate);
                    }
                }
            });
        }
        else {
            //$(rMDiv).empty();
            //$(rMDiv).show();
            //$(rMDiv).removeClass("success");
            //$(rMDiv).addClass("error");
            $(rMDiv).append('Please select an option');
        }
        return false;
    });



    //AFKey
    if( $('form.form-afk').length && $('.AntiForgeToken').length ) {

        var $_form = $('form.form-afk'),
            $_k = $('.AntiForgeToken input');


        $_k.appendTo($_form);

    }


}); // End of use strict