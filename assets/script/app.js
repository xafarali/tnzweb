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

			//heading text
			let heading_text =  SplitText.create( $('h1.fx-spin-text'), {type: 'chars'});
			let para_text =  SplitText.create( $('p.fx-split-row-text'), {type: 'lines'});
			let red_line	= $('.svg-red svg polyline');
			let red_line_text = $('.svg-red svg text')


			gsap.set( heading_text.chars, {
				rotationX:-90,
				autoAlpha:0,
				transformOrigin: "50% 50% -60"
			})
			gsap.set(para_text.lines, {
				autoAlpha:0,
				yPercent:100,
			})


            const svg_ele = document.querySelector(".abstract-line-svg");
            if (svg_ele) {
                // lines
                const lines = $("#about-lines  path", svg_ele);
                const circles = $("#about-lines circle", svg_ele);
                const boxes = $("#about-text > g", svg_ele);

				
				svg_pathPrepare(lines);
				svg_pathPrepare(red_line);
				
                const tl_svg_line = gsap.timeline();
				gsap.set([lines,boxes], {autoAlpha:0})
                
				gsap.utils.toArray(lines).forEach( item => {

					tl_svg_line.to( item , {
						strokeDasharray: window.svg_getLength(item),
						strokeDashoffset: 0,
						duration: 4,
						ease: "power2.inOut",
						stagger: 2,
						autoAlpha: 1,
					},0 )
					.from(item.nextElementSibling, {
						x:gsap.utils.random(-500,1500, 10),
						y:gsap.utils.random(-1500,1500, 10),
						autoAlpha:0,
						duration:4,
						scale:.25,
						stagger:0.1,
						ease:"power3.out"
					},1)
					/*
					.fromTo(item.nextElementSibling, {transformOrigin: "50% 50%",scale: 0, autoAlpha:0}, {
						autoAlpha:1,
						scale:1.25,
						duration: .5,
						stagger: .0261,
						ease:"power3.out"
					},.1)*/
							
							
			});
			// Box Pop UP
			tl_svg_line.fromTo( boxes,{
						autoAlpha:0, 
						yPercent: 70,
						
					},{ 
						autoAlpha: 1, 
						yPercent: 0,
						duration: 1,
						stagger : .5,
						ease: "back.out(4)"
					}, ">-50%"
				)
				// blurout for heading
				.to('.svg-cont', {
					filter: "blur(10px)",
					duration : .65,
					
				}, 6.5)
				.to('.svg-cont', {
					//filter: "blur(0px)",
					//duration : 1,
				})

				//text reveal
				.to( heading_text.chars, {
					rotationX:0,
					autoAlpha:1,
					stagger:0.1,
					duration:.5,
					ease:"power3.out"
				})
				.to( para_text.lines, {
					autoAlpha:1,
					yPercent:0,
					duration:.5,
					stagger:.2
				})
				// red line
				.to(red_line,{
					strokeDasharray: window.svg_getLength(red_line),
					strokeDashoffset: 0,
					duration: 1.5,
					ease: "power2.in",					
					autoAlpha: 1,
				})
				.from(red_line_text, {
					autoAlpha:0,
					yPercent:100,
					duration: .75
				}) // tl_svg_line timeline endss

                //---------------------------------------------------------
                // services info graphics
                //---------------------------------------------------------
                if ( $('.service-infographic').length ) {
                   let info_gfx = $('.service-infographic svg path');
                   let info_txt = $('.service-infographic svg text');

                   let tl_info_gfx = new gsap.timeline({
                        scrollTrigger: {
                            trigger: '.ev-scrolltrigger.service-infographic',
                            start: 'top 70%',
                            //markers: true,
                            scrub:true,
                            end:'70% 50%'
                        }
                   }).from([info_gfx,info_txt], {
                        autoAlpha:0,
                        yPercent:100,
                        duration: .75,
                        stagger: 0.25
                   })
                }

                //---------------------------------------------------------
                /// About Us Card 
                //---------------------------------------------------------
                if($('.card-wrapper').length ) {
                    let card_flip = $('.cards-cont');
                    let tl_card_abt = new gsap.timeline({
                        scrollTrigger: {
                            trigger: '.card-wrapper',
                            start: 'top 20%',
                            end : '150%',
                            pin: true,
                            //markers: true,
                            scrub : true,
                           ///pinSpacing: true,
                        }
                    })
                    gsap.set(card_flip[0], {
                        xPercent:100,
                        // autoAlpha:.3
                    })
                    gsap.set(card_flip[2], {
                        xPercent:-100,
                        // autoAlpha:.3
                    })

                    tl_card_abt.to(card_flip[0], {
                        xPercent:-20,
                        duration : 2,
                        ease:'power2.in'
                    }, 0 )
                    .to(card_flip[2], {
                        xPercent:20,
                        duration : 2,
                        ease:'power2.in'
                    }, 0 )

                    .to(card_flip, {
                        rotateY:180,
                        duration: 2,
                        stagger: 0.15,
                    }, ">+2")
                    

                } // if cards


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
	
    // Rotating TEXT effect 3d
    if ( $(".xs-fx-spin-text").length ) {
        /**
         * parent container, which will trigger it's animation
         * location of trigger
         * length of trigger
         * speed of animation
         * stagger
         */

        let spinText = $('.xs-fx-spin-text');

        spinText.each( function(i,v) {

            // basic setup
            
            let $this = $(v);
            let evTrigger =     $this.data('trigger')       != undefined ? $this.data('trigger') : $this.parent();
            let triggerStart =  $this.data('trigger-start') != undefined ? $this.data('trigger-start') : "0% 20%";
            let triggerEnd =    $this.data('trigger-end')   != undefined ? $this.data('trigger-end') : "100% 20%";
            let itemStagger  =  $this.data('stagger')       != undefined ? $this.data('stagger') : .15;
            let speed        =  $this.data('duration')      != undefined ? $this.data('duration') : 1;
            let type         =  $this.data('type')          != undefined ? $this.data('type') : "chars";
            let delay        =  $this.data('delay')         != undefined ? $this.data('delay') : 0;
            let pin          =  $this.data('pin')           != undefined ? $this.data('pin') : false;
            let scrub        =  $this.data('scrub')         != undefined ? $this.data('scrub') : false;
            let animation    =  $this.data('style')         != undefined ? $this.data('style') : 'spin';
            


            // Clone Text 
            let positions = $this.position();
            let width   = $this.width();
            let cloneText = $this.clone().insertAfter($this);
            cloneText.addClass('shadow-clone');
            cloneText.css({'left': positions.left, 'top': positions.top, 'width': width})
            $this.addClass('txt-flipped');
           
            // Split it
            let origText =      SplitText.create( $this, { type:type, smartWrap:true });
            let shadowText =    SplitText.create(cloneText, { type:type, smartWrap:true});


            // Early Setup
            if ( animation == 'spin') {
                 

                 gsap.set( origText[type], {
                    rotationX:-90,
                    autoAlpha:0,
                    transformOrigin: "50% 50% -70"
                })

                gsap.set(shadowText[type], {
                    rotationX:0,
                    autoAlpha:1,
                    transformOrigin: "50% 50% -70"
                })
            }  else {
                gsap.set( origText[type], {
                    yPercent:100,
                    autoAlpha:0,
                    filter:'blur(5px)'
                })

                 gsap.set( shadowText[type], {
                    yPercent:230,
                    autoAlpha:0,
                    
                })
                
            }


            //animate 
            let autoR = new gsap.timeline({
                scrollTrigger: {
                    trigger: evTrigger,
                    start:  triggerStart,
                    end:  triggerEnd,
                    scrub: scrub,
                  //markers: true
                }

            })

            if ( animation == "spin" ) {

                autoR.to(origText[type], {
                    rotationX: 0,
                    autoAlpha:1,
                    duration: speed,
                    stagger: itemStagger,
                    ease:"power4.out",
                    delay: delay
                }, 0 )
                .to(shadowText[type], {
                    rotationX:90,
                    autoAlpha:0,
                    duration: speed,
                    stagger: itemStagger,
                    ease:"power4.out",
                    delay: delay
                }, 0 )

            } else {               

                autoR.to( origText[type], {
                    yPercent:0,
                    autoAlpha:1,
                    duration: speed,
                    stagger: itemStagger,
                    ease:"power4.in",
                    delay: delay,
                    filter: 'blur(0px)'
                }, 0 )

                // .to( shadowText[type], {
                //     yPercent:-100,
                //     autoAlpha:0,
                //     duration: speed,
                //     stagger: itemStagger,
                //     ease:"power4.in",
                //     delay: delay
                // }, 0 )
            }
            
            
        })
    }

	
    // Grow / Shrink Container based on Scroll
    if ( $('.xs-fx-grow').length ) {

        let container = $('.xs-fx-grow');
        container.each(function(i,v) {
            
            let $this = $(v);
            let mode =          $this.data('mode')          != undefined ? $this.data('mode') : 'grow';
            let scale =         $this.data('scale')         != undefined ? $this.data('scale') :  .75; 
            let evTrigger =     $this.data('trigger')       != undefined ? $this.data('trigger') : $this.parent();
            let triggerStart =  $this.data('trigger-start') != undefined ? $this.data('trigger-start') : "0% 0%";
            let triggerEnd =    $this.data('trigger-end')   != undefined ? $this.data('trigger-end') : "100% 20%";
            let itemStagger  =  $this.data('stagger')       != undefined ? $this.data('stagger') : .15;
            let speed        =  $this.data('duration')      != undefined ? $this.data('duration') : 1;
            let delay        =  $this.data('delay')         != undefined ? $this.data('delay') : 0;
            let pin          =  $this.data('pin')           != undefined ? $this.data('pin') : false;
            let scrub        =  $this.data('scrub')         != undefined ? $this.data('scrub') : true;

            let scale_tl    = new gsap.timeline({
                scrollTrigger: {
                    trigger: evTrigger,
                    start:  triggerStart,
                    end:  triggerEnd,
                    scrub: scrub,
                    markers: true,
                    pin:true
                }
            })

            if( mode == 'grow') {

                gsap.set( $this, {
                    scale:scale,
                    //rotationX:30,
                    // autoAlpha: .25,
                    //filter: 'blur(1px)'
                })


                scale_tl.to( $this, {
                    scale: 1,
                    duration: speed,
                    delay: delay
                },0)

            }

            else {
                gsap.set( $this, {
                scale:1
                })


                scale_tl.to( $this, {
                    scale: scale,
                    duration: speed,
                    delay: delay
                },0)

            }
           

            

        })
    }


	//--------------------------------------------------------------------
	//#endregion





}); //jquery
