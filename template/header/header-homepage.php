<?php
	/**
	 * Author : xafaR
	 * Created at: 25 01, 2025
	 * Description : File belongs to xafaR
	 * header of homepage
	 */
	global $images;
	?>
<div class="auto-scroll-wrapper">
   
    <div class="banner-wrapper _section fs home-banner auto-scroll st-home">

        <div class="slider-wrapper section home-main-slider fs">
            
            
            
            <div class="banner-content-wrapper">
                <div>
                    <div class="banner-content-wrapper-child">

                        <div class="banner-content">

                            <div class="container-">

                                <div class="row mc">

                                    <div class="heading-cont">
                                        <h1 class="xl heading-huge">AI POWERED</h1>
                                        <div class="sub-heading">
                                            <p class="l1 h2 text-uppercase _display-1 color-primary-700 no-margin font-weight-100">Your One Solution For</p>
                                            <div class="l2 scrumble-text-wrap">
                                                <p id="head-st-1" class="hide"><strong>IT Challenges</strong></p>
                                                <p id="head-st-2" class="hide"><strong>Digital Needs</strong></p>
                                                <p id="head-st-3" class="hide"><strong>One Partner</strong></p>
                                                <p id="head-placeholder" class="h1 text-uppercase color-primary-700 font-bold no-margin"></p>
                                            </div>
                                        </div>
                                    </div>

                                </div>




                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <!-- bc-wrapper--> 

        </div><!-- slider-wrapper -->
     
        
    </div> <!-- banner-wrapper -->

    <div class="fancy-bar bottom">
        <div class="img-holder"> <img src="<?php echo $images ?>/img_plus.svg" alt=""></div>        
        <div class="img-holder"> <img src="<?php echo $images ?>/img_plus.svg" alt=""></div>   
        <div class="text-center  hide-phone" data-wow-delay=".72s">
	        <?php print_read_fancy('#sec-about-home', 'x-scroll-to') ?>
        </div>
        <div class="img-holder"> <img src="<?php echo $images ?>/img_plus.svg" alt=""></div>        
        <div class="img-holder"> <img src="<?php echo $images ?>/img_plus.svg" alt=""></div>        
    </div>

    <div class="canvas-container">
        <canvas id="canvas_3d" class="anim-bubble-xl"></canvas>
    </div>
</div>


