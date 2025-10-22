/**
 * Created by xafaR.
 * Copyright XASHLabs
 * Animation Classes
 * anim-stg-fadeInUp
 */



//=========================================================================
//=========================================================================
//  IMAGE LOADER for PAGE
//=========================================================================
//=========================================================================
//  will shoot when page has class 'has-loader'
jQuery(document).ready(function ($) {


    // This is theme based , need to move to mainjs of theme
    // Menu Switch for Mobile/Employee Sectin
    // Adds on load 2 menu items
    // ---------------------------------------------------------
    var _tmpMenuItems = $('.header-super-menu .super-menu  ul > li').clone();
    _tmpMenuItems.addClass('hide-desktop vp-menu');
    _tmpMenuItems.insertAfter('.navigation.top-main-menu > .navbar-nav > li:last-child');
    $("<div/ class='clearfix hide-desktop hr'>").insertBefore(_tmpMenuItems.first());

    $('.navigation.top-main-menu').find('div.dropdown > *').unwrap();




    // Virtual iFrame
    if ($('span.iframe-gen').length ) {

        var _ifrm = $('span.iframe-gen'),
            _src = _ifrm.attr('data-src');

        var _frm = $("<iframe src='" + _src + "'></iframe>");
            _frm.attr('width', "100%");
            _frm.attr('height', "100%");
            _frm.attr('frameborder', 0);
            _frm.attr('allowfullscreen', "true");

            _frm.insertAfter(_ifrm);
            _ifrm.remove();


    }

    //loadbar();

    function loadbar() {

        var ovrl = $(".ajax-loader"),
            prog = $(".loading-perc"),
            stat = $(".progstat"),
            img = document.images,
            c = 0;

        tot = img.length;



        function imgLoaded() {
            // $('html').addClass('overflow-hidden');
            c += 1;
            var perc = ((100 / tot * c) << 0) + "%";
            prog.css('width', perc);
            stat.text( perc );
            if (c === tot) return doneLoading();
        }


        function doneLoading() {


            ovrl.css('opacity', 0 );

            setTimeout(function () {
                ovrl.hide();
                $('body').removeClass('has-loader');
                $('html').removeClass('overflow-hidden');

            }, 1000);

            if( $('.svg-import').length ) {

                $('body').on('svgReady', function () {

                    setTimeout(function () {
                        $('body').trigger('ajaxDone');
                        $('body').trigger('animReady');

                    }, 100 )

                })

            } else {
                $('body').trigger('ajaxDone');
                ('body').trigger('animReady');
            }


        }


        for(var i=0; i<tot; i++) {
            var tImg     = new Image();
            tImg.onload  = imgLoaded;
            tImg.onerror = imgLoaded;
            tImg.src     = img[i].src;
        }



    }




    // LazyLoad Tester
    const observer = lozad('.lozad', {
        rootMargin: '10px 0px', // syntax similar to that of CSS Margin
        threshold: 0.1 // ratio of element convergence
    });
    observer.observe();


});
/*  Loader Ends
//--------------------------------------------------*/







//=========================================================================
//=========================================================================
//  SCROLL JUMPER FUNCTION (BETA)
//  Uses dynamic class to scroll with help of scroll magic
// class switch
//=========================================================================
//=========================================================================

jQuery(document).ready(function($) {

    var _SCROLL = true;

    // Scroller event
    // $('.__^__scroll-to.scroller-body').on('mousewheel DOMMouseScroll', function(e) {
    //    console.log(_SCROLL);
    //     var _tgtNext = $(this).next('.scroller-body'),
    //         _tgtPrev = $(this).prev('.scroller-body');
    //
    //     if ( _SCROLL ) {
    //
    //         // Chrome supports wheelDelta
    //         if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail > 0) {
    //             _SCROLL  = false;
    //             xash_scrollTo( _tgt, function(){
    //
    //                 _SCROLL = true } );
    //             console.log('scrolling up !');
    //         }
    //
    //         else {
    //             _SCROLL  = true;
    //             console.log('scrolling down !');
    //         }
    //
    //     } else {
    //         e.preventDefault();
    //     }
    //
    //     // console.log("wheelDelta ::: " + e.originalEvent.wheelDelta)
    //     // console.log("detail ::: " + e.originalEvent.detail)
    // });





    /*  Scroll TO window
    //--------------------------------------------------*/
    /***
     * Fn is based on tweenmax instead of jquery
     */

    function xash_scrollTo ( item, callback, speed, offset ) {

        var _win = $('html , body'),
            _scroll = _win.scrollTop(),
            _speed = speed || 1000,
            _pos    = $(item).offset().top,
            scroll_offset = offset  || 0
        ;




        // tw.to( _win, speed, {
        //     scrollTop: _pos + scroll_offset,
        //     onComplete: callback,
        // });
        console.log("POSITION>>>> " + _pos );
        _win.stop(true,true).animate(
            {
                scrollTop: _pos,
            }, {
                duration: _speed,
               // easing: "easeinout",

                complete: function (e) {
                    _SCROLL  = true;
                    if ( typeof callback == "function" ) {
                       // callback();

                    }

                    console.log("Done" , callback )
                }
            })

    }

});



/*  Scroll Jumper Ends
//--------------------------------------------------*/





////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

