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
    <div class="banner-wrapper section fs auto-scroll plx-container bg-abs-1 xs-fx-grow" data-mode="grow" data-trigger=".auto-scroll-wrapper">

        <div class="bg-plate cloudy" style="position:absolute; top: 0;width: 100%; ">

            <div class="bg-plate-base">
                <img src="<?php echo $images ?>/header-cloud.jpg" alt="" class="imgFit">
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
                                        <h1 class="color-primary font-size-xxl text-center xs-fx-spin-text" 
                                        data-trigger=".banner-content"                                    
                                        > 
                                       POWER BI
                                    </h1>
                                    </div>
                                   
                                   
                                   <div class="fx-spin-wrapper">
                                    <p class=" xs-fx-spin-text lead xl light color-white text-center-phone "  
                                        data-type="chars" 
                                        data-style="fd" 
                                        data-trigger=".banner-content"
                                        data-trigger-start="top 60%"
                                        data-delay="1"
                                        >
                                       Transform Your Data into Insightful Reports and Dashboards
                                    </p>
                                    </div>
                                    <p class="wow fadeInUp text-light" data-wow-delay="2s">Power BI is a tool that helps you understand your data better. It takes your data and turns it into easy-to-read visual reports and dashboards. This way, you can make better decisions for your business. Power BI works in many areas like healthcare, finance, and retail, helping different industries make sense of their data.</p>

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


