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
  $("html").on("data-loading-done", function () {}); // LOADING SCREEN TRIGGER

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
        opacity: .6,
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
  if ($(".scrumble-text-wrap").length > 0) {

	const __speed = 3, __duration = 1.5;
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



  



  	





///////////////////////////////////////////////////////////////////////
}); //jquery





