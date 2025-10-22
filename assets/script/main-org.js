jQuery(document).ready(function($) {
    //"use strict"; // Start of use strict
// @TODO loader in % or total images





    var g_setting = {
        main_menu_items: ".navigation.top-main-menu .lv1",
        banner_wrapper : ".banner-wrapper",
    };

    var controller = new ScrollMagic.Controller(),
        controller_h = new ScrollMagic.Controller({
            vertical: false,
            refreshInterval: 10
        });

    $.noConflict();

    //=========================================================================
    //=========================================================================
    //  INITIATE on load
    //=========================================================================
    //=========================================================================

    // $('body').on('svgImported', function() {alert("SVG IMPORTED TRIGGERED")});
    // $('body').on('imagesLoaded', function() {alert("images Loaded triggered")});


        if( !$('body .svg-import').length ) {

            $('body').trigger('svgImported');
        }

        init_all();


    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });




    // Toggle Menu fix
    $('ul.dropdown-menu').each(function () {
        var $a_tag = $(this).prev('a');
        $a_tag.addClass('dropdown-toggle');
        $('<span class="caret"></span>').appendTo($a_tag);
        $(this).parent('li').addClass('dropdown');
    });




    $('body').on('click','.caret', function () {
        $(this).parents('li').toggleClass('active-menu')
    });








    // Adds button to Expander and collapsed class to it
    // Auto Expander
    if ( $('.xash-collapse').length ) {

        var xash_collapse_modal = $('.xash-collapse');

        xash_collapse_modal.addClass('collapsed');
        // $('.xash-collapse')


        xash_collapse_modal.each( function (i,v) {

            var $_t_col = $(this),
                _html_collapse = $_t_col.html(),
                _html_collapse_mod = "<div class='xash-collapse-wrapper'><div class='xash-collapse-content'>" + _html_collapse + "</div></div>";


            $_t_col.html(_html_collapse_mod);


            $('<button class="xash-collapse-btn"></button>')
                .appendTo($_t_col)
                .on('click', function (e) {
                    e.preventDefault();
                    $(this).parent('.xash-collapse').toggleClass('collapsed')
                })

        });


    }




    // Product Wrapper
    //--------------------------------------------------------
    function bind_slider() {
        /*
        if( $('.slider-product').length ) {

            $('.slider-product').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,

                // asNavFor: '.thumb-area',
                // vertical: true
            });
        }
        */


        //----------------------------------------------------------------------
        //--------------------- SLick General/Global Slider
        if ( $('.section-slider').length && (! $('.section-slider').hasClass('slick-initialized') )) {


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


    }





    // wow.init();

    
    
    //=========================================================================
    //=========================================================================
    //=========================================================================
    //=========================================================================
    //=========================================================================
    //  ANIMATION EXPERIMENTS TO BE IMPL in MAIN
    //=========================================================================
    //=========================================================================
    //=========================================================================



    // Load all animations
    bind_page_menu();

    // Master Init Fn
    function init_all () {
        //------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------
       //@todo fix this unknown bug of Trigger, sepiaweb.js, it doesnt trigger in ELSE case if svg doesnt exist, so triggering here manually

        //SVG doesn't exist
        if( !$('body .svg-import').length ) {
            $('body').trigger('svgImported');
        }
        //------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------

        jQuery('body').on('svgImported', function () {

            // console.log( "Init on svgImported invoked");

            _check_loaded_images();

        }); // svg ready event;

        var g_setting = {
            main_menu_items: ".navigation.top-main-menu .lv1",
            banner_wrapper : ".banner-wrapper",
        };


        // check all images loaded, and trigger hook on body,
        // to avoid image container height malfunction



        console.log("Inited");
        // page based anim

        $('body').on('imagesLoaded', function () {

            // bind slider
            bind_slider();

            bind_page_anim();


            var wow = new WOW({
                offset: 250,
                mobile: false
            });

            wow.init();


            // bind parallax
            bind_parallex_items();

        }) // body image loaded


    }



    // for bind and re-initiate purpose
    function bind_page_menu () {


        if (!is_phone()) {

            // Set initial State
            var $mn_itms = $(".navigation.top-main-menu .lv1 "),
                $mn_anim = new TimelineMax();

            //

            $('body').on('mouseenter', g_setting.main_menu_items,
                function () {
                    $(this).find('.sub-menu').addClass('animate')
                }
            );

            $('body').on('mouseleave', g_setting.main_menu_items,
                function () {
                    $(this).find('.sub-menu').removeClass('animate')
                }
            );


            $('body').on('click', '.menu-burger.menu-btn', function (e) {

                $mn_anim.addLabel("MNFall");

                // $mn_anim.staggerFrom( $mn_itms, .35, { x: "+=30%", autoAlpha: 0 }, .125, "MNFall-.5" );

                if ($('body').hasClass('menu-visible')) {

                    hide_menu();

                } else {
                    // $mn_anim.set( $mn_itms, { y: "+=30%", opacity: 0 } );

                    $('body').addClass('menu-visible');
                    new TimelineMax().staggerFromTo($mn_itms, .35, {y: "+=30%", opacity: 0}, {
                        y: "0%",
                        opacity: 1,
                        ease: Power0.easeOut
                    }, .125);
                }
            });


        }



    }




    //Bind Parallex header items

    function bind_parallex_items () {

        var $_prlx_container = $( g_setting.banner_wrapper ).add( $(".plx-container") ),
            $_hd_prlx_set = $(".itm-plx", $_prlx_container)/*.add('.plx-item' , $_prlx_container)*/;

        $('body').on(
            "mousemove",

            //g_setting.banner_wrapper,
            $_prlx_container,

            function (e) {
                var _banner_wrap = g_setting.banner_wrapper;
                $_hd_prlx_set.each(function (el, v) {

                    var $_t = $(this),

                        _plx_dis   = parseInt($_t.attr('data-parallex')),
                        _plx_dis_y = ( $.trim($_t.attr('data-parallex-y'))!= "" ) ? parseInt($_t.attr('data-parallex-y')) : .3,

                        _obj_plx = {
                            x: _plx_dis,
                            y: _plx_dis_y
                        }
                    // console.log(_plx_dis);

                    parallaxIt(e, $(this), _obj_plx, _banner_wrap);
                });

            });
    }



    function parallaxIt( e, target, movement, parent) {

        var $this   = $(parent),
            relX    = e.pageX - $this.offset().left,
            relY    = e.pageY - $this.offset().top;


        TweenMax.to(target, .25, {
            x: (relX - $this.width() / 2) / $this.width() * movement.x,
            y: (relY - $this.height() / 2) / $this.height() * ( movement.x * movement.y )
        });
    }



    //=========================================================================
    //=========================================================================
    // SCROLLING
    //=========================================================================
    //=========================================================================

    /*
    $.scrollify({
        section : ".auto-scroll-wrapper",
        standardScrollElements: ".service-area",
        setHeights :false,
        sectionName : false,
        updateHash: false,
        overflowScroll : false,

        after: function () {

            if( $.scrollify.current().hasClass('service-area')) {
                // Disabled scrolling on Sticky Items
                $.scrollify.disable();
                $.scrollify.update();
            }

        }
    })
    */

/// <editor-fold defaultstate="collapsed" desc="-------[ HOMEPAGE SCROLLMAGIC ]-------">



    //=========================================================================
    //=========================================================================
    //  SCROLL MAGIC
    //=========================================================================
    //=========================================================================

    function bind_page_anim () {




        // SERVICE
        // Main Scroller of Homepage Service

        var $home_srv_section = $('.dir-left .service-area');


        if ( $home_srv_section.length) {

            var $paralex_srv = $('.srv-container', $home_srv_section),
                $curve_cont = $('.svg-wdt-anim', $home_srv_section),
                $tw_srv = new TimelineMax()
                    .addLabel("startSlide", 0)
                    .fromTo($curve_cont, 1, {width: 0}, {width: "100%", ease: Power0.easeNone}, "startSlide")
                    .fromTo($paralex_srv, 1, {x: "0%"}, {x: "-70%", ease: Power0.easeNone}, "startSlide");


            var $home_srv_scene = new ScrollMagic.Scene({
                triggerElement: $home_srv_section,
                triggerHook: 0,
                duration: "200%",
                reverse: true
            })
            // .addIndicators({ name : 'About -- SERVICE' })
                .setPin($home_srv_section)
                .setTween($tw_srv)
                .addTo(controller);


            //---------------------------------------------------------------------------------------------
            // Service Cards
            //---------------------------------------------------------------------------------------------
            var $_home_srv_cards = $('.srv-panel-card', $home_srv_section);

            var $dlr_1_from = val_to_perc(70),
                $dlr_1_to = val_to_perc(-80),
                $dlr_2_from = val_to_perc(40),
                $dlr_2_to = val_to_perc(-40),
                $dlr_3_from = val_to_perc(50),
                $dlr_3_to = val_to_perc(-55);

            $_home_srv_cards.each(function (i, v) {

                var $_t = $(this),
                    $_tgt_box_l1 = $('.sm-item-plx.sm-lyr-1', $_t),
                    $_tgt_box_l2 = $('.sm-item-plx.sm-lyr-2', $_t),
                    $_tgt_box_l3 = $('.sm-item-plx.sm-lyr-3', $_t),
                    $_tgt_box_l4 = $('.sm-item-plx.sm-lyr-4', $_t),

                    $sc_prlx_srv_hm = new TimelineMax();

                $sc_prlx_srv_hm.addLabel("start");
                // Layer 1
                if ($_tgt_box_l1.length) {
                    $sc_prlx_srv_hm.add(TweenMax.fromTo($_tgt_box_l1, 1, {x: "+=30%", /* ease: Power4.easeOut*/}, {x: "-=40%"}), "start")
                }

                // Layer 2
                if ($_tgt_box_l2.length) {
                    $sc_prlx_srv_hm.add(TweenMax.fromTo($_tgt_box_l2, 1, {x: "+=50%", /*ease: Power4.easeOut */}, {x: "-=75%"}), "start")
                }

                // Layer 3
                if ($_tgt_box_l3.length) {
                    $sc_prlx_srv_hm.add(TweenMax.fromTo($_tgt_box_l3, 1, {x: "+=150%", /*ease: Power4.easeOut */}, {x: "-=175%"}), "start-=.5")
                }


                var $sc_prlx_srv_hm_sc = new ScrollMagic.Scene({
                    triggerElement: $_t,
                    triggerHook: .85,
                    duration: window.outerWidth * .85,
                    offset: 100,
                    reverse: true
                })
                // .addIndicators({ name : 'Horz Parax' })
                    .setTween($sc_prlx_srv_hm)
                    .addTo(controller_h)


            })


        } // if ends


        // Contact Form
        var $ele_contact_in = $('.contact-inline');
        if ($ele_contact_in.length) {

            var $bg_pop = $('.bg-pop', $ele_contact_in),
                tw_grow = new TimelineMax()
                    .from( $bg_pop, .50, { css: { scaleX: 0.85, scaleY: 0.85 } });

            var $sc_hm_ele_contact = new ScrollMagic.Scene({
                triggerElement: $ele_contact_in,
                triggerHook: .5
                //duration: "60%",
            })
            // .addIndicators({name: "Contact Information"})
                .setTween(tw_grow)
                .addTo(controller)
        }






        // <editor-fold desc="- - - - [ ANIMATION Page About Us ] - - - -">

        // Page About us
        // ---------------------------------------------------------------------------------------------
        if  ( $('body').hasClass("page-about-us") ) {


            var $_anim_box = $('body .anim-circle-wrap .box-anim'),
                $_tw_box = new TimelineMax()
                .staggerTo( $_anim_box, 2, { width: "100%", ease: Power0.easeIn }, 1.5,"+=1.5" );


            var $sc_abt_us = new ScrollMagic.Scene ({
                triggerElement: $(g_setting.banner_wrapper),
                triggerHook: 0,
                duration : "100%"
            })
                .setTween($_anim_box)
                .addTo(controller)
        }
        // </editor-fold>
        // Page About Ends ---------------------------------------------------





        // <editor-fold desc="- - - - [ ANIMATION Page Contactus ] - - - -">

        // Page Contact Us
        // ----------------------------------------------------------------------------------------------
        if ( $('body').hasClass('page-contact-us')) {

            var $_cform = $('.form-wrapper'),
                $_c_map = $('.map-wrapper'),
                $_c_map_w= $(g_setting.banner_wrapper);

            var $_tw_cs_mp = new TimelineMax()
                .staggerFromTo( $_cform,1, { y: "-=10%", ease: Power0.easeIn }, {y: "+=10%"},  1.5,"+=.5" );

            var $sc_contact_us = new ScrollMagic.Scene({
                triggerElement  :  $_c_map_w,
                triggerHook  : .25,
                duration     : "100%"
            })
                .setTween($_tw_cs_mp)
                .addTo(controller)
        }

        // Page Contact Us Ends ---------------------------------------------------
        // </editor-fold>






        // <editor-fold desc="- - - - [ ANIMATION Page Portfolio ] - - - -">

        // Page PortFolio Stuff
        // ----------------------------------------------------------------------------------------------
        if ( $('body').hasClass('page-showcase')) {
            // header animation
            if( $('body .bg-plate .animated-box').length ) {

                var $_sc_header = $("body .bg-plate"),
                    $_sc_header_box1 = $( '.animated-box.b-1', $_sc_header ),
                    $_sc_header_box2 = $( '.animated-box.b-2', $_sc_header ),
                    $_sc_header_box3 = $( '.animated-box.b-3', $_sc_header ),
                    $_sc_line_items = $('#header-wrapper .line-row > span' );

                var $tw_sc_header = new TimelineMax()
                    .set($_sc_line_items, { y: "100%" })
                    .set($_sc_header_box1,{ y: "-120%" })
                    .to( $_sc_header_box2, .65, { left: "+=200%" , ease:Power1.easeIn } )
                    .to( $_sc_header_box3, .75, { left: "-=180%" , height: 10, ease:Power1.easeOut }, "-=.35" )
                    .to( $_sc_header_box1, 1, { y: "0%", ease:Power1.easeInOut } )
                    .staggerTo( $_sc_line_items, .5, {y: "0%" }, .25, "-=1");


                var $_sc_sc_header = new ScrollMagic.Scene({
                    triggerElement: $_sc_header,
                    triggerHook: 0
                })
                    .setTween($tw_sc_header)
                    .addTo(controller)
            }
        }
    // </editor-fold>
        // Page Portfolio Ends ---------------------------------------------------





        // <editor-fold desc="- - - - [ ANIMATION::: Page Branding ] - - - -">


        if ($('body').hasClass('page-srv-branding')) {

            // First sticky section
            //-----------------------------------------
                var  $des_wrap = $(".des-idea"),
                    _srv_tags_wrp       = $('.tags-container', $des_wrap),
                    _srv_brn_svg_curv   = $('.svg-import.curves-animate', $des_wrap),
                    _srv_bsc_curve_1    = $('#BS-Curve-1', _srv_brn_svg_curv),
                    _srv_bsc_curve_2    = $('#BS-Curve-2', _srv_brn_svg_curv),
                    _srv_logo           = $('.logo-tmp.svg-import', $des_wrap),
                    _srv_logo_curve     = $('#BrLogoGuides', _srv_logo),
                    _srv_logo_base      = $("#BrLogoBase path", _srv_logo),
                    _srv_logo_base_sm   = $('#BrLogoUpperText path', _srv_logo),
                    _srv_sticky_white   = $('.white-over', $des_wrap),
                    _srv_sticky_card    = $('.card-illus', $des_wrap),
                    _tag_max_width      = Math.abs(_srv_tags_wrp.width() - $(window).width()),
                    _tag_max_scroll     = Math.abs(_srv_tags_wrp.width()) * .85;


                // prepare paths
                svg_pathPrepare(_srv_bsc_curve_1, 1);
                svg_pathPrepare(_srv_bsc_curve_2, 1);


                // content scroll
                var tw_des_wrap = new TimelineMax()
                    .addLabel('start')
                    .fromTo( _srv_tags_wrp, 2, {x:"0%" }, {x: _tag_max_width * (-1) }, "start" )


                    // curves animate
                    //----------------------------------
                    .to( _srv_bsc_curve_1, 2, {strokeDasharray: svg_getLength(_srv_bsc_curve_1), strokeDashoffset: 0}, "start+=.2")
                    .to( _srv_bsc_curve_2, 2, {strokeDasharray: svg_getLength(_srv_bsc_curve_2), strokeDashoffset: 0}, "start")


                    // Bg
                    //-------------------------------------
                    .to(_srv_sticky_white,.2, { autoAlpha:1 })
                    .to(_srv_logo_curve, .15, { autoAlpha:0 })
                    .to(_srv_logo_base, .2, { css:{ fill: "#200a56"} }/*, "-=1" */)
                    .to(_srv_logo_base_sm, .2, { css:{fill: "#774EDE" }}/*, "-=1" */)
                    .to([_srv_logo, _srv_logo_base_sm], .2, { css:{ scale: ".35"}} )
                    .to(_srv_sticky_card,.1, {autoAlpha: 1 } /*, "-=.5"*/);



                // .to($lc_3, 1.5, {strokeDasharray: svg_getLength($ac_3), strokeDashoffset: 0}, "-=1.75")

                var sc_des_wrap = new ScrollMagic.Scene({
                    triggerHook: 0,
                    triggerElement: $des_wrap,
                    duration: _tag_max_scroll,
                    // offset: 100
                })
                    //.addIndicators({name: "Scroll Horizon::" + _tag_max_width})
                    .setPin($des_wrap, {pushFollowers: true })
                    .setTween(tw_des_wrap)
                    .addTo(controller);




                if ( $('.card-template-wrap').length ) {

                    var $_brd_card_scrll_w = $('.card-template-wrap'),
                        $_brd_card_scrll   = $('.card-template-scroller', $_brd_card_scrll_w),

                        tw_brd_card_scrl = new TimelineMax()
                            .to($_brd_card_scrll, 1, { css: {backgroundPosition: "-70% center" } } ),

                        sc_brd_card_scrl = new ScrollMagic.Scene({
                            triggerElement: $_brd_card_scrll_w,
                            triggerHook:.15,
                            duration: 700

                        })
                            .setPin($_brd_card_scrll_w, { pushFollowers: true })
                            .setTween(tw_brd_card_scrl)
                            .addTo(controller)

                }

            }






        // </editor-fold>
        // Page Branding Ends ---------------------------------------------------





        // <editor-fold desc="- - - - [ ANIMATION ::: Web Eng/Dev ] - - - -">
        if ( $('body').hasClass('page-srv-web-eng')) {
            //alert("has class");
            var $_wrap_se_dev =     $('.main-dev-illus-wrap'),
                $_svg_main_dev =    $('.main-illus-web-eng'),
                $_smd_out_c =       $('#SWE-Ring-outer', $_svg_main_dev),
                $_smd_fat_c =       $('#SWE-Ring-fat', $_svg_main_dev),
                $_smd_main_ring=    $('#SWE-Ring-Init ', $_svg_main_dev),
                $_smd_all_p =       $('path[id*=SWE-P-]', $_svg_main_dev),
                $_smd_all_p_c =     $('circle[id*=SWE-C-]', $_svg_main_dev),
                $_smd_all_p_g =     $('polyline[id*=SWE-Gd-]', $_svg_main_dev),
                $_smd_all_txt =     $('#SWE-Text text', $_svg_main_dev),
                $_smd_all_dt_c=     $('path[id*=SWE-C-Dt]', $_svg_main_dev),
                $_smd_c_hov=        $('path[id*=SWE-C-Hov]', $_svg_main_dev),
                $_smd_all_dt_txt = $('g#SWE-Srv-Detail text', $_svg_main_dev);

            // set initial path
            svg_pathPrepare($_smd_out_c);
            svg_pathPrepare($_smd_fat_c,1);
            svg_pathPrepare($_smd_main_ring);
            svg_pathPrepare( $_smd_all_p, 1);
            svg_pathPrepare($_smd_all_p_c);
            svg_pathPrepare($_smd_all_dt_c);

            // Main ring sets
            var $_swe_ring_itms = $($_smd_out_c).add($_smd_fat_c).add($_smd_main_ring);

            // Initial setup
            var _tmp_tw_swe = new TimelineMax()
                .set([$_smd_all_txt,$_smd_all_dt_txt], {opacity: 0})
                .set($_smd_c_hov, {css:{display: "none"}})
                .set($_svg_main_dev, {opacity:0, rotation:189, transformOrigin:"50% 50%"});



            //Tweens-----------------------
            var $_tw_p_swe = new TimelineMax()
                .addLabel('mainDev')

                .to($_svg_main_dev,4.25, { opacity:1, rotation: 0},'mainDev')
                // main rings
                .staggerTo( $_swe_ring_itms, 2.5, {strokeDasharray: function(i,v) {return svg_getLength(v) } , strokeDashoffset: 0},1.5,"mainDev-=.5")
                // circles
                .staggerTo( $_smd_all_p_c,1, {strokeDasharray: function(i,v) {return svg_getLength(v)} , strokeDashoffset: 0},.5,"-=4.5")
                // paths
                .staggerTo( $_smd_all_p, 2, {strokeDasharray: function(i,v) {return svg_getLength(v)} , strokeDashoffset: 0},.75,"-=3.5")
                //text popup
                .staggerFromTo( $_smd_all_txt, .35, {opacity: 0, y:"+=50" },{opacity: 1,y: "-=50"}, .25);

            // Scene implemented
            var $_sc_p_swe = new ScrollMagic.Scene({
                triggerElement : $_wrap_se_dev,
                triggerHook: .75
            })

                .setTween($_tw_p_swe)
                .addTo(controller);


            ////////////////////////////////////////
            // Interactivity
            ////////////////////////////////////////
            // Global Flag
            var _glb_path_hov = true;

            $_smd_all_txt.on('mouseenter', function () {

                if (_glb_path_hov == false ) return;
                _glb_path_hov = false;

                console.log("circle hovered");

                var _rel = "#" + $(this).attr('rel'),
                    _rel_itm = $(_rel).find('path[id*=SWE-C-Dt]'),
                    _rel_hov = $("#SWE-Hover-Out").find('path[rel='+ $(this).attr('rel') +']'),
                    _rel_txt = $('text', $(_rel)),
                    _tmp_hvr_tl = new TimelineMax()
                        .set(_rel_hov,{css:{display: "inline", fill:"transparent"}})
                        .to( _rel_itm,.5,{ strokeDasharray: svg_getLength(_rel_itm) , strokeDashoffset:0 } )
                        .to( _rel_itm, .75, {fill: "white" }, "-=.3")
                        // .staggerFromTo( _rel_txt, .35, {opacity: 0, y:"+=50" },{ opacity: 1,y: "-=50"}, .15)
                        .fromTo( _rel_txt, .35, {opacity: 0 },{ opacity: 1, onComplete:function() {_glb_path_hov=true}} )


            });

            $('#SWE-Hover-Out path').on('mouseleave', function (e) {
                    _glb_path_hov=true;

                    var $_t = "#" + $(this).attr('rel'),
                        _path = $($_t).find('path'),
                        _itm_grp = $('text', $_t),

                    _tmp_hvr_tl = new TimelineMax()
                        .to( _itm_grp, .25, { overwrite:"all", opacity: 0})
                        .to( _path,.5,{ strokeDashoffset:svg_getLength(_path) } )
                        .to( _path, .75, {fill: "transparent" }, "-=.3")
                        .set($(this), {css:{display: "none"}})

            });




            /*  Phone UX
            //--------------------------------------------------*/
            var _v_ux_des = $('.area-ux-ui'),
                _v_ux_img = $('div.ux-img', _v_ux_des),
                _tw_ux = new TimelineMax()
                    .addLabel("start")
                    .staggerFromTo(_v_ux_img, .75, { y:"+100%", autoAlpha:0}, {y:"0%", autoAlpha:1}, .15 );

            var _sc_ux = new ScrollMagic.Scene({
                triggerHook: 1,
                triggerElement: _v_ux_des,
                reverse: true,
               // duration: "100%"
            })
                .setTween(_tw_ux)
                .addTo(controller)



        }




        // </editor-fold>
        // Page Web Dev/Eng Ends ---------------------------------------------------




        // <editor-fold desc="- - - - [ ANIMATION ::: Bespoke ] - - - -">
            // Disabled
        	/*
            if ( $('body').hasClass('page-srv-bespoke__') ) {

                    // vertical container
                    var $_s_bf_wrap = $('.bespoke-features-wrap'),
                        $_s_bf_cont = $('.bespoke-features', $_s_bf_wrap),
                        $_s_bf_itms = $('div[class*="v-panel-"]', $_s_bf_cont),
                        $_s_bf_itms_n = $('span.num-list', $_s_bf_itms),
                        _s_bf_itm_wid = _get_child_width($_s_bf_itms),
                        _s_bf_max_width  = Math.abs(_s_bf_itm_wid - $_s_bf_cont.width()),
                        _s_bf_max_scroll = Math.abs(_s_bf_itm_wid) * .95;
                        $_bf_cont_scroll = new TimelineMax();

                      //  alert($_s_bf_cont.width());

                        $_bf_cont_scroll
                            .addLabel('start')
                            .to($_s_bf_cont,1, {x: _s_bf_max_width * (-1) }, "start")



                    $_sc_s_bf_wrap = new ScrollMagic.Scene({
                        triggerElement : $_s_bf_wrap,
                        duration: _s_bf_max_scroll,
                        triggerHook: 0
                    })
                        //.addIndicators({name: "Dfdfdfdf"})
                        .setPin($_s_bf_wrap, {pushFollowers: true})
                        .setTween($_bf_cont_scroll)
                        .addTo(controller)

            }
            */
            // Vertical
            if ( $('body').hasClass('page-srv-bespoke') ) {

                // vertical container
                var $_s_bf_wrap = $('.bespoke-features-wrap'),
                    $_s_bf_cont = $('.bespoke-features', $_s_bf_wrap),
                    $_s_bf_itms = $('div[class*="col-md-"]', $_s_bf_cont),
                    $_s_bf_itms_n = $('span.num-list', $_s_bf_itms),
                   // _s_bf_itm_wid = _get_child_width($_s_bf_itms),
                    _s_bf_max_height  = Math.round($_s_bf_cont.height() ),
                    _s_bf_max_scroll = Math.abs( _s_bf_max_height ) ,

                    $_bf_cont_scroll = new TimelineMax();

                //  alert($_s_bf_cont.width());


                $_bf_cont_scroll
                    .addLabel('start')
                    .to($_s_bf_cont,1, { y: _s_bf_max_height * (-1) }, "start")
                   // .staggerTo($_s_bf_itms,1, {x: 300},.3,"start");

                //@todo experiemnt as for perforamnce
                // THIS IS EXPERIMENTAL




                    $_s_bf_itms.each(function (i,v) {
                        var newTimeline = new TimelineMax()

                        var _t_m_child_ = $($_s_bf_itms[i]);

                        //newTimeline.fromTo(_t_m_child_,1,{x:300},{x:0},"BCSala")
                        newTimeline.to($('.num-list',_t_m_child_),1,{y:-250 }, "BCSala");


                        var td_df = new ScrollMagic.Scene({
                            triggerElement: _t_m_child_,
                            triggerHook: 1,
                            duration: "100%"//_t_m_child_.height() * 1.5
                        })

                            //.setClassToggle(_t_m_child_, "movedOn")
                            .setTween(newTimeline)
                            .addTo(controller)


                    });
                    // THIS IS EXPERIMENTAL  ENDS

                var $_sc_s_bf_wrap = new ScrollMagic.Scene({
                    triggerElement : $_s_bf_wrap,
                    duration: _s_bf_max_height - 760,
                    triggerHook: 0
                })
                    // .addIndicators({name: _s_bf_max_height})
                    .setPin( $_s_bf_wrap, {pushFollowers: true })
                    .setTween([$_bf_cont_scroll] )
                    .addTo(controller);












        }
        // </editor-fold>




        //-------------------------------------------------------------
        //-------------------------------------------------------------
        //-------------------------------------------------------------
        // General Effects --------------------------------------------
        //-------------------------------------------------------------
        //-------------------------------------------------------------
        //@update: Scroll only when scroll down, from would be original

        if ( $('body .scroll-parallex').length ) {

            var $_scrl_plx  = $('body .scroll-parallex');


            // Scrolling Parallax item container
            $_scrl_plx.each(function ( i, v ) {
                console.log("found scrollparallex");
                var $v_pl_t = $(this),
                    $v_pl_item = $('.plx-item', $v_pl_t),

                    v_plx = ( $.trim( $v_pl_item.attr('data-parallex')) != "" ) ? parseInt($v_pl_item.attr('data-parallex')) : 0,
                   // v_plx = v_plx + "%",
                    trigger_hook = $.trim( $v_pl_t.attr('data-hook') ) != "" ?  parseFloat($.trim( $v_pl_t.attr('data-hook') )) : .9,


                    //-----------------------------------------------------------
                    // @Update
                    // Duration is redeclared,@update
                    duration;

                    if( $v_pl_t.attr('data-scroll-height') ) {
                        duration = $.trim( $v_pl_t.attr('data-scroll-height')  )
                    } else if ($v_pl_t.hasClass('parent-height')) {
                        duration = "110%";
                    } else {
                        duration = "auto";
                    }
                    //-------------------------------------------------------------





                    var offset = $v_pl_t.attr('data-offset') != ""  ? parseInt($v_pl_t.attr('data-offset')) : 0,

                    tw_vw_plx = new TimelineMax();

                    // Add Time to Synch
                    tw_vw_plx.addLabel("st_plx" );
                    // Need Loop in Case
                    $v_pl_item.each( function( j,w) {

                        var v_plx = ( $.trim( $($v_pl_item[j]).attr('data-parallex')) != "" ) ? parseInt($($v_pl_item[j]).attr('data-parallex')) : 0;

                        // tw_vw_plx.add( new TimelineMax().fromTo( $($v_pl_item[j]), 2.5, { y: "+=" + (v_plx * .75) + "%"  } , { y: ("-=" + (v_plx * 1.25) + "%" ) /*, ease: Circ.out*/ },"st_plx"  ));

                        // Static from ground zero
                        if ($v_pl_t.hasClass('plx-org')) {
                                tw_vw_plx.to( $($v_pl_item[j]), 2.5,  { y: ("-=" + (v_plx * 1.25) + "%" ) /*, ease: Circ.out*/ },"st_plx" );
                        } else {
                            tw_vw_plx.fromTo( $($v_pl_item[j]), 2.5, { y: "+=" + (v_plx * .75) + "%"  } , { y: ("-=" + (v_plx * 1.25) + "%" ) /*, ease: Circ.out*/ },"st_plx" );
                        }

                    });




                var $_scene_scrl_view_plx = new ScrollMagic.Scene({
                    triggerElement : $v_pl_t,
                    triggerHook : trigger_hook,
                    offset: offset,
                    duration: duration,
                    reverse: true
                })
                  //.addIndicators({name: "item " + i + " Start"})
                    .setTween(tw_vw_plx)
                    .addTo(controller)
            })
        }



        // Global Sticky area
        if ( $('body .sticky-area').length ) {

           var $_scr_sticky = $('body .sticky-area');

            $_scr_sticky.each( function( i,v ) {

               var  $v_stc_t = $(this),
                   $_c_sticky_item = $('.ss-sticker', $v_stc_t ),
                   $_c_release    = $('.ss-release');
                  // _tw_sticky_tw = new TimelineMax()


               var $_scene_scrl_sticky = new ScrollMagic.Scene({
                   triggerElement : $v_stc_t,
                   triggerHook : 0,
                   // offset: $_c_sticky_item.outerHeight(),
                   duration: $v_stc_t.outerHeight() - ( $_c_sticky_item.outerHeight() * 2 ),
                  //  duration: "100%"

               })
                   // .addIndicators({name: "sticky " + i + " Start- length " + $v_stc_t.outerHeight() })
                   .setPin($_c_sticky_item, { pushFollowers: false } )
                   .addTo(controller);


                // Release sticker
               var $_scene_scrl_sticky_r = new ScrollMagic.Scene({
                   triggerElement : $_c_release,
                   triggerHook : .75,
                   //duration: "100%"
               })
                 //  .addIndicators({name:'releasing item'})
                   .addTo(controller);

            })
        }

        //=========================================================================
        //=========================================================================
        //  maybe i can add from to limit instead of fixed percentage
        //=========================================================================
        //=========================================================================	
        	   


        if ( $('.has-parallex').length ) {

            $('.has-parallex').each(function (i,v){

                var $_body = $('body'),
                    $__this = $(this),
                    $__is_body = $__this.is('body') ? true : false,

                    // if parallex is set on  body then target would be wrapper
                    _plx_trg_scene = $__is_body ? $_body : $__this,
                    $_tmp_unit    = $__is_body ? "px" : "%",
                    _plx_tgt_obj = $__is_body ? $("#wrapper") : $__this;


                if ( $.trim(_plx_tgt_obj.attr('data-parallex-perc')) != '' ) {
                    var __tmp_perc = parseFloat( _plx_tgt_obj.attr('data-parallex-perc') );
                    _plx_prc = Math.abs( (_plx_tgt_obj.height() * __tmp_perc ) / 100 );

                } else {
                    _plx_prc =  ($_body.height() * 15.5 ) / 100;
                }


                // Tween
                _plx_tween = new TimelineMax()
                    .to(_plx_tgt_obj,1,{css:{'background-position-y': "-=" + _plx_prc + $_tmp_unit}});


                // scroll
                var _sc_bg_plx = new ScrollMagic.Scene({
                    triggerElement: _plx_trg_scene,
                    triggerHook: $__is_body? 1 :.5,
                    duration: _plx_tgt_obj.height()
                })

                    .setTween(_plx_tween)
                    .addTo(controller)
            });

        }


    }  // page anim end

// </editor-fold>





    //// <editor-fold defaultstate="collapsed" desc="-------[ PAGE LOADER ]-------">

    // Click Handlers AJAX MENU
    //-------------------------------------------------------------------------
    // var $_body_ele = $('#body-wrapper a')
        $('body').on('click','#body-wrapper a[rel="bookmark"]', function (e) {

            e.preventDefault();

            var tgt = e.target.href;

            hide_menu();

            load_content(tgt);

            // console.log()
            history.pushState({}, null, tgt );
        });


        $(window).on("popstate", function(e) {
            alert("DOnt GO Back, WIP");
            return
            //loader_show();
        });




    // Loader Events
    //-------------------------------------------------------------------------
    $('body').on( 'loadingStart', function () {
        $('html').addClass('loading-content')
    });


    $('body').on( 'keydown', function (e) {
        if (e.keyCode == 27 ) {
            hide_menu();
        }
    });

    $('body').on('loadingEnd', function () {

        setTimeout(function () {
            $('html').removeClass('loading-content');
        }, 500 )

    });



    // </editor-fold>







    /// <editor-fold defaultstate="collapsed" desc="-------[ MISC TEMP FUNCTIONS ]-------">

    // Anmation similar to stagger, but with custom data-dir and delay attri
    function anim_stagger( $items, $time, $delay, $props, $reverse ) {
        var tw = new TimelineMax();

        //if ( $items.length == 0 ) return tw;

        // var setup
        $time = $time || 1;
        $delay = $delay || $time / 8;




        $($items).each(function ( i, v ) {

            var $item = $(this),
                $trg  = $item;



            // Directional based
            // Based on DATA TAG, check if item has data tag.
            // if (typeof $props === "string") {

            if( $item.attr('data-dir') ) {

                var $attr = $.trim( $item.attr('data-dir').toLowerCase() );

                // $attr = $.trim( $attr.toLowerCase() );

                if ($attr === "up") {
                    var $_dir = $item.attr('data-distance') ? $item.attr('data-distance') : "+=100%";
                    $props = { y: $_dir, autoAlpha: 0, ease:Power2.easeInOut };
                }

                else if ($attr === "down") {
                    $props = { y: "-=200%", autoAlpha: 0, ease: Power2.easeInOut }
                }

                else if ($attr === "left") {
                    $props = { x: "-=200%", autoAlpha: 0, ease: Power2.easeInOut }
                }

                else {
                    $props = { x: "+=200%", autoAlpha: 0, ease: Power2.easeInOut }
                }
            }



            if ($props == null || $props == undefined ) {
                $props = { y: "+200", autoAlpha: 0, ease:Power2.easeInOut };
            }

            // $props =
            $reverse = $reverse || false;

            var $merged_props = xash_extend_obj($props, {delay : $delay });

            // data child is true, then animate chld object of target
            if ( $item.attr('data-target') ) {
                $trg = $item.find( $.trim( $item.attr('data-target') ) );
            }


            if ($reverse) {
                tw.to( $trg, $time, $props /*, $delay*/);
            } else {
                tw.from($trg, $time, $props  , $delay );
            }

        });



        return tw;


    }


    function is_phone () {
        return $('.dv-device').is(":visible");
    }


    function val_to_perc ( value , neg ) {
        //neg = neg || false;
        //var prefix = neg  ? "-" : "";
        return  value + '%' ;
    }


    function loader_show() {
        $('body').trigger("loadingStart")
    }


    function loader_hide () {
        $('body').trigger("loadingEnd")
    }


    function hide_menu (ele) {
        var $mn_itms = ele ||  $( g_setting.main_menu_items );
        new TimelineMax().staggerFromTo( $mn_itms, .35, { y:"0%", opacity: 1 }, { y: "+=30%", opacity: 0 }, -.125 , null, function () {
            $('body').removeClass('menu-visible');
        } );
    }


    function trigger_all_load ( ) {
        console.log("Triggering all laod fn");

        var svg_flag = false;


        if ( $('#body-wrapper .svg-import').length ) {

            var $svg = $('#body-wrapper .svg-import'),
                total_svg = $svg.length ;
                $svg.each( function (i,v) {

                    svg_flag = false;

                    var $__t_svg = $(this);


                    xash_svg_ready( $__t_svg, function () {
                        //svg_flag = true
                        total_svg--;

                        if ( total_svg == 0 ) {
                            $('body').trigger('imagesLoaded');
                        }
                    })
            });

            if ( svg_flag ) {
                $('body').trigger('imagesLoaded');
            }

        }

        else {
            $('body').trigger('imagesLoaded');
        }

        console.log("images loaded")
        //$('body').trigger('imagesLoaded');

    }



    //=========================================================================
    //=========================================================================
    // SVG Tester
    //=========================================================================
    //=========================================================================
    /**
     *
     * @param $svg , SVG Item/img
     * @param callback, function to invoke upon SVG
     * @returns {boolean} in case of failure and loops back
     */
    function xash_svg_ready ( $svg, callback ) {

        //  debugger;

        if ( typeof callback !== 'function' &&  $($svg).length <= 0 )
        {
            return;
        }

        console.log("Checking SVG " + $svg );

        var _tmp_svg_test,
            _item = $($svg)[0];

        // check its svg
        if ( _item.tagName.toLowerCase() == 'svg' ) {

            try {

                if ( _item.getBBox() !== null || _item.getBBox().width !== undefined ) {
                    console.log( "SVG " + $svg + "is Rendered" );
                    callback();
                    return;
                }

            }
            catch (e) {
                console.log( "==================================================\n" + e.message + "==============================================\n");
                console.log( "SVG " + $svg + " Gone Back" );
                window.clearTimeout(_tmp_svg_test);

                _tmp_svg_test = window.setTimeout(function () {
                    xash_svg_ready( $svg, callback )
                },150 );

                return false;
            }

        } else {
            // go back!
            window.clearTimeout(_tmp_svg_test);
            console.log( "SVG " + $svg + " Else Statement" );
            _tmp_svg_test = window.setTimeout(function () {
                xash_svg_ready($svg, callback )
            }, 150 );

            return false;
        }

        //return true;
    }



    // SVG Fn

    //easy interface get svg length
    function svg_getLength ($el) {
        // error handing
        // if ( $el[0] ) {
        //console.log("Item is being ass ::", $el);
        if( checkIE() ) return 2500;

        if( $el.length < 1 ) {
            console.log($el.tagName);
            return;
        }


//        return $($el)[0].getTotalLength();
        return $($el).get(0).getTotalLength();


        if ( ! $el[0].getTotalLength() == undefined ) {

        }
        //}
        else {
            return $el.get(0).getTotalLength();
        }
        return false;

    }

    // @todo Need loop fix
    function svg_pathPrepare ($elm, $inv, $length) {

        if ( $elm.length > 0 ) {

            $($elm).each( function ( i , v ) {

                var $el = $(this);

//                 console.log( $el + "\n");

                var lineLength = svg_getLength($($el).get(0)),
                    fac = 1;
                $inv = $inv || false;

                if ($inv) {
                    fac = fac * (-1);
                }

                $el.css("stroke-dasharray", lineLength);
                $el.css("stroke-dashoffset", lineLength * fac);
            })
        }


    }



    // get total width
    function _get_child_width (item) {

        //calculate with margin
        if ( item==undefined || !item.length ) return;

        var ini_wid = 0;
        $(item).each(function (i,v) {
            ini_wid = ini_wid + parseInt( $(this).width() ) + parseInt($(this).css('margin-right')) + parseInt($(this).css('margin-left'));
        });

        return ini_wid;

    }



    function checkIE () {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return true;
            // return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return true;
            // return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return true;
            // return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        return false;
    }



    //=========================================================================
    //=========================================================================
    //  Load Content
    //=========================================================================
    //=========================================================================
    	function load_content ( $url ) {

            loader_show();

            $.ajax({
                url: $url,
                dataType: "html",
                method: "GET"
            }).done(function ( response) {

                var content = $(response).find("#body-wrapper").html();

                    $("#body-wrapper").html( content );

                    update_meta(response);

                    // reasign anim stuff
                    _check_loaded_images();
                    init_all();





                loader_hide();
            })


        }



        function get_body_class (ele) {
           // var  clss = $(ele).filter('body'),
           //      css = $(clss).attr('class');
            var css = ele.match(/<body\s.*=\W*(.*?)[\W]>/)[1];
            console.log (css);
            return  css ;
        }


        // updates title and body class
        function update_meta (ele) {

            var title = $(ele).filter('title').text(),
                bodyClass = get_body_class(ele);

            $('body').attr('class', bodyClass );
            $('title').text(title);

            // reset scroll top
            $('html,body').scrollTop(0)
        }





    // </editor-fold>






    //// <editor-fold defaultstate="collapsed" desc="-------[ Temp Net code to polish ]-------">

    function _check_loaded_images( imgArr, callback ) {

        console.log("Triggering _check_loaded_images fn");

        imgArr = imgArr || $('body').find('img');


        callback = callback || trigger_all_load;

        //Keep track of the images that are loaded
        var imagesLoaded = 0,
            image_total = $('.loader-curtain .t-image'),
            img_current = $('.loader-curtain .c-image');



        function _load_all_images(callback) {

            //Create an temp image and load the url
            var img = new Image(),
                __src = $(imgArr[imagesLoaded]);

            $(img).attr('src', __src.attr('src') );

            // Fix cache bug and load
            if ( img.complete || img.readyState === 4 ) {

                // image is cached
                imagesLoaded++;

                //Check if all images are loaded
                if( imagesLoaded == imgArr.length ) {

                    //If all images loaded via cache do the callback
                    callback();

                } else {

                    //If not all images are loaded call own function again
                    _load_all_images(callback);
                }

            } else {

                $(img).load( function () {

                    //Increment the images loaded variable
                    imagesLoaded++;


                    //Check if all images are loaded
                    if( imagesLoaded == imgArr.length ) {

                        //If all images loaded do the callback
                        callback();
                        console.log("Total number of assets loaded, " +  imagesLoaded)

                    } else {

                        //If not all images are loaded call own function again
                        _load_all_images(callback);

                    }
                }).on('error', function () {

                    //Increment the images loaded variable
                    imagesLoaded++;
                    console.log('Image is 404');
                    _load_all_images(callback);
                });
            }

        }
        // load
        _load_all_images(callback);

    }


    // </editor-fold>


}); // End of use strict