jQuery(document).ready(function ($) {

    $('body').on('ajaxDone' , function () {
        // alert("Trigger when ajax loading is done of laoding all images")
    });
    var controller = new ScrollMagic.Controller();
    // document.getElementById('header-vid').play();

   if( $('#header-vid').length ) {
       $('#header-vid').get(0).play();
   }

    if( $('.svg-import').length ) {

        $('body').on('svgReady', function () {

            setTimeout(function () {
                $('body').trigger('ajaxDone');
                $('body').trigger('animReady');

            }, 100 )

        })

    }

    //===========================================================================
    //===========================================================================
    // Add elements
    //==========================================================================
    //==========================================================================
        // Read More
        $('<span class="rm-anim-bar"/>').insertAfter($('.read-more.anim'));












    //-----------------------------------------------------------
    // Sticky Main Menu
    var stickyMenu  = new ScrollMagic.Scene({
        triggerElement: '.header-secondary',
        triggerHook : 0,
    })
        .setPin('.header-secondary')
        .setClassToggle('body', 'sticky-menu-active')
        .addTo(controller);




    // <editor-fold desc="- - - - [ Elemental based Animation ] - - - -">


    if ( $('body').hasClass('homepage')  ) {



        // <editor-fold desc="- - - - [ GENERAL ANIMATION SET COMMON OBJECT ] - - - -">
            if( !is_phone()) {

                var _animated_sec = $('.animated-sec');
                _animated_sec.each(function (i, e) {
                    var $_t = $(this);


                    var gen_scene = new ScrollMagic.Scene({
                        triggerElement: $_t,
                        triggerHook: .5,
                       // reverse: true,
                        // duration: '70%'
                    })
                        .setTween(new TimelineMax().add(anim_fadeIn($_t.find('.do-animate'), 1.75)))
                        //.addIndicators({ name : 'About left' })
                        .addTo(controller);

                });

            }
        // </editor-fold>


        // $(document).on('ready', function () {
        //     alert( "svg are ready ");
        // });




        // <editor-fold desc="- - - - [ PAGE SECTIONS ] - - - -">



        // $(window).on('load', function () {
            $('body').on('animReady', function (e, d) {
               console.log('I am ready for manipulations');
            // });

            // $('.homepage .svg-import').waitForImages({
            //     waitForAll: true,
            //     finished: function () {

                    // setTimeout(function () {



                //=========================================================================
                //=========================================================================
                //  MAIN HEADER BG ANIMATION
                //=========================================================================
                //=========================================================================
                xash_svg_ready('.svg-banner', function () {

                    if ( $('.svg-anim .area-illus').length && !is_phone() ) {


                        var $main_svg = $('.svg-anim .area-illus'),
                            $path = $('#PathSet > g > *', $main_svg),
                            $img_set = $('#IMAGES > image', $main_svg),
                            $img_scale = $('#Scale > *', $main_svg),
                            $img_park = $('#Water-Park > image', $main_svg),
                            $solid_sh = $('#HARD-SHAPE > *', $main_svg),
                            $sub_m = $('#shape-sea > g', $main_svg),
                            $h1_1 = $('.h1-1', $('.svg-anim')),
                            $h1_2 = $('.h1-2', $('.svg-anim')),
                            $h1_3 = $('.h1-3', $('.svg-anim')),
                            $h1_4 = $('.h1-4', $('.svg-anim')),
                            $h1_para = $('p.color-white.hide-device', $('.svg-anim')),
                            $heading_set_h = $h1_1.add($h1_2).add($h1_3).add($h1_4).add($h1_para),
                            $txt = $('#TEXT text', $main_svg),
                            $dlines = $('#TEXT path');

                        //--------------------------------------------
                        // set Path dasharary
                        // Need to fix this , its buggy
                        var $anch_path = $("#AnchPath-3 > *")
                            .add($("#AnchPath-3 > *"))
                            .add($("#AnchPath-2 > *"))
                            .add($("#AnchPath-4 > *"));
                        svg_pathPrepare($anch_path);
                        svg_pathPrepare($dlines);
                        // svg_pathPrepare($("#AnchPath-3 > *"));
                        // svg_pathPrepare($("#AnchPath-1 > *"));
                        // svg_pathPrepare($("#AnchPath-2 > *"));
                        // svg_pathPrepare($("#AnchPath-4 > *"));


                        // Set Scale ot 0
                        new TimelineMax().set([$img_scale, $img_park],{  scaleY: "-=.9", scaleX:"-=.9", transformOrigin:"50% 50%" , autoAlpha:0}, );


                        // Loop test


                        var tw_main_svg = new TimelineMax()
                            .to($("#PathSet > g"), 1, {autoAlpha: 1})
                            .staggerTo($path, 1, {autoAlpha: 1, strokeDashoffset: 0}, .25)
                            // ::-filling
                            .staggerTo($path, 1, {fill: "white"}, .15)
                            // ::-solidify
                            .to([$solid_sh, $sub_m], 1, {autoAlpha: 1})

                            // ::-Heading//
                            .staggerFromTo($heading_set_h, 1, {autoAlpha: 0, x: "+=200"}, {
                                autoAlpha: 1,
                                x: 0,
                                ease: Back.easeOut
                            }, .25, "txt")


                            // Scaling Objects
                            .staggerTo($img_scale, 1 , { scaleX: "+=.9" ,scaleY: "+=.9", autoAlpha: 1, ease:Back.easeOut.config(1.5)}, .05, "txt-=1" )

                            // images
                            .staggerFromTo($img_set, 1, {x: "+=100", y: "-=50"}, {
                                autoAlpha: 1,
                                x: "-=100",
                                y: "+=50"
                            }, .125, "-=.25" )


                            // Scaling Objects
                            .staggerTo($img_park, .75 , { scaleX: "+=.9" ,scaleY: "+=.9", autoAlpha: 1, ease:Back.easeOut.config(1.5)}, .215, "txt-=.5" )

                            // .fromTo($dlines, 1, {autoAlpha: 0, y: "+=150"}, {autoAlpha: 1, y: "-=150"})
                            .staggerTo($dlines, .325, {autoAlpha: 1, strokeDashoffset: 0}, .25 )
                            .fromTo($txt, 1, {autoAlpha: 0, y: "+=150"}, {autoAlpha: 1, y: "-=150"});


                        // Scene
                        setTimeout(function() {
                                var sc_main_svg = new ScrollMagic.Scene({
                                    triggerElement: $main_svg,
                                    reverse: false,
                                    offset: -200
                                })
                                    .setTween(tw_main_svg)
                                    .addTo(controller);
                            },
                            700 )


                    } // if svg-anim
                });





                //// <editor-fold defaultstate="collapsed" desc="-------[ SERVICE  ]-------">


                //============================================================
                // SERVICE SECTION
                //============================================================
                xash_svg_ready('.sc-2', function () {
                    if ($('.area-service').length && !is_phone() ) {

                        var $a_service = $('.area-service'),
                            //anchor
                            $srv_anchor = $('.read-more.anim', $a_service),
                            $srv_anch_span = $srv_anchor.next('span'),
                            $srv_h = $('h2.display-1', $a_service),
                            $srv_p = $('p.lead', $a_service),
                            $srv_crdt = $('#AnimCircles', $a_service),
                            $srv_crsolid = $('#Circles', $a_service),
                            $srv_txtnode = $('#TextNode', $a_service),
                            $lc_0 = $('#L-Path-0', $a_service),
                            $lc_1 = $('#L-Path-1', $a_service),
                            $lc_2 = $('#L-Path-2', $a_service),
                            $lc_3 = $('#L-Path-3', $a_service),
                            $ac_0 = $('#Path-0', $a_service),
                            $ac_1 = $('#Path-1', $a_service),
                            $ac_2 = $('#Path-2', $a_service),
                            $ac_3 = $('#Path-3', $a_service);


                        // Setup dash array
                        svg_pathPrepare($lc_0, 1);
                        svg_pathPrepare($lc_1, 1);
                        svg_pathPrepare($lc_2, 1);
                        svg_pathPrepare($lc_3, 1);
                        // svg_assignLength($lc_0, svg_getLength($ac_0));
                        // svg_assignLength($lc_1, svg_getLength($ac_1));
                        // svg_assignLength($lc_2, svg_getLength($ac_2));
                        // svg_assignLength($lc_3, svg_getLength($ac_3));


                        // enable dasharray
                        //  svg_pathPrepare($as_curve, true);
                        var tw_a_service = new TimelineMax()
                            .set($srv_crsolid, {autoAlpha: 0})
                            .add(anim_fadeIn($srv_h))
                            .add(anim_fadeIn($srv_p), "-=.25")
                            //.add(anim_stagger([$srv_h,$srv_p], 1 ), "-=.25")
                            .to($('.sc-2'), 1, {opacity: 1}, "-=.25")
                            .to($lc_3, 1.5, {strokeDasharray: svg_getLength($ac_3), strokeDashoffset: 0}, "-=1.75")
                            .to($lc_2, 1.5, {strokeDasharray: svg_getLength($ac_2), strokeDashoffset: 0}, "-=1.95")
                            .to($lc_1, 1.5, {strokeDasharray: svg_getLength($ac_1), strokeDashoffset: 0}, "-=1.5")
                            .to($lc_0, 1.5, {strokeDasharray: svg_getLength($ac_0), strokeDashoffset: 0}, "-=1.5")
                            //.to($srv_crsolid, 1, {autoAlpha: 1})
                            .to($srv_txtnode, 1, {autoAlpha: 1, display: "block"},"-=1.5")
                            //.to($srv_crdt, .5, {autoAlpha: 0}, "-=.15")
                            //.to( anim_fadeInUp( $('.txtNode', $srv_txtnode), 1, .5 ))
                            .staggerFrom($('g[id*="Lbl-"]', $srv_txtnode), .25, {x: -30, autoAlpha: 0}, .125)
                            .add(read_more($srv_anchor));

                        // .set($as_curve, {strokeWidth: 90, transformOrigin:"50% 50%"})
                        // .to($as_curve, 1.5, { strokeDashoffset: 0, ease:Linear.easeNone})
                        // .to($as_curve, 2.5, {strokeWidth: 10, strokeDasharray: 200, autoAlpha: .5})
                        // .fromTo($as_curve, 15, {rotation: 0},{ rotation: 90 ,   repeat: -1 });


                        var scn_service = new ScrollMagic.Scene({
                            triggerElement: $a_service,
                            triggerHook: .5,
                            // reverse: true
                        })
                        // .addIndicators({ name : 'About left' })
                            .setTween(tw_a_service)
                            .addTo(controller);


                    } // if area-service
                });


                // </editor-fold>


                // ==========================================================================================
                // ==========================================================================================
                // ABOUT ALPINE
                // ==========================================================================================
                // ==========================================================================================
                if ($('.block .section.about-alpine').length && !is_phone() ) {


                    var $a_abt_alpine = $('.block .section.about-alpine'),
                        $h1_abt = $('.sec-heading .ele-1', $a_abt_alpine),
                        $h2_abt = $('.sec-heading .ele-2', $a_abt_alpine),
                        $ul_abt = $('ul.item-list li', $a_abt_alpine),
                        $an_abt = $('.read-more.anim', $a_abt_alpine),
                        $side_abt = $('.box-diag .abt-side-anim', $a_abt_alpine),
                        $misc_abt = $side_abt.add($an_abt),
                        $sidebox_abt = $('.box-bg', $a_abt_alpine),
                        $sidebox_s_abt = $('.box-bg-pre', $a_abt_alpine),
                        $portcall   = $('*[data-figure="portcall"]', $a_abt_alpine),
                        $kitty      = $('*[data-figure="kitty"]', $a_abt_alpine),
                        $customer   = $('*[data-figure="customer"]', $a_abt_alpine),
                        $import     = $('*[data-figure="import"]', $a_abt_alpine),
                        $export     = $('*[data-figure="export"]', $a_abt_alpine),
                        $product     = $('*[data-figure="product"]', $a_abt_alpine),
                        $kitty_val  = $kitty.text(),
                        $portcall_val = $portcall.text(),
                        $customer_val = $customer.text(),
                        $import_val = $import.text(),
                        $export_val = $export.text(),
                        $product_val = $product.text(),

                        $init_val = {val: 0};


                    // set text to 0;
                    $([$kitty,$portcall, $customer, $import, $export, $product]).html("0");
                    // $portcall.html("0");
                    // $customer.html("0");


                    // Initials
                    var $init_abt_alp = new TimelineMax()
                        .set($ul_abt, {x: -300, autoAlpha: 0})
                        .set($misc_abt, { autoAlpha: 0 })
                        .set($sidebox_abt, {autoAlpha: 0, height: 0, scale: 0, rotation: -125});

                    // Tween
                    var $tw_abt_alpine = new TimelineMax()

                        .add(anim_fadeIn($h1_abt, .75), "dd")
                        .add(anim_fadeIn($h2_abt), "dd-=1.25)")
                        .to($sidebox_s_abt, 2, {right: "100vw", ease: Power3.easeInOut}, "-=.25")
                        .to($sidebox_abt, 1.25, {autoAlpha: 1, rotation: 45, scale: 1, height: "auto"}, "-=1.5")
                        .staggerFromTo($side_abt, .75, {y: 200, autoAlpha: 0}, {y: 0, autoAlpha: 1}, 0.25)

                       // .add(tween_counter($portcall, $portcall_val),"+=.25")
                        .to( $init_val , 3, {
                            val:$portcall_val,
                            roundProps:"val",
                            onUpdate:function(){
                                $portcall.html($init_val.val)
                            }
                        }, "-=1.5")
                        .to( $init_val , 3, {
                            val:$customer_val,
                            roundProps:"val",
                            onUpdate:function(){
                                $customer.html($init_val.val)
                            }
                        }, "-=2.75")
                        .to( $init_val , 3, {
                            val:$kitty_val,
                            roundProps:"val",
                            onUpdate:function(){
                                $kitty.html($init_val.val)
                            }
                        }, "-=3.15")
                        .to( $init_val , 3, {
                            val:$import_val,
                            roundProps:"val",
                            onUpdate:function(){
                                $import.html($init_val.val)
                            }
                        }, "-=3.75")
                        .to( $init_val , 3, {
                            val:$export_val,
                            roundProps:"val",
                            onUpdate:function(){
                                $export.html($init_val.val)
                            }
                        }, "-=4")
                        .to( $init_val , 3, {
                        val:$product_val,
                        roundProps:"val",
                        onUpdate:function(){
                            $product.html($init_val.val)
                        }
                    }, "-=4")

                        .staggerTo($ul_abt, .75, {x: 0, autoAlpha: 1}, 0.25)
                        .add(read_more($an_abt, 'left'), "-=1.5");


                    //scene
                    var $sc_abt_alpine = new ScrollMagic.Scene({
                        triggerElement: $a_abt_alpine,
                        triggerHook: .5,
                        //reverse: true
                    })
                    // .addIndicators({ name : 'About ALPINE' })
                        .setTween($tw_abt_alpine)
                        .addTo(controller);

                } //   if about-alpine


                //=========================================================================
                //=========================================================================
                //  PROJECT AREA
                //=========================================================================
                //=========================================================================
                if ($('.area-project.section').length && !is_phone() ) {


                    var $a_project = $('.block .area-project.section'),
                        $h1_prj = $('.display-1', $a_project),
                        $ul = $('.pager-stripe-wrapper', $a_project),
                        $ul_link = $('li', $ul),
                        $paralex_1 = $('.bg-parallex-custom.p-1', $a_project),
                        $paralex_2 = $('.bg-parallex-custom.p-2', $a_project),
                        $slider_cont = $('.prj-slider-box', $a_project),
                        $slider_left = $('.row.mc .side-left', $slider_cont),
                        $slider_right = $('.row.mc .side-right', $slider_cont);


                    // Tween
                    var $tw_prj = new TimelineMax()
                        .set([$ul_link], {autoAlpha: 0, x: -100})
                        .fromTo($paralex_1, .5, {y: "+=20%", ease: Power0.easeNone}, {y: "-=25%"}, "-=.35")
                        .fromTo($paralex_2, .5, {y: "+=20%", ease: Power0.easeNone}, {y: "-=25%"}, "-=.25")
                        .staggerFrom([$h1_prj, $slider_left, $slider_right], .75, {autoAlpha: 0, y: "300%"}, "-=.15")
                        .to($ul, 1, {css: {className: '+=focused'}})
                        .staggerTo($ul_link, 1, {autoAlpha: 1, x: 0}, "-=.5");


                    // @todo, fix this parallex  area
                    //     .add( parallex_custom($paralex_1))
                    //     .add( parallex_custom($paralex_2));


                    //scene
                    var $sc_prj = new ScrollMagic.Scene({
                        triggerElement: $a_project,
                        triggerHook: .75,
                        //reverse: true,
                        // duration :"100%"
                    })
                    //.addIndicators({ name : 'Project' })
                        .setTween($tw_prj)
                        .addTo(controller);

                } // if project section


                //=========================================================================
                //=========================================================================
                //  NEWS AREA
                //=========================================================================
                //=========================================================================
                if ($('.area-news-updates.section') && !is_phone() ) {


                    var $a_news_test = $('.area-news-updates.section'),
                        $tsmn = $('.testi-wrapper', $a_news_test),
                        $tsmn_heading = $('h2', $tsmn),
                        $tsmn_cont = $('.slider-box', $tsmn),
                        $tsmn_btn = $('.pager-btn', $tsmn),

                        $news = $('.news-wrapper', $a_news_test),
                        $news_heading = $('.news-title', $a_news_test),
                        $news_item = $('ul li', $a_news_test),
                        $anch_news = $('.read-more', $a_news_test),
                        $all_itm_news = $news_heading.add($news_item).add($anch_news);


                    //------------------------------------------------
                    // tween
                    //------------------------------------------------
                    var $tw_news_update = new TimelineMax()
                        .set([$tsmn_heading, $tsmn_cont, $tsmn_btn], {autoAlpha: 0})
                        .to($tsmn, 1, {css: {className: '+=active'}})
                        .staggerFromTo([$tsmn_heading, $tsmn_cont, $tsmn_btn], .75, {
                            autoAlpha: 0,
                            y: "+=300%"
                        }, {autoAlpha: 1, y: "0%"}, "+=.75")
                        .staggerFrom($all_itm_news, 1, {autoAlpha: 0, y: 300,}, .125);


                    //------------------------------------------------
                    // Scene
                    //------------------------------------------------
                    var $sc_news_update = new ScrollMagic.Scene({
                        triggerElement: $a_news_test,
                        triggerHook: .75,
                        //reverse: true,
                        // duration :"100%"
                    })
                    // .addIndicators({ name : 'News Update' })
                        .setTween($tw_news_update)
                        .addTo(controller);


                } // area-news


                    // },50 )// timeout
           //  }

        })  // window load event









        // </editor-fold>


        // </editor-fold>





    }  // If Homepage


// <editor-fold desc="- - - - [ LANDING PAGES ] - - - -">
	    //=========================================================================
	    //=========================================================================
	    //  // PORT INFORMATION
	    //=========================================================================
	    //=========================================================================

         if ( $('.page-port-info').length && !is_phone() ) {

             if ( $('.page-port-info .sticky-wrapper').length ) {

                 // Dynamic Sticky heading and content
                 var $_ppi_sticky_wrap = $('.page-port-info .sticky-wrapper');

                 $($_ppi_sticky_wrap).each(function (i,v) {
                     var $_t  = $(this),
                         $_sticker = $('.sticker', $_t);


                     var sc_sticky_comm = new ScrollMagic.Scene({
                         triggerElement: $_t,
                         triggerHook: .1,
                         duration : $_t.outerHeight(true)//"100%"
                     })
                         //.addIndicators({name: "Heading of " + $_t.attr('css')})
                         .setPin($_sticker, {pushFollowers:true}).addTo(controller)
                 })
             }





         }





         //=========================================================================
         //=========================================================================
         //  SERVICE LANDING PAGE
         //=========================================================================
         //=========================================================================
        if( $('.page-service').length  && !is_phone() ) {

            var $a_srv_wrap = $('.content-services'),
                $a_sc_sec = $('.service-block' , $a_srv_wrap );

                var a_sc_sec_tl_tmp = new TimelineMax()
                    .set($('.content > *'), {y:"+=250", autoAlpha: 0})
                    .set($('.srv-icon'), {x:"-=250", autoAlpha: 0});

            $a_sc_sec.each(function(i,v) {

                var $_a_t = $(this),
                    $hh     = $_a_t.find('.hh'),
                    $bh     = $_a_t.find('.bh'),
                    $ic     = $('.srv-icon', $_a_t),
                    $nm     = $('.srv-num,.srv-icon', $_a_t),
                    $_h1    = $('.srv-heading', $_a_t),
                    $_cn    = $('.content p', $_a_t),
                    $_all_itm = $($_cn).add($_h1);/*.add($nm)*/;

                    $tw_a_sc = new TimelineMax();

                $tw_a_sc.fromTo($hh, 1, {y: "50%", ease:Power0.easeNone }, {y:"-30%"}, )
                        .fromTo($bh, 1, {y: "30%", ease:Power0.easeNone }, {y:"-15%"}, );


                $tw_a_sc_pop = new TimelineMax()
                    .to($nm, 1.25, {x: "0%", autoAlpha:1 , ease: Back.easeOut })
                    .staggerTo($_all_itm, .5 , { y:"0%", autoAlpha:1, ease:Power1.easeInOut }, .175,"-=.4" )



                // Parallex
                var $sc_srv  = new ScrollMagic.Scene({
                    triggerElement: $_a_t,
                    duration: "200%",
                    triggerHook: .75

                })
                   // .addIndicators({name:'ddpn'})
                    .setTween($tw_a_sc)
                    .addTo(controller);


                // Fade inx
                var $sc_srv  = new ScrollMagic.Scene({
                    triggerElement: $_a_t,
                    //duration: "100%",
                    triggerHook: .5

                })
                   // .addIndicators({name:'pin'})
                    .setTween($tw_a_sc_pop)
                    .addTo(controller)
            });

            //---------------------------------------------
            // Parallex stuff
            var _srv_prlx = new ScrollMagic.Scene({
                triggerElement: $('#wrapper'),
                triggerHook:0,
                duration: $('#wrapper').height()

            })
                .setTween( new TimelineMax().fromTo($('#wrapper'), 1 , {backgroundPosition: "center 120px"}, {backgroundPosition: "center -600px"}))
                .addTo(controller)





        }





        //=========================================================================
        //=========================================================================
        //  Page About Us
        //=========================================================================
        //=========================================================================
        if( $('.page-about-us').length  && !is_phone() ) {

            // Lower Body Huge Illustration
            $('body').on('svgReady', function () {

                if( $('.about-illus').length  && !is_phone() ) {

                    var abt_ill = $('.about-illus'),
                        abt_path_1 = $('#PrimPath', abt_ill),
                        //abt_path_2 = $('#abt-line-2', abt_ill),
                        abt_curve  = $('#SecPath', abt_ill),
                        abt_data = $('#abt-data  g[id*="TxtNode-"]', abt_ill ),
                        tag_item = $('#Tag > *', abt_ill),
                        all_paths = abt_curve.add(abt_path_1);



                    // Reset Paths
                    svg_pathPrepare(all_paths);

                    // set opacity
                    $(abt_data).css({
                        opacity: 0,
                       //transformOrigin:"center bottom"
                    });

                   // tag_item.css({ opacity: 0 });


                    $tw_abt_us_illus = new TimelineMax()
                       //.to( abt_path_2, 1 , { strokeDashoffset: 0 } /*, "start " */)
                        .to( abt_path_1, 2 , { strokeDashoffset: 0 }, "start" )
                        .to( abt_curve, 4 , { strokeDashoffset: 10, ease:Power1.easeOut }, "+=.25" )
                        // .add(new TimelineMax.staggerTo( abt_data, 1, { y:"+=100%", autoAlpha:1 }, .15), "start")
                        .staggerFromTo( abt_data, 0.25, {scale:0, autoAlpha:0, transformOrigin:"50% 100%", ease:Back.easeOut.config(1.2) }, { scale:1, autoAlpha:1 } , 1 , "start-=2.35" )
                        //.add( new TimelineMax().staggerFromTo( abt_data, 0.25, {scale:0, autoAlpha:0,transformOrigin:"50% 100%", ease:Back.easeOut.config(1.2) }, { scale:1, autoAlpha:1 } , .25 ), "start-=2.15")
                        //.staggerFromTo( tag_item,1, { transformOrigin:"50% 50%", x:"-=100", autoAlpha:0 }, { x:"0", autoAlpha:1 }, .25, "start+=1" )
                        .staggerFrom( tag_item,1, {  x:"-=100", autoAlpha:0 }, .25 , "-=4.525" );


                    $sc_abt_us_illus = new ScrollMagic.Scene({
                        triggerElement: $('.about-illus'),
                        triggerHook: .2,
                        offset: -500,
                        duration: $('.about-illus').outerHeight() * 0.9 //"140%"

                    })
                        // .addIndicators({name:'about illus'})
                        .setTween($tw_abt_us_illus)
                        .addTo(controller)

                }
            });



            // Header Animation
            //$('body').on('ajaxDone', function() {

                if( $('.about-top-anim-wrapper').length  && !is_phone() ) {

                    var _abt_taw = $('.about-top-anim-wrapper'),
                        _abt_h_txt_wrap = $('.text-box h2', _abt_taw ),
                        _abt_h_txt = $('span', _abt_h_txt_wrap ),
                        _abt_count_1 = $('.text-box.box-prime .counter-text', _abt_taw ),
                        _abt_count_2 = $('.text-box.box-sec .counter-text', _abt_taw ),
                        _abt_count_prd = $('.text-box.box-product .counter-text', _abt_taw ),
                        _abt_count_imp = $('.text-box.box-import .counter-text', _abt_taw ),
                        _abt_count_exp = $('.text-box.box-export .counter-text', _abt_taw )

                        _country_count = { val: 0 },_prd_count = { val: 0 },_imp_count = { val: 0 },_exp_count = { val: 0 };
                        var _ves_count = { val: 0 };
                        var _abt_h_img = $('.img-box', _abt_taw),
                        _vas_update = parseInt( _abt_count_1.text()),
                         _prd_update = parseInt(_abt_count_prd.text()),
                        _exp_update = parseInt(_abt_count_exp.text()),
                        _imp_update = parseInt(_abt_count_imp.text()),
                        _country_update = parseInt(_abt_count_2.text());

                        $(_abt_count_1).add([_abt_count_2,_abt_count_prd,_abt_count_imp,_abt_count_exp]).html("0");

                    var tw_abt_h_anim = new TimelineMax ()
                        .addLabel("startSlide", 0 )
                        .staggerFromTo(_abt_h_txt_wrap, .1 , { autoAlpha:0, y:"+=10%" }, { autoAlpha:1 , y:"0%"}, .13, "startSlide" )

                        // Counter Begins

                        .to( _ves_count, 3, {
                            val:_vas_update,
                            roundProps:"val",
                            onUpdate:function(){
                                    _abt_count_1.html(_ves_count.val)
                                }
                            },"startSlide-=2")

                        .to( _ves_count, 3, { val:_country_update, roundProps:"val",
                            onUpdate:function(){
                            _abt_count_2.html(_ves_count.val)
                        }},"-=3")


                        .to( _prd_count, 3, { val:_prd_update, roundProps:"val",
                            onUpdate:function(){
                                _abt_count_prd.html(_prd_count.val)
                            }},"-=3")


                        .to( _imp_count, 3, { val:_imp_update, roundProps:"val",
                            onUpdate:function(){
                                _abt_count_imp.html(_imp_count.val)
                            }},"-=3.2")


                        .to( _exp_count, 3, { val:_exp_update, roundProps:"val",
                            onUpdate:function(){
                                _abt_count_exp.html(_exp_count.val)
                            }},"-=3.7")


                        .fromTo( _abt_h_img , 5, { autoAlpha: 1, x:"+=200%",  eease:Sine.easeInOut }, { autoAlpha:1 , x:"0%"}, "startSlide-=1")
                        //.to( _abt_h_img , 10, { x:"-=70%",  ease:Sine.easeOut }, "startSlide-=.5");


                    var $sc_abt_header_anim = new ScrollMagic.Scene({
                        triggerElement: _abt_taw,
                        triggerHook: 'onStart'
                    })
                        .setTween(tw_abt_h_anim)
                        .addTo(controller)
                }
          //  });


        }   // $('.page-about-us')

// </editor-fold>






    //// <editor-fold defaultstate="collapsed" desc="-------[ Auto Animated Styles ]-------">


        // Automated Animated Elements based on css classes
        if( $('.auto-anim').length ) {

            var _auto_anim_div = $('.auto-anim');

            _auto_anim_div.each( function( i, e) {
                var $_t = $(this),
                    $tgt_object = $('.stagger', $_t);

                   // console.log("ADADFADFAFAFA" , i )


                var gen_scene = new ScrollMagic.Scene({
                    triggerElement: $_t,
                    triggerHook: .65,
                    reverse : true,
                    // duration: '70%'
                })
                    .setTween( anim_stagger( $tgt_object , 1, 0 ) )
                    //.addIndicators({ name : 'About left' })
                    .addTo(controller);

            });


        }


    // </editor-fold>












        if( $('.anim-wrap-left').length ) {

            var $tttest = new ScrollMagic.Scene({
                triggerElement : $('.anim-wrap-left'),
                triggerHook: .75
            })
                .setTween( anim_fadeInUp( $('.col-md-7 .pr p') ) )
                .addTo(controller);



            var $card_slidetest = new ScrollMagic.Scene({
                triggerElement: $('.card.square.no-shadow'),
                triggerHook: .5
            })
                .setTween(anim_slideUp($('.card.square.no-shadow img')))
                .addTo(controller)
        }




    // </editor-fold>





    
    // <editor-fold desc="- - - - [ General Tweens and Animations ] - - - -">


        //=========================================================================
        //=========================================================================
        // Global Anims
        //=========================================================================
        //=========================================================================
        if ( $('.bg-anchor').length ) {
            var $_bg_anchor = $('.bg-anchor'),
                $_child_1   = $('.img-container'),


                $tw_bg_anchor = new TimelineMax()
                    .fromTo( $_child_1, 1, { y: "30%", ease:Power0.easeNone}, {y:"-30%"});



            var $bg_anchor_prlx = new ScrollMagic.Scene({
                triggerElement: $_bg_anchor,
                duration: "100%"
            })
                .setTween($tw_bg_anchor)
                .addTo(controller)

        }




        // project ship
        if ( $('.project-tag-line').length ) {

            var $_hb_ship = $('.project-tag-line'),
                $_hb_ship_items = $('h2 span', $_hb_ship),

                $tw_ship_scroll = new TimelineMax();



            $tw_ship_scroll.from($_hb_ship, 2, {backgroundPosition: "-600px center", ease:Power3.easeOut })
                .staggerFrom( $_hb_ship_items, .5, {x: _lang("10%" , 2) , autoAlpha: 0 }, .15, "-=1.5" );

            var $sc_header_banner_ship = new ScrollMagic.Scene({
                triggerHook: .75,
                triggerElement : $_hb_ship
            })
                .setTween($tw_ship_scroll)
                .addTo(controller);

        }




        // Banner slider
        if ( $('#header-wrapper .banner-wrapper').length ) {
            var $_header_banner_ = $('#header-wrapper .banner-wrapper'),
                $_banner_items = $('.container:first', $_header_banner_);

            var $sc_header_banner_prlx = new ScrollMagic.Scene({
                duration: '100%',
                triggerHook: 0,
                triggerElement : $_header_banner_
            })
                .setTween(TweenMax.fromTo($_banner_items, 1, {y: "0", ease:Power0.easeNone}, {y: "+=200", autoAlpha: .3}))
                .addTo(controller);

        }








    // Block Quotes
    	var $bqs = $('.float-box');
        if ( $bqs.length ) {
            $.each( $bqs, function (i,v) {
                var $_t = $(this);
                var _before = $(':before', $_t);
                var bq_scene = new ScrollMagic.Scene({
                    duration: "100%",
                    triggerHook: .9,
                    triggerElement: $_t,
                    offset: 100
                })
                   // .addIndicators({name: "float box"})
                    .setTween(TweenMax.fromTo( $_t, 1, { y: "+10%", ease:Power1.easeInOut }, {y: "-10%"} ) )
                    .addTo(controller)
            })
        }


        /// Stagger Anim General
        var fadeInItem = $('.anim-stg-fadeInUp');
        if ( fadeInItem.length ) {

            $.each( fadeInItem, function (i,v) {

                var $_t = $(this),
                    $_chld = $('> *' , $_t);

                var fd_scene = new ScrollMagic.Scene({

                    triggerHook: .65,
                    triggerElement: $_t,
                    offset: 100

                })
                // .addIndicators({name: "float box"})
                    .setTween( anim_fadeInUp ($_chld, .75, .15 ))
                    .addTo(controller)
            })

        }





        /*  Tweens --
        //--------------------------------------------------*/
        var tw_item_to_scale = $('.tween-scale');
        if ( tw_item_to_scale.length ) {

            $.each(tw_item_to_scale, function (i, v) {
                var $tw_i = $(this);
                $t = new TimelineMax();
                //TweenMax.set( $tw_i, {x:"-50%"});
                $t.fromTo($tw_i, 4, { ease:Power0.easeNone,  }, { scale:"2%", repeat:-1, repeatDelay:1, yoyo:true} );

                if ( $tw_i.hasClass('repeat') ) {
                    $t.play();
                }

            })

        }



        // Need to make Pure CSS anims
        var tw_item_to_left = $('.tween-left');
        if ( tw_item_to_left.length ) {
            $.each(tw_item_to_left, function (i, v) {
                var $tw_i = $(this);
                $t = new TimelineMax();
                //$t.set( $tw_i, {x:"20%"})
                var  _x = _lang("-10%", 2 );
                $t.from($tw_i, 4,  { x: _lang("-10%", 2 ), repeat:-1, repeatDelay:3, yoyo:true } );
                if ( $tw_i.hasClass('repeat') ) {
                    $t.play();
                }
            })
        }




        /*  Parallex background
        //----------------------------------------------------------------------------------*/
        var tw_item_parallex = $('.bg-parallex');
        if ( tw_item_parallex.length  && !is_phone() ) {
            $.each(tw_item_parallex, function (i, v) {
                var $tw_i = $(this),
                    sc_parallex = new ScrollMagic.Scene({
                        triggerElement: $tw_i,
                        duration: "100%",
                        triggerHook: .95
                    });
                $t = new TimelineMax()
                    .fromTo( $tw_i, 1 , {y: "20%" , ease: Power0.easeNone}, {y:"-22%" } );
               // $t.fromTo($tw_i, 1, { ease:Power0.easeNone,  }, { scale:"2%", repeat:-1, repeatDelay:1, yoyo:true} )
                sc_parallex.setTween($t)
                    //.addIndicators({name: 'parallex'})
                    .addTo(controller)


            })
        }

        //==================================================================================
    // </editor-fold>	

    



    // News Tickers

    jQuery('.slider-news').slick({
        slidesToShow:1,
        vertical: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        //variableWidth: true,
        cssEase: "ease-in-out"
    });


    jQuery('.slider-news').on('init', function () {
        $('.slider-news').removeClass('hide');
    });




    // <editor-fold desc="- - - - [ Util Fn ] - - - -">

        //=========================================================================
        //=========================================================================
        //  CHECK IF SVG IS RENDERED AND READY FOR ANIM
        //=========================================================================
        //=========================================================================
        /**
         * Recursive fn to check of svg is ready for animation
         * by checking animated svg class and remove class which is ready
         * @param $svg string class/ID
         * */

        function xash_svg_ready ( $svg, callback ) {

          //  debugger;

            if ( typeof callback !== 'function' &&  $($svg).length <= 0 )
                return;

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
                    }, 200 );

                     return false;
                 }

            } else {
                // go back!
                window.clearTimeout(_tmp_svg_test);
                console.log( "SVG " + $svg + " Else Statement" );
                _tmp_svg_test = window.setTimeout(function () {
                    xash_svg_ready($svg, callback )
                }, 200 );

                return false;
            }

            //return true;
        }


    // <editor-fold desc="- - - - [ Standard Tweens and Effects ] - - - -">
    // Read More animation
    function read_more ($ele, $dir) {
            var $_n = $ele.next('span'),
                $_a = $ele,
                perc = $dir ? "250%" : "-250%",
                loom_tm;
                return  loop_tm = new TimelineMax()
                .fromTo($_n, 1, { x: perc ,autoAlpha:1, width:700}, {x:"+150%", autoAlpha: 1, width: 0 }, 1.5 )
                .to( $_a, .25, {autoAlpha: 1},"-=.5");



    }







    function anim_swipeUp ($parent, $child, $time, $increment) {

        var tw = new TimelineMax(),
            $increment = $increment || "-=.30",
            $time = $time ||  .75;

        if ( ! $parent.length ) return tw;
        var org_height = $parent.outerHeight();

        tw.set($parent, { height: "2rem" });
        tw.from($parent, $time, { x: _lang("-120%", 2 ), ease:Power4.easeInOut } )
            .to($parent, $time * 0.75, {height: org_height, ease:Power4.easeInOut}, $increment);

        if ( $child.length ) {
            tw.staggerFrom( $child, $time, {y: "+=300", autoAlpha: 0, ease:Power4.easeOut}, $time / 5 /*("-=" + $time / 3 ) */);
        }

        return tw;
    }





    // Fade In UP
    function anim_fadeIn ( item , time , delay ) {
        // delay = delay || .5;
        var tw = anim_base(item, time, delay );
        return tw;
    }



    // Fade In UP
    function anim_fadeInUp ( item , time , delay ) {
       // delay = delay || .5;
        var tw = anim_base(item, time, delay );
        return tw;
    }





    function anim_slideUp ( $item, $time, $delay ) {

        var prop = {
            y: 0,
            ease:Power2.easeInOut,
        };

        var tw = anim_base($item, $time, $delay, prop, true );
        return tw;
    }




    function parallex_custom( $item, $min, $max) {
        var tw_para = new TimelineMax(),
            $min = "50%",
            $max = "-25%";

        if ( $item.attr('data-para-min') !== undefined || $item.attr('data-para-min') !== null  ) {
            $min = $.trim($item.attr('data-para-min'));
        }

        if ( $item.attr('data-para-max') !== undefined || $item.attr('data-para-max') !== null  ) {
            $max = $.trim($item.attr('data-para-max'));
        }

        tw_para.fromTo( $item, 1 , { y: $min , ease: Power0.easeNone },  { y:$max } );
        return tw_para;
    }


    // Base Anim Fn, for general slides and woooshooos
    // Fade In
    // @update, added string param as direction preset in case of directions
    /***
     *
     * @param $item
     * @param $time
     * @param $delay
     * @param $props  string | jSON
     * @param $reverse
     * @returns {TimelineMax}
     */
    function anim_base ( $item , $time , $delay, $props, $reverse ) {

        var tw = new TimelineMax();

            // Directional based
            // Based on DATA TAG, check if item has data tag.
            // if (typeof $props === "string") {
            if( $item.attr('data-dir')) {
                var $attr = $item.attr('data-dir');
                console.log( $attr);
                $attr = $.trim($attr.toLowerCase());

                if ($attr === "up") {
                    $props = { y: "+=200%", autoAlpha: 0, ease:Power2.easeInOut };
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

            // console.log('PRPOPPER\n' + $attr);

            if ($props == null || $props == undefined ){
                $props = { y: "+200", autoAlpha: 0, ease:Power2.easeInOut };
            }

            // $props =
            $reverse = $reverse || false;

        if ( $item.length == 0 ) return tw;

        $time = $time || 1;
        $delay = $delay || $time / 8;


        if ($reverse) {
            tw.staggerTo( $item, $time, $props, $delay );
        } else {
            tw.staggerFrom($item, $time, $props, $delay );
        }

        return tw;
    }





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

                var $attr = $item.attr('data-dir');

                $attr = $.trim( $attr.toLowerCase() );

                if ($attr === "up") {
                    $props = { y: "+=200%", autoAlpha: 0, ease:Power2.easeInOut };
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




    // counter for tweenmax
    function tween_counter ( $target, $max, $initial , $time ) {
        var tween = new TimelineMax(),
            initial = {val : $initial } || {val: 0 },
            time = $time || 3;

        tween.to( initial, time , {
            val:parseInt($max),
            roundProps:"val",
            onUpdate:function(){
                $($target).html(initial.val)
            }
        });

        return tween;
    }




    // </editor-fold>











    function animated_box_border ( option ) {
        option = option || {};

        var ele = option.target || null,
            height = option.height || "100%",
            width = option.width || "100%",
            init_height = option.init_height || 40,
            init_width  = option.init_width || 400,
            bg_target = option.bg || "rgba(255,255,255,0)",
            border  = option.border || 60,
            speed   = option.speed || .5,
            border_speed = option.border_speed || .5,
            init    = 0,
            inc     = option.increment || "+=.05",
            fill  = option.fill || false,
            _tl     = new TimelineMax();

        _tl.to( ele, speed, { height: height, easing:Power3.easeOut }, init );
        // .to(ele, speed, {width: width}, inc )

        if ( ! fill ) {
           _tl.add(TweenMax.to( ele, border_speed , { backgroundColor: bg_target, borderWidth: border } ), inc );
        }

        return _tl;

    }



    //easy interface get svg length
    function svg_getLength ($el) {
        // error handing
       // if ( $el[0] ) {
            //console.log("Item is being ass ::", $el);
        if( checkIE() ) return 2500;

        return $($el).get(0).getTotalLength();


            if ( ! $el[0].getTotalLength() == undefined ) {

            }
        //}
         else {
            return $el.get(0).getTotalLength();
         }
        return false;

    }



    // assign length to svg path
    function svg_assignLength ( $el, $length, $offset ) {
        $offset = $offset || 0;
        $($el).css("stroke-dasharray", $length);
        $($el).css("stroke-dashoffset", $length + $offset);



        return false
    }

    function __svg_pathPrepare ($el, $inv, $length) {



                var lineLength = svg_getLength($el),
                    fac = 1;
                $inv = $inv || false;

                if ($inv ) {
                    fac = fac * (-1);
                }

                $el.css("stroke-dasharray", lineLength);
                $el.css("stroke-dashoffset", lineLength * fac);



    }
// @todo Need loop fix
    function svg_pathPrepare ($elm, $inv, $length) {

        if ( $elm.length > 0 ) {

            $elm.each( function ( i , v ) {

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


    // Chnange signs for lang dependency
    // transform value for lang specific
    // mode: % , incremental or Number
    function _lang ( val, mode ) {
      
        // Mode 
        // 1: number, 
        // 2: % , 
        // 3 : increment 
        
        mode = parseInt(mode) || 1;


        var val_new = val,
            isRTL = $('body').hasClass('right');



        if ( is_rtl() ) {

          if ( mode === 1 ) {
                val_new = val * (-1);
            }
    
            
            // if its incremental apprach
            else if ( mode === 2 ) {
                val = (-1) * parseInt(val);
                val_new = val + "%";
            }



            else if ( mode === 4 ) {
                val = (-1) * parseInt(val);
                val_new = val + "deg";
            }

            else {
                var first_letter = val.charAt(0),
                    sv = parseInt( val.substr(2))
                
                if ( first_letter == "+") {
                    val_new = "-=" + sv;
                } else {
                    val_new = "+=" + sv;
                }
            }

        }

       
        return val_new;

    }




    function is_rtl () {
        return $('body').hasClass('right');
    }



    function is_phone () {
        return $('.dv-device').is(":visible");
    }



    function xash_extend_obj(dest, src) {

        for(var key in src) {
            dest[key] = src[key];
        }
        return dest;
    }











    // </editor-fold>	





}); // jQuery






 let time = 0;
 const amplitude = 0.5; // How high the object floats
 const frequency = 0.01; // How fast the object floats

 function animate() {
   requestAnimationFrame(animate);

   time += 0.1; // Increment time for continuous movement
   object.position.y = amplitude * Math.sin(time * frequency);

   renderer.render(scene, camera);
 }
 //animate();