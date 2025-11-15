/**
 * Main core functions for website
 * author: xafaR aka Zafar Ali
 * https://behance.net/xasharts
 */

//#region PLUGIN REGISTRATIONS

// Register ScrollTrigger ------------------------
gsap.registerPlugin(ScrollTrigger);

// Split Text ------------------------------------
gsap.registerPlugin(SplitText);

// const lenis = new Lenis();
// requestAnimationFrame(function raf(time) {
// 	lenis.raf(time);
// 	requestAnimationFrame(raf);
// })

//#endregion

jQuery(document).ready(function ($) {
    // Markers for scrollTrigger Global
    const $_MARKER_DEBUG = false;

    // Need to make custom event which will trigger after loading screen
    // that will trigger gsap initial animation.

    //#region -Header HomeParallex
    // Initial Animation after Loading
    $("html").on("data-loading-done", function () {
       
    }); // LOADING SCREEN TRIGGER

    let $home_ban_ele = $(".xl.heading-huge");

    gsap.set($home_ban_ele, {
        scale: 200,
        x: 1200,
    });

    gsap.to($home_ban_ele, {
        scale: 1,
        x: 0,
        ease: "power3.out",
        duration: 3.5,
    });

    // paralex
    const $hh_fncy_bar = $(".fancy-bar.bottom .img-holder");
    const hh_parallex = new gsap.timeline({
        scrollTrigger: {
            trigger: ".st-home",
            //   endTrigger:''
            scrub: 1,
            start: "top top",
            end: "+=150%",
            markers: $_MARKER_DEBUG,
        },
    })
        .to(
            $(".heading-huge"),
            {
                y: "+=300",
                duration: 5,
            },
            "0"
        )
        .to(
            $(".l1"),
            {
                y: "+=250",
                duration: 6,
            },
            "0"
        )
        .to(
            $(".l2"),
            {
                y: "+=200",
                duration: 6,
                opacity: 0.6,
            },
            "0"
        )
        .to(
            $hh_fncy_bar,
            {
                rotation: 120,
                duration: 5,
            },
            "0"
        );
    //#endregion

    //#region Homepage Header Animation
    //=======================================================================
    //  Homepage Header
    //=======================================================================
    //## SCRUMBLE TEXT
    if ($(".scrumble-text-wrap").length > 0 ) {
        const 	__speed = 3,
            	__duration = 1.5;
        const tl_st_home_header = gsap.timeline({
            id: "text-scramble",
            repeat: -1,
            yoyo: true,
            repeatDelay: 2,
            defaults: { ease: "none" },
        });

        tl_st_home_header
            .to("#head-placeholder", {
                scrambleText: {
                    text: $("#head-st-1").text(),
                    chars: "abCDEF10#$@",
                    speed: __speed,
                },
                duration: __duration,
            })
            .to("#head-placeholder", {
                scrambleText: {
                    text: $("#head-st-2").text(),
                    chars: "abCDEF10#$@",
                    speed: __speed,
                },
                duration: __duration,
                delay: 2.5,
            })
            .to("#head-placeholder", {
                scrambleText: {
                    text: $("#head-st-3").text(),
                    chars: "abCDEF10#$@",
                    speed: __speed,
                },
                duration: __duration,
                delay: 2.5,
            });

        tl_st_home_header.play();
    } // .scrumble-text-wrap

    //#endregion

     
    
    
    
    
    
    //#region ABOUT US
    //=======================================================================
    //  About US
    //=======================================================================
    if ($("body").hasClass("page-about-us")) {
        $("html").on("data-loading-done", function () {
            const svg_ele = document.querySelector(".abstract-line-svg");
            if (svg_ele) {
                // lines
                const lines = $("#about-lines  path", svg_ele);
                const circles = $("#about-lines circle", svg_ele);
                const boxes = $("#about-text > g", svg_ele);

				console.log(lines);
				svg_pathPrepare(lines);

                const tl_svg_line = gsap.timeline();
				gsap.set([lines,circles,boxes], {autoAlpha:0})
                
				gsap.utils.toArray(lines).forEach( item => {
					tl_svg_line.to( item , {
						strokeDasharray: window.svg_getLength(item),
						strokeDashoffset: 0,
						duration: 4,
						ease: "power2.inOut",
						stagger: 2,
						autoAlpha: 1,
					},0 )
					.fromTo(item.nextElementSibling, {transformOrigin: "50% 50%",scale: 0, autoAlpha:0}, {
						autoAlpha:1,
						scale:1.25,
						duration: .5,
						stagger: .0261,
						ease:"power3.out"
					},.2)
							
							
			});

			tl_svg_line.fromTo( boxes,{
						autoAlpha:0, 
						yPercent: 30,
						
					},{ 
						autoAlpha: 1, 
						yPercent: 0,
						duration: 1,
						stagger : .51,
					}, "=-70%"
				)
 
				.to('.svg-cont', {
					filter: "blur(20px)",
					duration : 1,
					
				}, 6)
				.to('.svg-cont', {
					filter: "blur(0px)",
					duration : 1,
				})

            } // Data Loading
        });
    }



   

    ///////////////////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////////////////
	//#region GLOBAL ANIMATIONS 
	//////////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////

	
	//--------------------------------------------------------------------
	//#endregion





}); //jquery
