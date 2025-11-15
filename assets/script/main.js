//#region PLUGIN REGISTRATIONS

// Register ScrollTrigger ------------------------
gsap.registerPlugin(ScrollTrigger);

// Split Text ------------------------------------
gsap.registerPlugin(SplitText);

const lenis = new Lenis();
requestAnimationFrame(function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
});

//#endregion

jQuery(document).ready(function ($) {
    //"use strict"; // Start of use strict
    // @TODO loader in % or total images

    var g_setting = {
        main_menu_items: ".navigation.top-main-menu .lv1",
        banner_wrapper: ".banner-wrapper",
    };

    // var controller = new ScrollMagic.Controller(),
    //     controller_h = new ScrollMagic.Controller({
    //         vertical: false,
    //         refreshInterval: 10
    //     });

    $.noConflict();

    //=========================================================================
    //=========================================================================
    //  INITIATE on load
    //=========================================================================
    //=========================================================================

    // $('body').on('svgImported', function() {alert("SVG IMPORTED TRIGGERED")});
    // $('body').on('_imgsLoaded', function() {alert("images Loaded triggered")});

    init_all();

    // Closes the Responsive Menu on Menu Item Click
    $(".navbar-collapse ul li a").click(function () {
        $(".navbar-toggle:visible").click();
    });

    // Toggle Menu fix
    $("ul.dropdown-menu").each(function () {
        var $a_tag = $(this).prev("a");
        $a_tag.addClass("dropdown-toggle");
        $('<span class="caret"></span>').appendTo($a_tag);
        $(this).parent("li").addClass("dropdown");
    });

    $("body").on("click", ".caret", function () {
        $(this).parents("li").toggleClass("active-menu");
    });

    // Adds button to Expander and collapsed class to it
    // Auto Expander
    if ($(".xash-collapse").length) {
        var xash_collapse_modal = $(".xash-collapse");

        xash_collapse_modal.addClass("collapsed");
        // $('.xash-collapse')

        xash_collapse_modal.each(function (i, v) {
            var $_t_col = $(this),
                _html_collapse = $_t_col.html(),
                _html_collapse_mod =
                    "<div class='xash-collapse-wrapper'><div class='xash-collapse-content'>" +
                    _html_collapse +
                    "</div></div>";

            $_t_col.html(_html_collapse_mod);

            $('<button class="xash-collapse-btn"></button>')
                .appendTo($_t_col)
                .on("click", function (e) {
                    e.preventDefault();
                    $(this).parent(".xash-collapse").toggleClass("collapsed");
                });
        });
    }

    // Product Wrapper
    //--------------------------------------------------------
    function bind_slider() {
        //return;
        //----------------------------------------------------------------------
        //--------------------- SLick General/Global Slider
        //- @Note needed to be in loop.
        var _res_phn = 768,
            _res_tbl = 1024;

        if (
            $("___.section-slider").length &&
            !$(".section-slider").hasClass("slick-initialized")
        ) {
            $(".section-slider").each(function (i, v) {
                var $_slideThis = $(this);

                var $_thumb_ctrl = $.trim($_slideThis.attr("data-slide-pager"))
                        ? $.trim($_slideThis.attr("data-slide-pager"))
                        : null,
                    num_slides = $_slideThis.attr("data-slide")
                        ? parseInt($_slideThis.attr("data-slide"))
                        : 3,
                    num_slides_phone = $_slideThis.attr("data-slide-phone")
                        ? parseInt($_slideThis.attr("data-slide-phone"))
                        : 1,
                    num_slides_tablet = $_slideThis.attr("data-slide-tablet")
                        ? parseInt($_slideThis.attr("data-slide-tablet"))
                        : 2,
                    $_thumb_parent = $.trim(
                        $_slideThis.attr("data-slide-parent")
                    )
                        ? $.trim($_slideThis.attr("data-slide-parent"))
                        : null,
                    $_arrow_desk = $.trim($_slideThis.attr("data-slide-arrow"))
                        ? false
                        : true,
                    $_thumb_static_ctrl = $.trim(
                        $_slideThis.attr("data-slide-pager-static")
                    )
                        ? $.trim($_slideThis.attr("data-slide-pager-static"))
                        : null,
                    num_slides = parseInt(num_slides),
                    breakpoint = {
                        num_dsk: num_slides,
                        num_tbl: num_slides_tablet,
                        num_phn: num_slides_phone,
                        res_phn: _res_phn,
                        res_tbl: _res_tbl,
                    };

                // check if got thumb controller
                if ($.trim($_slideThis.attr("data-slick-pager")) != "") {
                    //   $_thumb_ctrl = $('.section-slider').attr('data-slick-pager');
                }

                ///////////////////////////////////////////////////////
                // Thumbnail custom controller
                ///////////////////////////////////////////////////////
                if (!$($_thumb_ctrl).length) {
                    $_thumb_ctrl = null;
                } else {
                    $($_thumb_ctrl).slick({
                        asNavFor: $_thumb_parent,
                        // dots: false,
                        slidesToShow: 3 || $(this).attr("data-slide"),
                        slidesToScroll: 1,
                        variableWidth: true,
                        centerMode: true,
                        // focusOnSelect: true
                        //infinite: false
                    });

                    $($_thumb_ctrl)
                        .find("li")
                        .on("click", function (e) {
                            var __sld_index = $(this).attr("data-slick-index");

                            $($_thumb_parent).slick("slickGoTo", __sld_index);
                        });
                }

                // Custom static controller
                if ($($_thumb_static_ctrl).length) {
                    var _click_set = $("li", $($_thumb_static_ctrl));

                    // Get current Active Slide of slider index
                    $($_thumb_parent).on("afterChange", function (a, b, ind) {
                        var _c_ind_slide = ind;

                        _click_set
                            .removeClass("active")
                            .eq(ind)
                            .addClass("active");
                    });

                    _click_set.on("click", function (e) {
                        e.preventDefault();

                        _click_set.removeClass("active");

                        $(this).addClass("active");
                        var _st_index = $(this).index();

                        $($_thumb_parent).slick("slickGoTo", _st_index);
                    });
                }

                $_slideThis.slick({
                    slidesToShow: breakpoint.num_dsk,
                    autoplay: true,
                    asNavFor: $_thumb_ctrl,
                    // mobileFirst:true,
                    // vertical: true
                    arrows: $_arrow_desk,

                    responsive: [
                        {
                            breakpoint: breakpoint.res_tbl,
                            settings: {
                                arrows: $_arrow_desk,
                                centerMode: true,
                                centerPadding: "30px",
                                slidesToShow: breakpoint.num_tbl,
                            },
                        },
                        {
                            breakpoint: breakpoint.res_phn,
                            settings: {
                                arrows: false,
                                centerMode: true,
                                centerPadding: "0",
                                slidesToShow: breakpoint.num_phn,
                            },
                        },
                    ],
                });

                //------------------------------------------------------------
                //------------------------------------------------------------
            }); // sec each loop
            //------------------------------------------------------------
        }

        if ($(".section-slider-phone").length && is_phone()) {
            $(".section-slider-phone").each(function (i, v) {
                var $_slider_slick_phone = $(this);
                console.log(" Section Exist for Phone");

                $_slider_slick_phone.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 2000,
                });
            });
        } else if (
            $(".section-slider-phone").length &&
            $(".section-slider-phone").hasClass("slick-initialized")
        ) {
            $(".section-slider-phone").slick("unslick");
        }

        // Header slider with thumbnail paging
        //----------------------------

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

    bind_faq_item();

    // Master Init Fn
    var x_run_;

    function init_all() {
        console.log("\n---------------------------\nI ran init_all\n\n");
        //------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------
        //@todo fix this unknown bug of Trigger, sepiaweb.js, it doesnt trigger in ELSE case if svg doesnt exist, so triggering here manually

        /*
		//SVG doesn't exist
		if( !$('body .svg-import').length ) {
			$('body').trigger('svgImported');
		}
		*/
        //------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------

        x_run_ = true;

        // check all images loaded, and trigger hook on body,
        // to avoid image container height malfunction
        // _check_loaded_images();
        var $svg_r = $("#wrapper .svg-import");

        xash_svg_import($svg_r, function () {
            xash_svg_ready(null, 0, function () {
                //console.log("Import done");
                //_check_loaded_images();

                $("html")
                    .waitForImages(true)
                    .progress(function (loaded, count, success) {
                        update_loader_wrap(loaded, count);
                        //alert(loaded + ' of ' + count + ' images has ' + (success ? 'loaded' : 'failed to load') +  '.');

                        $(this).addClass("cnt-loaded");
                    })
                    .done(function () {
                        trigger_all_load();
                    });
            });
        });

        jQuery("body").on("svgImported", function () {
            console.log("Init on svgImported invoked");
        }); // svg ready event;

        var g_setting = {
            main_menu_items: ".navigation.top-main-menu .lv1",
            banner_wrapper: ".banner-wrapper",
        };

        console.log("Initiated");
        // page based anim
    }
    var wow = new WOW({
        offset: 250,
        mobile: false,
        live: true,
    });
    wow.init();

    if (x_run_) {
        $("body").on("imagesLoaded", function () {
            x_run_ = false;
            x_console("----\n IMAGES LOADED TRIGGERED \n-----")();

            loader_hide();

            // bind slider
            if (
                $("body").find(".section-slider").length ||
                $("body").find(".section-slider-phone")
            ) {
                bind_slider();
            }

            //-------------------------------------
            // bind Page Animation
            //-------------------------------------
            bind_page_anim();

            /*
			var wow = new WOW({
				offset: 250,
				mobile: false,
				live: true
			});
			*/
            // wow.init();

            //-------------------------------------
            // bind parallax
            //-------------------------------------
            bind_parallex_items();
        }); // body image loaded
    }

    //-----------------------------------------------------------------------------------
    // for bind and re-initiate purpose
    function bind_page_menu() {
        if (!is_phone() || is_phone()) {
            // Set initial State
            var $mn_itms = $(".navigation.top-main-menu .lv1 "),
                $mn_anim = new TimelineMax();

            //

            $("body").on("mouseenter", g_setting.main_menu_items, function () {
                $(this).find(".sub-menu").addClass("animate");
            });

            $("body").on("mouseleave", g_setting.main_menu_items, function () {
                $(this).find(".sub-menu").removeClass("animate");
            });

            $("body").on("click", ".menu-burger.menu-btn", function (e) {
                // clearing cache shit, it doesn't select after ajax, on same var,
                // so re-declaring it again and again --
                var __$menu_items = $(g_setting.main_menu_items);

                $mn_anim.addLabel("MNFall");

                // $mn_anim.staggerFrom( $mn_itms, .35, { x: "+=30%", autoAlpha: 0 }, .125, "MNFall-.5" );

                if ($("body").hasClass("menu-visible")) {
                    hide_menu($(g_setting.main_menu_items));
                } else {
                    // $mn_anim.set( $mn_itms, { y: "+=30%", opacity: 0 } );

                    $("body").addClass("menu-visible");

                    new TimelineMax()
                        .set(__$menu_items, { clearProps: "all" })
                        .staggerFromTo(
                            __$menu_items,
                            0.35,
                            {
                                y: "+=30%",
                                autoAlpha: 0,
                            },
                            {
                                y: "0%",
                                autoAlpha: 1,
                                //ease: Power0.easeOut
                            },
                            0.125
                        );
                }
            });
        }
    }

    //Bind Parallex header items

    function bind_parallex_items() {
        // Prevent in Phone
        if (is_phone()) {
            return;
        }

        var $_prlx_container = $(g_setting.banner_wrapper).add(
                $(".plx-container")
            ),
            $_hd_prlx_set = $(
                ".itm-plx",
                $_prlx_container
            ); /*.add('.plx-item' , $_prlx_container)*/

        $("body").on(
            "mousemove",

            //g_setting.banner_wrapper,
            $_prlx_container,

            function (e) {
                var _banner_wrap = g_setting.banner_wrapper;
                $_hd_prlx_set.each(function (el, v) {
                    var $_t = $(this),
                        _plx_dis = parseInt($_t.attr("data-parallex")),
                        _plx_dis_y =
                            $.trim($_t.attr("data-parallex-y")) != ""
                                ? parseInt($_t.attr("data-parallex-y"))
                                : 0.3,
                        _obj_plx = {
                            x: _plx_dis,
                            y: _plx_dis_y,
                        };
                    // console.log(_plx_dis);

                    parallaxIt(e, $(this), _obj_plx, _banner_wrap);
                });
            }
        );
    }

    function parallaxIt(e, target, movement, parent) {
        var $this = $(parent),
            relX = e.pageX - $this.offset().left,
            relY = e.pageY - $this.offset().top;

        TweenMax.to(target, 0.25, {
            x: ((relX - $this.width() / 2) / $this.width()) * movement.x,
            y:
                ((relY - $this.height() / 2) / $this.height()) *
                (movement.x * movement.y),
        });
    }

    function bind_faq_item() {
        if ($(".faq-wrapper").length) {
            var _fq_parent = $(".faq-wrapper");

            $("body").on("click", ".panel-title span", function (e) {
                e.preventDefault();

                var _panel = $(this).parents(".faq-heading").next();
                $(_panel).toggleClass("collapsed");
            });
        }
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

    function bind_page_anim() {
        // Prevent in Phone
        if (is_phone()) {
            return;
        }

        //#region TNZ ANIMTION HOMEPAGE
        //------------------------------------------------------------------

        //#region HOME- ABOUT US
        //------------------------------------------------------------------------
        if ($("#sec-about-home").length) {
            
			let $_sah = $("#sec-about-home");
            let $_path = $("path#illu-home-path-red", $_sah);
			const $_pin_area  = $(".abt-head-pin", $_sah);
			const $_heading_1 = $(".anim-head-1", $_sah);
			const $_heading_2 = $('.anim-head-2', $_sah).add($_heading_1);

			const $_slide_wrap = $(".side-slide-wrapper", $_sah);
			const $_slide_slides = $('.lead', $_slide_wrap);
			




			// setup length of curve dasharray
            svg_pathPrepare($_path, true);

			// Content Setup
			gsap.set($_heading_2, {
                opacity: 0,
                xPercent: "-220",
            })
			gsap.utils.toArray($_slide_slides).forEach( item => {
				gsap.set(item, {
                    //xPercent: "100%",
                    opacity: 0,
                });				
			});
			// -----------------

			

           tl_h_abt = new gsap.timeline(
               {
                   scrollTrigger: {
                       trigger: $_sah,
                       start: "top top",
                       scrub: .5,
                       //markers: true,
                       end: "bottom top",
                       pin: true,
                       pinSpacing: true,
                   },
               },
               "start"
           )
               .to(
                   $_path,
                   {
                       strokeDasharray: svg_getLength($_path),
                       strokeDashoffset: 0,
                       duration: 15,
                       ease: "power1.inOut",
                   },
                   0
               )
               .to(
                   $_heading_2,
                   { opacity: 1, xPercent: 0, stagger: 0.12, duration: 2 },
                   0.25
               )
               //  .to($_slide_wrap, {y: -300, duration: 1, ease:"back"},.5)
               .to( $_slide_slides[0], { /* xPercent: "-110",*/ opacity: 1 }, 1 )
               .to(
                   $_slide_slides[0],
                   { xPercent: "100", opacity: 0, ease: "power4.in", duration: .5, delay:10 },">1" )
               .to(
                   $_slide_slides[1],
                   { xPercent: "-100", opacity: 1, ease: "power4.in", duration: 2  }, ">.1"
               )
               .to(
                   $_slide_slides[1],
                   {xPercent: "100",opacity: 0, ease: "power4.in", duration: .5,delay:10 } ,">1"  )
               .to(
                   $_slide_slides[2],
                   { xPercent: "-200", opacity: 1, ease: "power4.in", duration: 2 },
                   //3.1
               ).to($_slide_slides[2],{delay:4}, ">1");
            
			   
              

				//tl_h_abt.play()
				

        }

        //#endregion -- About us



        //#region CLIENT SECTION

        if( $("#sec-client-home").length ) {
            let $_sch = $('#sec-client-home');
            let $_path_br = $("path#h_blue_ribbon", $_sch);
            let $_tag1 = $('.tag-1', $_sch);
            let $_tag2 = $('.tag-2', $_sch);
            let $_tag3 = $('.tag-3', $_sch);
            let $_tags = $_tag1.add($_tag2).add($_tag3);
            let $_
            $_circles = $('circle#Circle_0', $_sch).add($('circle#Circle_A', $_sch)).add($('circle#Circle_B', $_sch)).add($('circle#Circle_C', $_sch));
           //console.log(typeof($_circles))
            let $_prim_heading = SplitText.create('#sec-client-home .prime-heading', { type:"words"})
            
            // gsap.utils.toArray($_circles).forEach(item => {
                svg_pathPrepare($_circles);
            // })
            // setup length of curve dasharray
            svg_pathPrepare($_path_br);

            gsap.set($_tags, {
                opacity: 0,
                yPercent:500,
            })

            tl_h_clien = new gsap.timeline({

                scrollTrigger: {
                trigger: $_sch,
                start: "top 20%",
                scrub: .5,
                //markers: true,
                end: "bottom top",
                pin: true,
                pinSpacing: true,
                // onUpdate: (self) => console.log("progress:", self.progress),
            }

            })
            .to($_path_br, {
                strokeDasharray: svg_getLength($_path_br),
                strokeDashoffset: 0,
                duration: 10,
                ease: "power1.inOut",
            },0)
            .to($_circles, {
                strokeDasharray: svg_getLength($_circles),
                strokeDashoffset: 0,
                duration: 5,
                ease: "power1.inOut",
                stagger: .5
            }, ">-8 ")
            .to($_tags, {
                    opacity: 1,
                    yPercent: 0,
                    stagger:.7
                }, ">-8" 
            )
            .from($_prim_heading.words, {
                y: 200,
                autoAlpha: 0,
                stagger: 0.5,
                duration: 1
            }, '>-2');

        } 
        //#endregion Clients
        


        //#region TagLine
        
            if( $('#tagline-home').length) {
               $_taglines = SplitText.create('.tag-heading>span', {type:'chars'});


               $_tagTimeline = new gsap.timeline({
                    scrollTrigger: {
                        trigger: '#tagline-home',
                        start: 'top top',
                        //markers: true,                  
                    }
               }).from($_taglines.chars, {
                    y:100,
                    autoAlpha:0,
                    stagger: 0.05
               })
            }
        
        //endregion




        //#endregion
        //--------------------------------------------------------------------------------------------



        //#region Services Cards

            if( $('#service-home').length) {
                
                let $_cards = gsap.utils.toArray('.service-card');
               
                
                gsap.to('#service-home',{
                    scrollTrigger: {
                        trigger: '#service-home',
                        duration :2,
                        start: 'top s',
                        toggleActions:'play reverse play reset',
                        pin: '#tagline-home',
                        pinSpacing: false,
                    }
                })
                
                $_cards.forEach(( card , i ) => {

                    
                    gsap.fromTo( card, 
                        {
                            scale:1,
                            filter:"blur(0)"
                        }, 
                        {
                            scale: 0.8 + 0.2 * ( i / ( $_cards.length - 1)),
                            ease: 'none',
                            filter: function() {
                                if( i < ($_cards.length -1 )) {
                                    return 'blur(5px)'
                                } else { 'blur(0)'}
                            },
                        // yPercent: i * 100,
                        scrollTrigger: {
                            trigger: card,
                            start: 'top ' + (20 + (50 * i) ) ,
                            end: 'bottom 80%',
                            endTrigger: '.end-trigger',
                            scrub: 1,
                            pin: card,
                            toggleActions: 'play pause resume reset',
                           // markers: true,
                            pinSpacing : false, 
                        }
                    })
                })
                /*
                let tl = new gsap.timeline({
                    scrollTrigger: {
                        trigger:'.service-card-container',
                        start: 'top 30%',
                        markers : true,
                        pin: '#tagline-home',
                        scrub: 1,
                        pinSpacing: true
                    }
                })

              
                tl.from(".service-card", {
                    yPercent: (i) => 90 * (i + 1),
                    duration:10,
                    stagger: 10,
                    scale: .9
                },0)
                .to('.service-card', {
                    scale: .95,
                    y: -40,
                    duration: 15
                }, ">-9")
                // tl.from('.service-card', {
                //      yPercent: (i) => 0 * (i + 1), duration:10,
                // });
                */


            }

        //#endregion
        //---------------------------------------------------------------------------------------------



        // <editor-fold desc="- - - - [ ANIMATION :: Homepage ] - - - -">



        // SERVICE
        // Main Scroller of Homepage Service

        var $home_srv_wrap = $(".dir-left .srv-scroll-section"),
            $home_srv_section = $(".service-area", $home_srv_wrap);

        if ($home_srv_section.length) {
            var $paralex_srv = $(".srv-container", $home_srv_section),
                $curve_cont = $(".svg-wdt-anim", $home_srv_section),
                $tw_srv = new TimelineMax()
                    .addLabel("startSlide")
                    .fromTo(
                        $curve_cont,
                        1,
                        { width: 0 },
                        { width: "100%", ease: Power0.easeNone },
                        "startSlide"
                    )
                    .fromTo(
                        $paralex_srv,
                        1,
                        { x: "0%" },
                        { x: "-70%", ease: Power0.easeNone },
                        "startSlide"
                    );

            var $home_srv_scene = new ScrollMagic.Scene({
                triggerElement: $home_srv_wrap,
                triggerHook: 0,
                duration: "300%",
                reverse: true,
            });
            //.addIndicators({ name : 'About -- SERVICE' })
            //.setTween( $tw_srv )
            // .setPin($home_srv_section)
            //  .addTo(controller);

            //---------------------------------------------------------------------------------------------
            // Service Cards
            //---------------------------------------------------------------------------------------------
            var $_home_srv_cards = $(".srv-panel-card", $home_srv_section);

            var $dlr_1_from = val_to_perc(70),
                $dlr_1_to = val_to_perc(-80),
                $dlr_2_from = val_to_perc(40),
                $dlr_2_to = val_to_perc(-40),
                $dlr_3_from = val_to_perc(50),
                $dlr_3_to = val_to_perc(-55);

            $_home_srv_cards.each(function (i, v) {
                var $_t = $(this),
                    $_tgt_box_l1 = $(".sm-item-plx.sm-lyr-1", $_t),
                    $_tgt_box_l2 = $(".sm-item-plx.sm-lyr-2", $_t),
                    $_tgt_box_l3 = $(".sm-item-plx.sm-lyr-3", $_t),
                    $_tgt_box_l4 = $(".sm-item-plx.sm-lyr-4", $_t),
                    $sc_prlx_srv_hm = new TimelineMax();

                $sc_prlx_srv_hm.addLabel("start");
                // Layer 1
                if ($_tgt_box_l1.length) {
                    $sc_prlx_srv_hm.add(
                        TweenMax.fromTo(
                            $_tgt_box_l1,
                            1,
                            { x: "+=30%" /* ease: Power4.easeOut*/ },
                            { x: "-=40%" }
                        ),
                        "start"
                    );
                }

                // Layer 2
                if ($_tgt_box_l2.length) {
                    $sc_prlx_srv_hm.add(
                        TweenMax.fromTo(
                            $_tgt_box_l2,
                            1,
                            { x: "+=50%" /*ease: Power4.easeOut */ },
                            { x: "-=75%" }
                        ),
                        "start"
                    );
                }

                // Layer 3
                if ($_tgt_box_l3.length) {
                    $sc_prlx_srv_hm.add(
                        TweenMax.fromTo(
                            $_tgt_box_l3,
                            1,
                            { x: "+=150%" /*ease: Power4.easeOut */ },
                            { x: "-=175%" }
                        ),
                        "start-=.5"
                    );
                }

                var $sc_prlx_srv_hm_sc = new ScrollMagic.Scene({
                    triggerElement: $_t,
                    triggerHook: 0.85,
                    duration: window.outerWidth * 0.85,
                    offset: 100,
                    reverse: true,
                });
                // .addIndicators({ name : 'Horz Parax' })
                //.setTween($sc_prlx_srv_hm)
                //.addTo(controller_h)
            });
        } // if ends

        // Contact Form
        var $ele_contact_in = $(".contact-inline");
        if ($ele_contact_in.length) {
            var $bg_pop = $(".bg-pop", $ele_contact_in),
                tw_grow = new TimelineMax().from($bg_pop, 0.5, {
                    css: { scaleX: 0.85, scaleY: 0.85 },
                });

            var $sc_hm_ele_contact = new ScrollMagic.Scene({
                triggerElement: $ele_contact_in,
                triggerHook: 0.5,
                //duration: "60%",
            });
            // .addIndicators({name: "Contact Information"})
            //   .setTween(tw_grow)
            //   .addTo(controller)
        }

        // </editor-fold>

        // <editor-fold desc="- - - - [ ANIMATION Page About Us ] - - - -">

        // Page About us
        // ---------------------------------------------------------------------------------------------
        if ($("body").hasClass("page-about-us")) {
            var $_anim_box = $("body .anim-circle-wrap .box-anim"),
                $_tw_box = new TimelineMax().staggerTo(
                    $_anim_box,
                    2,
                    { width: "100%", ease: Power0.easeIn },
                    1.5,
                    "+=1.5"
                );

            /*    
            var $sc_abt_us = new ScrollMagic.Scene({
                triggerElement: $(g_setting.banner_wrapper),
                triggerHook: 0,
                duration: "100%",
            })
                .setTween($_anim_box)
                .addTo(controller);
            */
        }
        // </editor-fold>
        // Page About Ends ---------------------------------------------------

        // <editor-fold desc="- - - - [ ANIMATION Page Contactus ] - - - -">

        // Page Contact Us
        // ----------------------------------------------------------------------------------------------
        if ($("body").hasClass("page-contact-us")) {
            var $_cform = $(".form-wrapper"),
                $_c_map = $(".map-wrapper"),
                $_c_map_w = $(g_setting.banner_wrapper);

            var $_tw_cs_mp = new TimelineMax().staggerFromTo(
                $_cform,
                1,
                { y: "-=10%", ease: Power0.easeIn },
                { y: "+=10%" },
                1.5,
                "+=.5"
            );

            var $sc_contact_us = new ScrollMagic.Scene({
                triggerElement: $_c_map_w,
                triggerHook: 0.25,
                duration: "100%",
            })
                .setTween($_tw_cs_mp)
                .addTo(controller);
        }

        // Page Contact Us Ends ---------------------------------------------------
        // </editor-fold>
        // Page Contact Us Ends ---------------------------------------------------

        // <editor-fold desc="- - - - [ ANIMATION Page Portfolio ] - - - -">

        // Page PortFolio Stuff
        // ----------------------------------------------------------------------------------------------
        if ($("body").hasClass("page-showcase")) {
            // header animation
            if ($("body .bg-plate .animated-box").length) {
                var $_sc_header = $("body .bg-plate"),
                    $_sc_header_box1 = $(".animated-box.b-1", $_sc_header),
                    $_sc_header_box2 = $(".animated-box.b-2", $_sc_header),
                    $_sc_header_box3 = $(".animated-box.b-3", $_sc_header),
                    $_sc_line_items = $("#header-wrapper .line-row > span");

                var $tw_sc_header = new TimelineMax()
                    .set($_sc_line_items, { y: "100%" })
                    .set($_sc_header_box1, { y: "-120%" })
                    .to($_sc_header_box2, 0.65, {
                        left: "+=200%",
                        ease: Power1.easeIn,
                    })
                    .to(
                        $_sc_header_box3,
                        0.75,
                        { left: "-=180%", height: 10, ease: Power1.easeOut },
                        "-=.35"
                    )
                    .to($_sc_header_box1, 1, {
                        y: "0%",
                        ease: Power1.easeInOut,
                    })
                    .staggerTo($_sc_line_items, 0.5, { y: "0%" }, 0.25, "-=1");

                var $_sc_sc_header = new ScrollMagic.Scene({
                    triggerElement: $_sc_header,
                    triggerHook: 0,
                })
                    .setTween($tw_sc_header)
                    .addTo(controller);
            }
        }
        // </editor-fold>
        // Page Portfolio Ends ---------------------------------------------------

        // <editor-fold desc="- - - - [ ANIMATION::: Page Branding ] - - - -">

        if ($("body").hasClass("page-srv-branding")) {
            // First sticky section
            //-----------------------------------------
            var $des_wrap = $(".des-idea"),
                _srv_tags_wrp = $(".tags-container", $des_wrap),
                _srv_brn_svg_curv = $(".svg-import.curves-animate", $des_wrap),
                _srv_bsc_curve_1 = $("#BS-Curve-1", _srv_brn_svg_curv),
                _srv_bsc_curve_2 = $("#BS-Curve-2", _srv_brn_svg_curv),
                _srv_logo = $(".logo-tmp.svg-import", $des_wrap),
                _srv_logo_curve = $("#BrLogoGuides", _srv_logo),
                _srv_logo_base = $("#BrLogoBase path", _srv_logo),
                _srv_logo_base_sm = $("#BrLogoUpperText path", _srv_logo),
                _srv_sticky_white = $(".white-over", $des_wrap),
                _srv_sticky_card = $(".card-illus", $des_wrap),
                _tag_max_width = Math.abs(
                    _srv_tags_wrp.width() - $(window).width()
                ),
                _tag_max_scroll = Math.abs(_srv_tags_wrp.width()) * 0.85;

            // prepare paths
            svg_pathPrepare(_srv_bsc_curve_1, 1);
            svg_pathPrepare(_srv_bsc_curve_2, 1);

            // content scroll
            var tw_des_wrap = new TimelineMax()
                .addLabel("start_design")
                .fromTo(
                    _srv_tags_wrp,
                    2,
                    { x: "0%" },
                    { x: _tag_max_width * -1 },
                    "start_design"
                )

                // curves animate
                //----------------------------------
                .to(
                    _srv_bsc_curve_1,
                    2,
                    {
                        strokeDasharray: svg_getLength(_srv_bsc_curve_1),
                        strokeDashoffset: 0,
                    },
                    "start_design+=.2"
                )
                .to(
                    _srv_bsc_curve_2,
                    2,
                    {
                        strokeDasharray: svg_getLength(_srv_bsc_curve_2),
                        strokeDashoffset: 0,
                    },
                    "start_design"
                )

                // Bg
                //-------------------------------------
                .to(_srv_sticky_white, 0.2, { autoAlpha: 1 })
                .to(_srv_logo_curve, 0.15, { autoAlpha: 0 })
                .to(
                    _srv_logo_base,
                    0.2,
                    { css: { fill: "#200a56" } } /*, "-=1" */
                )
                .to(
                    _srv_logo_base_sm,
                    0.2,
                    { css: { fill: "#774EDE" } } /*, "-=1" */
                )
                .to([_srv_logo, _srv_logo_base_sm], 0.2, {
                    css: { scale: ".35" },
                })
                .to(_srv_sticky_card, 0.1, { autoAlpha: 1 } /*, "-=.5"*/);

            // .to($lc_3, 1.5, {strokeDasharray: svg_getLength($ac_3), strokeDashoffset: 0}, "-=1.75")

            var sc_des_wrap = new ScrollMagic.Scene({
                triggerHook: 0,
                triggerElement: $des_wrap,
                duration: _tag_max_scroll,
                // offset: 100
            })
                //.addIndicators({name: "Scroll Horizon::" + _tag_max_width})
                .setPin($des_wrap, { pushFollowers: true })
                .setTween(tw_des_wrap)
                .addTo(controller);

            if ($(".card-template-wrap").length) {
                var $_brd_card_scrll_w = $(".card-template-wrap"),
                    $_brd_card_scrll = $(
                        ".card-template-scroller",
                        $_brd_card_scrll_w
                    ),
                    tw_brd_card_scrl = new TimelineMax().to(
                        $_brd_card_scrll,
                        1,
                        {
                            css: { backgroundPosition: "130% center" },
                        }
                    ),
                    sc_brd_card_scrl = new ScrollMagic.Scene({
                        triggerElement: $_brd_card_scrll_w,
                        triggerHook: 0.15,
                        duration: 700,
                    })
                        .setPin($_brd_card_scrll_w, { pushFollowers: true })
                        .setTween(tw_brd_card_scrl)
                        .addTo(controller);
            }
        }

        // </editor-fold>
        // Page Branding Ends -----------------------------------------------------

        // <editor-fold desc="- - - - [ ANIMATION:: PAGE CLOUD ] - - - -">
        if ($("body").hasClass("page-srv-cloud")) {
            var _cst_flow_wrap = $(".customer-flow"),
                _crv_cst_eng_img = $(".illus-custom-eng-img", _cst_flow_wrap),
                _crv_cst_eng = $("#_CLOUD_CUSTOM_ENGAGE", _cst_flow_wrap),
                _crv_cst_text = $(".text-area", _cst_flow_wrap),
                _crv_cst_cont = $(
                    ".illus-custom-eng  .area-illus",
                    _cst_flow_wrap
                ),
                _crv_cst_max_scroll = Math.abs(_crv_cst_eng_img.height());

            // Prepare Curves
            svg_pathPrepare(_crv_cst_eng);

            // Anim
            // content scroll
            var tw__crv_cst_ = new TimelineMax()
                .addLabel("start_cloud")

                // curves animate
                //----------------------------------
                .to(
                    _crv_cst_eng,
                    2,
                    {
                        strokeDasharray: svg_getLength(_crv_cst_eng),
                        strokeDashoffset: 0,
                    },
                    "start_cloud-=.5"
                );
            // .to(_crv_cst_cont,1,{y:"-=70%", ease:Power1.easeOut}, "start_cloud+=.5")

            var sc_cst_wrap = new ScrollMagic.Scene({
                triggerHook: 0,
                triggerElement: _cst_flow_wrap,
                duration: _crv_cst_max_scroll,
                // offset: 100
            })
                // .addIndicators({name: "Scroll Horizon::" + _crv_cst_max_scroll})
                .setPin(_crv_cst_text, { pushFollowers: true })
                .setTween(tw__crv_cst_)
                .addTo(controller);
        }

        // </editor-fold>
        // Page Cloud Ends -----------------------------------------------------

        // <editor-fold desc="- - - - [ ANIMATION ::: Web Eng/Dev ] - - - -">
        if ($("body").hasClass("page-srv-web-eng")) {
            //alert("has class");
            var $_wrap_se_dev = $(".main-dev-illus-wrap"),
                $_svg_main_dev = $(".main-illus-web-eng"),
                $_smd_out_c = $("#SWE-Ring-outer", $_svg_main_dev),
                $_smd_fat_c = $("#SWE-Ring-fat", $_svg_main_dev),
                $_smd_main_ring = $("#SWE-Ring-Init ", $_svg_main_dev),
                $_smd_all_p = $("path[id*=SWE-P-]", $_svg_main_dev),
                $_smd_all_p_c = $("circle[id*=SWE-C-]", $_svg_main_dev),
                $_smd_all_p_g = $("polyline[id*=SWE-Gd-]", $_svg_main_dev),
                $_smd_all_txt = $("#SWE-Text text", $_svg_main_dev),
                $_smd_all_dt_c = $("path[id*=SWE-C-Dt]", $_svg_main_dev),
                $_smd_c_hov = $("path[id*=SWE-C-Hov]", $_svg_main_dev),
                $_smd_all_dt_txt = $("g#SWE-Srv-Detail text", $_svg_main_dev);

            // set initial path
            svg_pathPrepare($_smd_out_c);
            svg_pathPrepare($_smd_fat_c, 1);
            svg_pathPrepare($_smd_main_ring);
            svg_pathPrepare($_smd_all_p, 1);
            svg_pathPrepare($_smd_all_p_c);
            svg_pathPrepare($_smd_all_dt_c);

            // Main ring sets
            var $_swe_ring_itms = $($_smd_out_c)
                .add($_smd_fat_c)
                .add($_smd_main_ring);

            // Initial setup
            var _tmp_tw_swe = new TimelineMax()
                .set([$_smd_all_txt, $_smd_all_dt_txt], { opacity: 0 })
                .set($_smd_c_hov, { css: { display: "none" } })
                .set($_svg_main_dev, {
                    opacity: 0,
                    rotation: 189,
                    transformOrigin: "50% 50%",
                });

            //Tweens-----------------------
            var $_tw_p_swe = new TimelineMax()
                .addLabel("mainDev")

                .to(
                    $_svg_main_dev,
                    4.25,
                    { opacity: 1, rotation: 0 },
                    "mainDev"
                )
                // main rings
                .staggerTo(
                    $_swe_ring_itms,
                    2.5,
                    {
                        strokeDasharray: function (i, v) {
                            return svg_getLength(v);
                        },
                        strokeDashoffset: 0,
                    },
                    1.5,
                    "mainDev-=.5"
                )
                // circles
                .staggerTo(
                    $_smd_all_p_c,
                    1,
                    {
                        strokeDasharray: function (i, v) {
                            return svg_getLength(v);
                        },
                        strokeDashoffset: 0,
                    },
                    0.5,
                    "-=4.5"
                )
                // paths
                .staggerTo(
                    $_smd_all_p,
                    2,
                    {
                        strokeDasharray: function (i, v) {
                            return svg_getLength(v);
                        },
                        strokeDashoffset: 0,
                    },
                    0.75,
                    "-=3.5"
                )
                //text popup
                .staggerFromTo(
                    $_smd_all_txt,
                    0.35,
                    { opacity: 0, y: "+=50" },
                    { opacity: 1, y: "-=50" },
                    0.25
                );

            // Scene implemented
            var $_sc_p_swe = new ScrollMagic.Scene({
                triggerElement: $_wrap_se_dev,
                triggerHook: 0.75,
            })

                .setTween($_tw_p_swe)
                .addTo(controller);

            ////////////////////////////////////////
            // Interactivity
            ////////////////////////////////////////
            // Global Flag
            var _glb_path_hov = true;

            $_smd_all_txt.on("mouseenter", function () {
                if (_glb_path_hov == false) return;
                _glb_path_hov = false;

                console.log("circle hovered");

                var _rel = "#" + $(this).attr("rel"),
                    _rel_itm = $(_rel).find("path[id*=SWE-C-Dt]"),
                    _rel_hov = $("#SWE-Hover-Out").find(
                        "path[rel=" + $(this).attr("rel") + "]"
                    ),
                    _rel_txt = $("text", $(_rel)),
                    _tmp_hvr_tl = new TimelineMax()
                        .set(_rel_hov, {
                            css: { display: "inline", fill: "transparent" },
                        })
                        .to(_rel_itm, 0.5, {
                            strokeDasharray: svg_getLength(_rel_itm),
                            strokeDashoffset: 0,
                        })
                        .to(_rel_itm, 0.75, { fill: "white" }, "-=.3")
                        // .staggerFromTo( _rel_txt, .35, {opacity: 0, y:"+=50" },{ opacity: 1,y: "-=50"}, .15)
                        .fromTo(
                            _rel_txt,
                            0.35,
                            { opacity: 0 },
                            {
                                opacity: 1,
                                onComplete: function () {
                                    _glb_path_hov = true;
                                },
                            }
                        );
            });

            $("#SWE-Hover-Out path").on("mouseleave", function (e) {
                _glb_path_hov = true;

                var $_t = "#" + $(this).attr("rel"),
                    _path = $($_t).find("path"),
                    _itm_grp = $("text", $_t),
                    _tmp_hvr_tl = new TimelineMax()
                        .to(_itm_grp, 0.25, { overwrite: "all", opacity: 0 })
                        .to(_path, 0.5, {
                            strokeDashoffset: svg_getLength(_path),
                        })
                        .to(_path, 0.75, { fill: "transparent" }, "-=.3")
                        .set($(this), { css: { display: "none" } });
            });

            /*  Phone UX
			//--------------------------------------------------*/
            var _v_ux_des = $(".area-ux-ui"),
                _v_ux_img = $("div.ux-img", _v_ux_des),
                _tw_ux = new TimelineMax()
                    .delay(1.5)
                    .addLabel("start")
                    .staggerFromTo(
                        _v_ux_img,
                        1,
                        { yPercent: "100%", autoAlpha: 0 },
                        { yPercent: "0%", autoAlpha: 1 },
                        0.15
                    );

            var _sc_ux = new ScrollMagic.Scene({
                triggerHook: 1,
                triggerElement: _v_ux_des,
                reverse: true,
                // duration: "100%"
            })
                .setTween(_tw_ux)
                .addTo(controller);
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
        if ($("body").hasClass("page-srv-bespoke")) {
            // vertical container
            var $_s_bf_wrap = $(".bespoke-features-wrap"),
                $_s_bf_cont = $(".bespoke-features", $_s_bf_wrap),
                $_s_bf_itms = $('div[class*="col-md-"]', $_s_bf_cont),
                $_s_bf_itms_n = $("span.num-list", $_s_bf_itms),
                _s_bf_max_height = Math.round($_s_bf_cont.height()),
                _s_bf_max_scroll = Math.abs(_s_bf_max_height),
                $_bf_cont_scroll = new TimelineMax();

            //  alert($_s_bf_cont.width());

            $_bf_cont_scroll
                .addLabel("bf_start")
                .to($_s_bf_cont, 1, { y: _s_bf_max_height * -1 }, "bf_start");
            // .staggerTo($_s_bf_itms,1, {x: 300},.3,"start");

            //@todo experiment as for performance
            // THIS IS EXPERIMENTAL

            // Internal Animation
            $_s_bf_itms.each(function (i, v) {
                var $_s_bf_newTimeline = new TimelineMax();

                var _t_m_child_ = $($_s_bf_itms[i]);

                //newTimeline.fromTo(_t_m_child_,1,{x:300},{x:0},"BCSala")
                // $_s_bf_newTimeline.to( $('.num-list',_t_m_child_),1, {  y: -250  }, " BCSala" );
                $_s_bf_newTimeline.fromTo(
                    $(".num-list", _t_m_child_),
                    10,
                    { x: -200 },
                    { x: 0, ease: Circ.out },
                    " BCSala"
                );

                var td_df = new ScrollMagic.Scene({
                    triggerElement: _t_m_child_,
                    triggerHook: 1,
                    offset: 200,
                    duration: "100%", //_t_m_child_.height() * 1.5,
                    reverse: true,
                })

                    //.setClassToggle(_t_m_child_, "movedOn")
                    .setTween($_s_bf_newTimeline)
                    .addTo(controller);
            });
            // THIS IS EXPERIMENTAL  ENDS

            var $_sc_s_bf_wrap = new ScrollMagic.Scene({
                triggerElement: $_s_bf_wrap,
                duration: _s_bf_max_height - 760,
                triggerHook: 0,
            })
                // .addIndicators({name: _s_bf_max_height})
                .setPin($_s_bf_wrap, { pushFollowers: true })
                .setTween([$_bf_cont_scroll])
                .addTo(controller);

            /*  Header Animation
				//--------------------------------------------------*/
            var $_bf_header_wrap = ".page-srv-bespoke .banner-wrapper",
                $_bf_chits = $(".chit", $_bf_header_wrap),
                $_bf_chit_l = $(".chit-l", $_bf_header_wrap),
                $_bf_chit_k = $(" > *", $_bf_chits),
                $_bf_hd_txt_sm = $("p.lead", $_bf_header_wrap),
                $_bf_hd_txt_lg = $(".huge-heading", $_bf_header_wrap);

            //--------------------------------------------------------------------
            var _tw_bf_header_init = new TimelineMax()

                .set($_bf_chits, { yPercent: "-110%" })
                .set($_bf_chit_k, { yPercent: "-150%", autoAlpha: 0 })
                .set($_bf_chit_l, { yPercent: "-20%", autoAlpha: 0 })
                .set($_bf_hd_txt_sm, { yPercent: "100%", autoAlpha: 0 })
                .set($_bf_hd_txt_lg, { yPercent: "-100%", autoAlpha: 0 });

            var _tw_bf_header = new TimelineMax()

                .addLabel("bf_hd_start")
                .staggerTo(
                    $_bf_chits,
                    0.7,
                    { yPercent: "0" },
                    0.2,
                    "bf_hd_start"
                )
                .to($_bf_chit_l, 0.25, {
                    yPercent: "0",
                    autoAlpha: 1,
                    ease: Circ.out,
                })
                .staggerTo(
                    $_bf_chit_k,
                    0.5,
                    { yPercent: "0", autoAlpha: 1 },
                    0.25,
                    "bf_hd_start+=0.5"
                )
                .to(
                    $_bf_hd_txt_sm,
                    0.5,
                    { yPercent: "0", autoAlpha: 1 },
                    "bf_hd_start+=2.5"
                )
                .to(
                    $_bf_hd_txt_lg,
                    1,
                    { yPercent: "0", autoAlpha: 1 },
                    "bf_hd_start+=1.75"
                );

            var _sc_bf_header = new ScrollMagic.Scene({
                triggerHook: 0,
                triggerElement: $_bf_header_wrap,
            })
                .setTween(_tw_bf_header)
                .addTo(controller);
        }
        // </editor-fold>
        // Page Bespoke Ends ---------------------------------------------------

        //-------------------------------------------------------------
        //-------------------------------------------------------------
        //-------------------------------------------------------------
        // General Effects --------------------------------------------
        //-------------------------------------------------------------
        //-------------------------------------------------------------
        //@update: Scroll only when scroll down, from would be original

        if ($("body .scroll-parallex").length) {
            var $_scrl_plx = $("body .scroll-parallex");

            // Scrolling Parallax item container
            $_scrl_plx.each(function (i, v) {
                console.log("found scrollparallex");

                var $v_pl_t = $(this),
                    $v_pl_item = $(".plx-item", $v_pl_t),
                    v_plx =
                        $.trim($v_pl_item.attr("data-parallex")) != ""
                            ? parseInt($v_pl_item.attr("data-parallex"))
                            : 0,
                    // v_plx = v_plx + "%",
                    trigger_hook =
                        $.trim($v_pl_t.attr("data-hook")) != ""
                            ? parseFloat($.trim($v_pl_t.attr("data-hook")))
                            : 0.9,
                    //-----------------------------------------------------------
                    // @Update
                    // Duration is redeclared,@update
                    duration;

                if ($v_pl_t.attr("data-scroll-height")) {
                    duration = $.trim($v_pl_t.attr("data-scroll-height"));
                } else if ($v_pl_t.hasClass("parent-height")) {
                    duration = "110%";
                } else {
                    duration = "auto";
                }
                //-------------------------------------------------------------

                var offset =
                        $v_pl_t.attr("data-offset") != ""
                            ? parseInt($v_pl_t.attr("data-offset"))
                            : 0,
                    tw_vw_plx = new TimelineMax();

                // Add Time to Synch
                tw_vw_plx.addLabel("st_plx");
                // Need Loop in Case
                $v_pl_item.each(function (j, w) {
                    var v_plx =
                        $.trim($($v_pl_item[j]).attr("data-parallex")) != ""
                            ? parseInt($($v_pl_item[j]).attr("data-parallex"))
                            : 0;

                    // tw_vw_plx.add( new TimelineMax().fromTo( $($v_pl_item[j]), 2.5, { y: "+=" + (v_plx * .75) + "%"  } , { y: ("-=" + (v_plx * 1.25) + "%" ) /*, ease: Circ.out*/ },"st_plx"  ));

                    // Static from ground zero
                    if ($v_pl_t.hasClass("plx-org")) {
                        tw_vw_plx.to(
                            $($v_pl_item[j]),
                            2.5,
                            {
                                y:
                                    "-=" +
                                    v_plx * 1.25 +
                                    "%" /*, ease: Circ.out*/,
                            },
                            "st_plx"
                        );
                    } else {
                        tw_vw_plx.fromTo(
                            $($v_pl_item[j]),
                            2.5,
                            { y: "+=" + v_plx * 0.75 + "%" },
                            {
                                y:
                                    "-=" +
                                    v_plx * 1.25 +
                                    "%" /*, ease: Circ.out*/,
                            },
                            "st_plx"
                        );
                    }
                });

                var $_scene_scrl_view_plx = new ScrollMagic.Scene({
                    triggerElement: $v_pl_t,
                    triggerHook: trigger_hook,
                    offset: offset,
                    duration: duration,
                    reverse: true,
                })
                    //.addIndicators({name: "item " + i + " Start"})
                    .setTween(tw_vw_plx)
                    .addTo(controller);
            });
        }

        // Global Sticky area
        if ($("body .sticky-area").length) {
            var $_scr_sticky = $("body .sticky-area");

            $_scr_sticky.each(function (i, v) {
                var $v_stc_t = $(this),
                    $_c_sticky_item = $(".ss-sticker", $v_stc_t),
                    $_c_release = $(".ss-release");
                // _tw_sticky_tw = new TimelineMax()

                var $_scene_scrl_sticky = new ScrollMagic.Scene({
                    triggerElement: $v_stc_t,
                    triggerHook: 0,
                    // offset: $_c_sticky_item.outerHeight(),
                    duration: $v_stc_t.height() - $_c_sticky_item.height() * 2,
                    //  duration: "100%"
                })
                    //.addIndicators({name: "sticky " + i + " Start STICKEY - length " + $v_stc_t.outerHeight() - ( $_c_sticky_item.outerHeight() * 2 ) })
                    .setPin($_c_sticky_item, { pushFollowers: false })
                    .addTo(controller);

                // Release sticker

                var $_scene_scrl_sticky_r = new ScrollMagic.Scene({
                    triggerElement: $_c_release,
                    triggerHook: 0.75,
                    //duration: "100%"
                })
                    //  .addIndicators({name:'releasing item'})
                    .addTo(controller);
            });
        }

        //=========================================================================
        //=========================================================================
        //  maybe i can add from to limit instead of fixed percentage
        //=========================================================================
        //=========================================================================

        if ($(".has-parallex").length) {
            $(".has-parallex").each(function (i, v) {
                var $_body = $("body"),
                    $__this = $(this),
                    $__is_body = $__this.is("body") ? true : false,
                    // if parallex is set on  body then target would be wrapper
                    _plx_trg_scene = $__is_body ? $_body : $__this,
                    $_tmp_unit = $__is_body ? "px" : "%",
                    _plx_tgt_obj = $__is_body ? $("#wrapper") : $__this;

                if ($.trim(_plx_tgt_obj.attr("data-parallex-perc")) != "") {
                    var __tmp_perc = parseFloat(
                        _plx_tgt_obj.attr("data-parallex-perc")
                    );
                    _plx_prc = Math.abs(
                        (_plx_tgt_obj.height() * __tmp_perc) / 100
                    );
                } else {
                    _plx_prc = ($_body.height() * 15.5) / 100;
                }

                // Tween
                _plx_tween = new TimelineMax().to(_plx_tgt_obj, 1, {
                    css: {
                        "background-position-y": "-=" + _plx_prc + $_tmp_unit,
                    },
                });

                // scroll
                var _sc_bg_plx = new ScrollMagic.Scene({
                    triggerElement: _plx_trg_scene,
                    triggerHook: $__is_body ? 1 : 0.5,
                    duration: _plx_tgt_obj.height(),
                })

                    .setTween(_plx_tween)
                    .addTo(controller);
            });
        }

        //=========================================================================
        //=========================================================================
        //  VERTICAL SCROLLING
        //=========================================================================
        //=========================================================================
        // Sticky Vertical Scroller --Automatic
        if ($(".vert-scroll-wrap").length) {
            var _xvrt_wrap = $(".vert-scroll-wrap").each(function (i, v) {
                var _xv_t = $(this),
                    _xvrt_cont = $(".x-vert-scroll", _xv_t),
                    _x_scroll_width = $.trim(_xv_t.attr("data-vscroll-limit"))
                        ? _xv_t.attr("data-vscroll-limit")
                        : Math.abs(
                              x_get_child_width(_xvrt_cont) - _xv_t.width()
                          ),
                    _x_trig_hook = $.trim(_xv_t.attr("data-vscroll-hook"))
                        ? _xv_t.attr("data-vscroll-hook")
                        : 0,
                    _x_tw_vert = new TimelineMax();
                _x_tw_vert.to(_xvrt_cont, 1, { x: -1 * _x_scroll_width });

                var _x_sc_vert_scene = new ScrollMagic.Scene({
                    triggerElement: _xv_t,
                    triggerHook: _x_trig_hook,
                    duration: _x_scroll_width,
                    reverse: true,
                })
                    .setPin(_xv_t, { pushFollowers: true })
                    .setTween(_x_tw_vert)
                    // .addIndicators({name: "Vert Scroller " + _x_scroll_width  + " == " + $(window).scrollTop() })
                    .addTo(controller);
            });

            var _x_tt = $(".vert-scroll-wrap .v-container").each(function (
                i,
                v
            ) {
                var _x_v_child_h = $(".v-container > div").each(function (
                    j,
                    w
                ) {
                    var _x_v_child = $(this),
                        _x_tw_v_child_ = new TimelineMax().fromTo(
                            $("h3", _x_tw_v_child_),
                            1,
                            { xPercent: 50, autoAlpha: 0 },
                            { xPercent: 0, autoAlpha: 1 }
                        );
                });
            });
        } // vert scroll
    } // page anim end

    // </editor-fold>

    //// <editor-fold defaultstate="collapsed" desc="-------[ PAGE LOADER ]-------">

    // Click Handlers AJAX MENU
    //-------------------------------------------------------------------------
    // var $_body_ele = $('#body-wrapper a')
    //     @note Handle HashTag

    $("body").on("mousemove", function (e) {
        $(".cursor-ovl").css({
            top: e.pageY,
            left: e.pageX,
        });

        if ($(e.target).is("a") || $(e.target).hasClass('em-focus')) {
            $(".cursor-ovl").addClass("xpanded");
        } else {
            $(".cursor-ovl").removeClass("xpanded");
        }
        // console.log(e.target)
    });

    // SCROLLER to sections
    $("body").on("click", ".x-scroll-to", function (e) {
        e.preventDefault();

        var _tg_scroll = $(this).attr("href");

        xash_scrollTo(_tg_scroll);
    });

    //$('body').on('click','#body-wrapper a[rel="bookmark"]', function (e) {
    $("body").on("click", "#body-wrapper a, .site-title a", function (e) {
        e.preventDefault();

        // EXCEPTION

        var new_tgt = e.target.href,
            c_tgt = window.location.href;

        //if( tgt === "#" ) return false;

        if ($(this).is('[rel="bookmark"]')) {
            hide_menu();
        }

        /**
         * If has hashlink and hash is on same page then do' not laod page
         * and directly go to very same section
         * IF page has different url with hash then its duty of loader
         */

        // Check if is local link, then if it has Hash.. animate to item..else
        // load loader and move to new page

        if (xash_is_external(new_tgt)) {
            // console.log("External Link Clicked")
            window.open(new_tgt, "_blank");
        } else {
            if (xash_is_local(new_tgt)) {
                if (xash_has_hash(new_tgt)) {
                    var _tgt_scroll = xash_get_hash(new_tgt);
                    xash_scrollTo(_tgt_scroll);
                }
            } else {
                loader_show();
                load_content(new_tgt);
            }

            // console.log()
            history.pushState({ c_url: c_tgt }, null, new_tgt);

            return false;
        }
    });

    /**
	 * Default POPSTATE CAPTURE
	 * @param e

		window.onpopstate = function (e) {

			console.log(e);
			console.log();

		};
		*/

    // $(window).on("popstate", function(e) {
    window.onpopstate = function (e) {
        //@reference https://www.codemag.com/Article/1301091/HTML5-History-Clean-URLs-for-Deep-linking-Ajax-Applications

        this._popStateEventCount++;

        // if ($.browser.webkit &&  this._popStateEventCount == 1) {
        //     return;
        // }
        // Jquery doesn't support data of popstate directly, so have to capture originalEvent

        // console.log(e);

        // console.log(e.originalEvent.state);
        var $_tgt_new_loc = e.state.c_url;

        // Check if is local link, then if it has Hash.. animate to item..else
        // load loader and move to new page
        if (xash_is_local($_tgt_new_loc)) {
            if (xash_has_hash($_tgt_new_loc)) {
                var _tgt_scroll = xash_get_hash($_tgt_new_loc);
                xash_scrollTo(_tgt_scroll);
            }

            return false;
        } else {
            loader_show();
            load_content(e.currentTarget.location);
        }
    };
    //);

    // Loader Events
    //-------------------------------------------------------------------------
    $("body").on("loadingStart", function () {
        $("html").addClass("loading-content");
    });

    $("body").on("keydown", function (e) {
        if (e.keyCode == 27) {
            hide_menu();
        }
    });

    $("body").on("loadingEnd", function () {
        $("html").removeClass("loading-content");
        $("html").trigger("data-loading-done");

        // setTimeout(function () {
        //
        //
        // }, 500 )

        if (xash_has_hash(window.location.href)) {
            xash_scrollTo(xash_get_hash(window.location.href));
        }
    });

    // Function update
    /***
     * function to update elements to show update of content
     * @param  int cur current index
     * @param int total, total number of images to be loaded
     * @return void
     */

    function update_loader_wrap(cur, total) {
        var $msg_wrap = $(".msg-loading");
        cur = cur + 1;

        function __to_perc() {
            return (cur / total) * 100;
        }

        $(".ldr-total", $msg_wrap).text(__to_perc().toFixed(0) + "%");
        $(".loader", $msg_wrap).css("width", __to_perc().toFixed(0) + "%");
        // console.log(  __to_perc().toFixed(0));
    }

    // </editor-fold>

    /// <editor-fold defaultstate="collapsed" desc="-------[ MISC TEMP FUNCTIONS ]-------">

    // Anmation similar to stagger, but with custom data-dir and delay attri
    function anim_stagger($items, $time, $delay, $props, $reverse) {
        var tw = new TimelineMax();

        //if ( $items.length == 0 ) return tw;

        // var setup
        $time = $time || 1;
        $delay = $delay || $time / 8;

        $($items).each(function (i, v) {
            var $item = $(this),
                $trg = $item;

            // Directional based
            // Based on DATA TAG, check if item has data tag.
            // if (typeof $props === "string") {

            if ($item.attr("data-dir")) {
                var $attr = $.trim($item.attr("data-dir").toLowerCase());

                // $attr = $.trim( $attr.toLowerCase() );

                if ($attr === "up") {
                    var $_dir = $item.attr("data-distance")
                        ? $item.attr("data-distance")
                        : "+=100%";
                    $props = { y: $_dir, autoAlpha: 0, ease: Power2.easeInOut };
                } else if ($attr === "down") {
                    $props = {
                        y: "-=200%",
                        autoAlpha: 0,
                        ease: Power2.easeInOut,
                    };
                } else if ($attr === "left") {
                    $props = {
                        x: "-=200%",
                        autoAlpha: 0,
                        ease: Power2.easeInOut,
                    };
                } else {
                    $props = {
                        x: "+=200%",
                        autoAlpha: 0,
                        ease: Power2.easeInOut,
                    };
                }
            }

            if ($props == null || $props == undefined) {
                $props = { y: "+200", autoAlpha: 0, ease: Power2.easeInOut };
            }

            // $props =
            $reverse = $reverse || false;

            var $merged_props = xash_extend_obj($props, { delay: $delay });

            // data child is true, then animate chld object of target
            if ($item.attr("data-target")) {
                $trg = $item.find($.trim($item.attr("data-target")));
            }

            if ($reverse) {
                tw.to($trg, $time, $props /*, $delay*/);
            } else {
                tw.from($trg, $time, $props, $delay);
            }
        });

        return tw;
    }

    /***
     * Scroll window to elemeent
     * @param $ele
     */

    function xash_scrollTo($ele) {
        if (!$ele.length) return;

        var tp = $($ele).offset().top,
            _body = $("html,body");

        $(_body).stop().animate(
            {
                scrollTop: tp,
            },
            1250,
            "easeInOutExpo"
        );
    }

    function is_phone($flag) {
        $flag = $flag || null;
        if ($flag != null) {
            return $flag;
        } else return $(".dv-device").is(":visible");
    }

    function val_to_perc(value, neg) {
        //neg = neg || false;
        //var prefix = neg  ? "-" : "";
        return value + "%";
    }

    function loader_show() {
        $("body").trigger("loadingStart");
    }

    function loader_hide() {
        // Check has hash link n move page to there
        $("body").trigger("loadingEnd");
    }

    function hide_menu(ele) {
        var $__mn_itms = ele || $("body .top-main-menu li.lv1"); // $( g_setting.main_menu_items );
        new TimelineMax().staggerFromTo(
            $__mn_itms,
            0.35,
            { y: "0%", opacity: 1 },
            { y: "+=30%", opacity: 0 },
            -0.125,
            null,
            function () {
                //  $('body').removeClass('menu-visible');
            }
        );

        $("body").removeClass("menu-visible");
    }

    function trigger_all_load() {
        console.log("Triggering all load fn");

        var svg_flag = false;

        setTimeout(function () {
            $("body").trigger("imagesLoaded");
        }, 100);
    }

    function _get_PageName() {
        var pathName = window.location.pathname,
            pageName = "";

        if (pathName.indexOf("/") != -1) {
            pageName = pathName.split("/").pop();
        } else {
            pageName = pathName;
        }

        return pageName;
    }

    //=========================================================================
    //=========================================================================
    //  IMPORT SVG
    //=========================================================================
    //=========================================================================
    /**
     *
     * @param $class CSS Class for image import
     * @param callback callback function
     * @uses xash_svg_ready , to check if SVG in DOM, to work on.
     *
     *  @return void
     */
    function xash_svg_import($obj, callback) {
        $obj = $obj || $("#wrapper img.svg-import");

        if ($($obj).length) {
            $__tmp_svg_length = $obj.length;

            console.log("xash svg import invoked");

            $($obj).each(function (i, v) {
                if (!$(this).is("img")) return false;

                var $img = jQuery(this),
                    imgID = $img.attr("id"),
                    imgClass = $img.attr("class"),
                    imgURL = $img.is("img")
                        ? $img.attr("src")
                        : $img.attr("data-src");

                console.log("Converting svgs..." + imgClass);

                $.ajaxSetup({
                    //cache: false
                });

                $.get(
                    imgURL,
                    function (data) {
                        // Get the SVG tag, ignore the rest
                        var $svg = jQuery(data).find("svg");

                        // Add replaced image's ID to the new SVG
                        if (typeof imgID !== "undefined") {
                            $svg = $svg.attr("id", imgID);
                        }

                        // Add replaced image's classes to the new SVG
                        if (typeof imgClass !== "undefined") {
                            $svg = $svg.attr(
                                "class",
                                imgClass + " replaced-svg"
                            );
                        }

                        // Remove any invalid XML tags as per http://validator.w3.org
                        // $svg = $svg.removeAttr('xmlns:a').removeAttr('id');

                        // Check if the viewport is set, else we gonna set it if we can.
                        if (
                            !$svg.attr("viewBox") &&
                            $svg.attr("height") &&
                            $svg.attr("width")
                        ) {
                            $svg.attr(
                                "viewBox",
                                "0 0 " +
                                    $svg.attr("height") +
                                    " " +
                                    $svg.attr("width")
                            );
                        }

                        // Replace image with new SVG
                        $img.replaceWith($svg);
                    },
                    "xml"
                ).done(function () {
                    // console.log(i ,( $__tmp_svg_length - 1) );
                    if (i == $__tmp_svg_length - 1) {
                        console.log(":::Looping:::" + i);

                        //$('body').trigger('svgImported');

                        // Run Callback,
                        //if( typeof callback == "function") {
                        callback();
                        //}
                        return true;
                    }
                });

                // Create Custom Event for svg import in case some animation is needed after it
                // Loop is finished, trigger event
            });
        } // if $class element exist
        else {
            if (xash_debug()) {
                console.log("No SVG exist to import");
            }

            callback();
        }
    }

    //=========================================================================
    //=========================================================================
    // SVG Tester
    //=========================================================================
    //=========================================================================
    /**
     *
     * @param $svg_r , set of SVG Item/img
     * @param callback, function to invoke upon SVG
     * @param $index is number to track loop, safe side from indefinite loops
     * @returns {boolean} in case of failure and loops back
     */

    function xash_svg_ready($svg_r, $index, callback) {
        // Loop controller
        // $index = $index || 0;
        xash_debug(
            console.log(
                $index +
                    "------------======================--------------------=============\n"
            )
        );
        xash_debug(console.log("xash_svg_ready run"));

        // debugger;

        $svg_r = $svg_r || $("#wrapper svg.svg-import");

        var _svg_loaded = $index,
            svg_total = $svg_r.length - 1;

        /**
			//This code doesnt support FF or IE atm
			$($svg_r).each(function (i,v) {
				$_svg  = $($svg_r)[0];
				$($_svg).on('load', function (e) {
					console.log( i,e );

					if ( svg_loaded == svg_total ) {
						alert("All Loaded into DOM");
					}
				})
			});
			return false;
		*/

        if (typeof callback !== "function" || $($svg_r).length < 1) {
            console.log("TYPE OF CALLBACK svg");
            x_run_callback(callback);
            return;
            // exit
        }

        $($svg_r).each(function (i, v) {
            $_tmda = $(this);

            console.log("Checking SVG " + $_tmda.attr("id"));

            var _tmp_svg_test,
                _item = $(this)[0];
            $svg = _item;

            // check its svg
            if (_item.tagName.toLowerCase() == "svg") {
                try {
                    if (
                        _item.getBBox() !== null ||
                        _item.getBBox() !== "undefined" ||
                        _item.getScreenCTM() !== "undefined"
                    ) {
                        console.log("SVG " + $svg + "is Rendered");

                        //callback();
                        _svg_loaded++;

                        if (_svg_loaded == $($svg_r).length) {
                            x_run_callback(callback);
                            return false;
                        } else {
                            // loop back
                            return;
                        }
                    }
                } catch (e) {
                    console.log(
                        "==================================================\n" +
                            e.message +
                            "==============================================\n"
                    );
                    console.log("SVG " + _item + " Gone Back" + e);
                    window.clearTimeout(_tmp_svg_test);

                    //_tmp_svg_test = window.setTimeout(function () {
                    xash_svg_ready(_item, _svg_loaded, callback);
                    //},100 );

                    // Loop back
                    return;
                }
            } else {
                // check if we are done without finding then callback fn.
                if (xash_debug()) console.log(" NO SVG with SVG Tag to Check");
                x_run_callback(callback);

                // loop back
                // go back!
                /*
				// Reconsider this code..suspicious
				window.clearTimeout(_tmp_svg_test);
				console.log( "SVG " + $svg + " Else Statement" );
				_tmp_svg_test = window.setTimeout(function () {
					xash_svg_ready($svg, callback )
				}, 100 );
				*/
            }
        });
        // each loop

        //return true;
    }

    //easy interface get svg length
    /**
     *
     * @param {#svg object} $el
     * @returns length of curve defined in svg
     */
    //function svg_getLength($el) {
    window.svg_getLength = function ($el) {
        // error handing
        // if ( $el[0] ) {
        //console.log("Item is being ass ::", $el);
        if (checkIE()) return 2500;

        if ($el.length < 1) {
            console.log($el.tagName);
            return;
        }

        //        return $($el)[0].getTotalLength();
        console.log("\nCHECK- getLENGTH---" + $el);
        return $($el).get(0).getTotalLength();

        if (!$el[0].getTotalLength() == undefined) {
        } else {
            return $el.get(0).getTotalLength();
        }
        return false;
    }

    // @todo Need loop fix
    // Set SVG Path to current length and set dasharray to 0,
    // which cause line to have a draw effect
    window.svg_pathPrepare = function ($elm, $inv, $length) {
        if ($elm.length > 0) {
            $($elm).each(function (i, v) {
                var $el = $(v);

                //                 console.log( $el + "\n");

                var lineLength = svg_getLength($($el).get(0)),
                    fac = 1;
                $inv = $inv || false;

                if ($inv) {
                    fac = fac * -1;
                }

                $el.css("stroke-dasharray", lineLength);
                $el.css("stroke-dashoffset", lineLength * fac);
            });
        }
    };

    // get total width
    function x_get_child_width(item) {
        //calculate with margin
        if (item == undefined || !item.length) return;

        var ini_wid = 0;
        $(item).each(function (i, v) {
            ini_wid =
                ini_wid +
                parseInt($(this).width()) +
                parseInt($(this).css("margin-right")) +
                parseInt($(this).css("margin-left"));
        });

        return ini_wid;
    }

    function checkIE() {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf("MSIE ");
        if (msie > 0) {
            // IE 10 or older => return version number
            return true;
            // return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf("Trident/");
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf("rv:");
            return true;
            // return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf("Edge/");
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
    function load_content($url) {
        loader_show();

        $.ajax({
            url: $url,
            dataType: "html",
            method: "GET",
        })
            .success(function (response) {
                var content = $(response).find("#body-wrapper").html();

                if (content != undefined) {
                    $("#body-wrapper").html(content);

                    update_meta(response);

                    // reasign anim stuff
                    // _check_loaded_images();

                    init_all();
                }

                loader_hide();
            })
            .error(function (msg, v, d) {
                console.log(msg.statusCode());
                window.location.reload();
            });
    }

    function get_body_class(ele) {
        // var  clss = $(ele).filter('body'),
        //      css = $(clss).attr('class');
        // if (ele.length ){
        var css = ele.match(/<body\s.*=\W*(.*?)[\W]>/)[1];
        console.log(css);
        return css;
        // }
        //  else return "";
    }

    // updates title and body class
    function update_meta(ele) {
        // if(!ele.length ) { return ; }

        var title = $(ele).filter("title").text(),
            bodyClass = get_body_class(ele);

        $("body").attr("class", bodyClass);
        $("title").text(title);

        // reset scroll top
        $("html,body").scrollTop(0);
    }

    // </editor-fold>

    //// <editor-fold defaultstate="collapsed" desc="-------[ Temp Net code to polish ]-------">

    function _check_loaded_images(imgArr, callback) {
        console.log("Triggering _check_loaded_images fn");

        imgArr = imgArr || $("body").find("img");

        callback = callback || trigger_all_load;

        //Keep track of the images that are loaded
        var _imgsLoaded = 0,
            image_total = $(".loader-curtain .t-image"),
            img_current = $(".loader-curtain .c-image"),
            // imagesLimit = imgArr.length > 1 ?  (imgArr.length - 1 ) : ;
            imagesLimit = imgArr.length; //- 1;

        //console.log(imgArr.length);

        function _load_all_images(callback) {
            // Break here, in recursive, not found sometimes its looping and its causing
            // mismatch length and current index is greater than maximum
            update_loader_wrap(_imgsLoaded, imgArr.length);

            if (imgArr.length < _imgsLoaded) {
                x_console("imgArr.length < _imgsLoaded")();
                //$('body').trigger('imagesLoaded');
                return false;
            }

            //Create an temp image and load the url
            var img = new Image(),
                __src = $(imgArr[_imgsLoaded]);

            $(img).attr("src", __src.attr("src"));

            // Fix cache bug and load
            if (img.complete || img.readyState === 4) {
                // image is cached
                _imgsLoaded++;

                // ------------------------------------------------------
                // Check if all images are loaded
                // ------------------------------------------------------

                if (_imgsLoaded == imagesLimit) {
                    x_console("_imgsLoaded == imagesLimit")();
                    // If all images loaded via cache do the callback
                    x_run_callback(callback);
                } else {
                    x_console("_imgsLoaded == imagesLimit  ELSE")();
                    //If not all images are loaded call own function again
                    _load_all_images(callback);
                }
            } else {
                $(img)
                    .load(function (e) {
                        //Increment the images loaded variable
                        _imgsLoaded++;

                        //Check if all images are loaded
                        if (_imgsLoaded == imagesLimit) {
                            //If all images loaded do the callback
                            x_console(
                                "$(img).load(  _imgsLoaded == imagesLimit  "
                            )();
                            x_run_callback(callback);
                            console.log(
                                "Total number of assets loaded, " + _imgsLoaded
                            );
                        } else {
                            x_console(
                                "$(img).load(  _imgsLoaded == imagesLimit   ELSE 1959"
                            )();
                            // If not all images are loaded call own function again
                            _load_all_images(callback);
                        }
                    })
                    .on("error", function (e, f, g) {
                        x_console("on error 1967")();
                        //Increment the images loaded variable
                        console.log(
                            "Image is 404" + "path is: " + $(img).attr("src")
                        );

                        _imgsLoaded++;
                        _load_all_images(callback);
                    });
            }
        }

        // load Images.
        _load_all_images(callback);
    }

    /***
     * Check if variable exists like php, xash_isset ()
     *
     */

    function var_exist($var) {
        try {
            _tmp_var = eval($var);
            if (typeof _tmp_var !== "undefined") {
                return true;
            }
        } catch (e) {
            if (e instanceof ReferenceError) {
                return false;
            }
        }
    }

    /***
     * Get Hash of links
     */
    function xash_get_hash($url) {
        if ($url) {
            return (hash = "#" + $url.split("#")[1]);
        }

        return window.location.hash;
    }

    /***
     *
     * @param $url
     *  @return {boolean}
     */

    function xash_has_hash($url) {
        $url = $url || window.location.hash;

        return $url.indexOf("#") != -1;
    }

    /***
     *
     * @param $url
     */
    function xash_check_page($url) {
        var _loc = window.location.path;
    }

    // check if URL is local..
    function xash_is_local($url) {
        var link = $.trim(new URL($url).pathname),
            path = link.pathname;

        _cur_page = $.trim(xash_current_page());

        return link == _cur_page ? true : false;

        // return result;
    }

    function xash_is_external($url) {
        var _cur_host = window.location.hostname,
            _link_host = new URL($url).hostname;

        // var link  = $.trim( new URL($url) ),
        //     host = link.hostname,
        //     _cur_page = $.trim( xash_current_page(true) ),
        //     _cur_host = _cur_page.hostname;

        return _cur_host != _link_host;
    }

    function xash_current_page($href) {
        if ($href) {
            return window.location.href;
        }

        return window.location.pathname;
    }

    /***
     * check xash debug
     */
    function xash_debug(callback) {
        if (var_exist("xash.debug")) {
            return;
            x_run_callback(callback);
        }
    }

    /***
     * Debugged console.log
     * @param $item
     */
    function x_console(args) {
        if (var_exist("xash.debug")) {
            args = [].slice.call(arguments);
            args.unshift(console);
            return console.log.bind.apply(console.log, args);
        }
    }

    function x_run_callback(callback) {
        if (typeof callback == "function") {
            callback();
        } else {
            console.error("callback is not a function, it is " + callback);
            // throw new Error ("This isn't valid function");
        }
    }
    // </editor-fold>
}); // End of use strict
