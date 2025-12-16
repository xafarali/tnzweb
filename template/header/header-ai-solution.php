<?php
	/**
	 * Author : xafaR
	 * Created at: 25 01, 2020
	 * Description : File belongs to sepiasol2
	 * header of homepage
	 */
	global $images;
	?>
<div class="auto-scroll-wrapper">
    <div class="banner-wrapper section fs auto-scroll plx-container bg-abs-1 xs-fx-grow has-corner" data-mode="shr"  data-trigger=".auto-scroll-wrapper" data-corner="40px">

        <div class="bg-plate cloudy" style="position:absolute; top: 0;width: 100%; ">

            <div class="bg-plate-base">
                <img src="<?php echo $images ?>/srv/header-ai.jpg" alt="" class="imgFit" style="filter:blur(2px)">
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
                                           <div class="xs-fx-spin-text dp  font-size-xl" 
                                                data-trigger=".banner-content" 
                                                data-mod = "rev">
                                                <div class="h2 color-white">Advance</div> 
                                                AI Solutions </div><div class="h2 color-white wow fadeInUp" data-wow-delay="1s">for Intelligent Business Growth </div>
                                    </h1>
                                    </div>
                                   
                                   
                                   <div class="fx-spin-wrapper">
                                    <p class=" xs-fx-spin-text lead xl light color-white text-center-phone "  
                                        data-type="chars" 
                                        data-style="fd" 
                                        data-trigger=".banner-content"
                                        data-trigger-start="top 60%"
                                        data-delay="2",
                                        data-stagger=".025"
                                        >                                                                          
                                        TnZ International provides scalable AI solutions that enable intelligent automation, predictive insights, workflow automation and data-driven decision-making.
                                    </p>
                                    </div>
                                    

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


