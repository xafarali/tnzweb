<?php
	/**
	 * Author : xafaR
	 * Created at: 25 10, 2025
	 * Description : File belongs to xafaR
	 * header of homepage
	 */
	global $images;
	?>
<div class="auto-scroll-wrapper">
    <div class="banner-wrapper section fs auto-scroll plx-container bg-abs-1 xs-fx-grow has-corner" data-mode="shr"  data-trigger=".auto-scroll-wrapper" data-corner="40px">

        <div class="bg-plate cloudy" style="position:absolute; top: 0;width: 100%; ">

            <div class="bg-plate-base">
                <img src="<?php echo $images ?>/srv/header-mob-app-dev.jpg" alt="" class="imgFit">
            </div>
            
        </div>
        
        <div>
            
            <div class="banner-content-wrapper">

                <div class="banner-content">

                    <div class="container">
                        
                        <div class="row mc">
                            

                            <div class="col-md-10 text-center-phone offset-md-1">
                                <div class="">
                                    <div class="fx-spin-wrapper">
                                        <h1 class="color-white text-center text-shadow">
                                           <div class="xs-fx-spin-text dp  font-size-xl" data-trigger=".banner-content" 
                                        data-mod = "rev"                                   
                                        > Innovative Mobile App</div><div class="h2 _color-white wow fadeInUp" data-wow-delay="1s">Development</div>
                                    </h1>
                                    </div>
                                   
                                   
                                   <div class="fx-spin-wrapper">
                                    <p class=" xs-fx-spin-text lead light color-white text-center-phone "  
                                        data-type="chars" 
                                        data-style="fd" 
                                        data-trigger=".banner-content"
                                        data-trigger-start="top 60%"
                                        data-delay="2",
                                        data-stagger=".05"
                                        >
                                        Our mission is to push the boundaries of mobile app development, delivering exceptional applications for both iOS and Android.
                                    </p>
                                    </div>
                                    <!-- <p class="wow fadeInUp text-light" data-wow-delay="2s">
                                        In a world where technology is a critical cornerstone of success, TnZ International stands at the forefront of ensuring your computer networks are not just operational but are consistently optimized for peak performance. We pride ourselves on empowering businesses to manage their IT infrastructure efficiently, maintaining both hardware and software at the highest standards of excellence. 
                                    </p> -->

                                </div>
                            </div>  <!-- col-6 -->
                            
                            
                         
                                
                          
                            
                        </div>
                        
                    </div>

                </div>
                <!-- banner content -->

            </div>

        </div>
        
        
       

    </div>



    <div class="text-center section read-more-down abs c-w sm wow fadeInDown hide-phone" data-wow-delay=".72s">
		<?php print_read_fancy('#srv-area', 'x-scroll-to c-w') ?>
    </div>
    
</div>


