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
    <div class="banner-wrapper section fs auto-scroll plx-container bg-abs-1 +xs-fx-grow has-corner" data-mode="shr"  data-trigger=".auto-scroll-wrapper" data-corner="40px">

        <div class="bg-plate cloudy" style="position:absolute; top: 0;width: 100%; ">

            <div class="bg-plate-base">
                <img src="<?php echo $images ?>/srv/header-team.jpg" alt="" class="imgFit" style="filter:blur(2px)">
                <img src="/images/illus-home-ribbon-about.svg" alt="" class="illus-overlay" style="transform:scale(-1,1)">
            </div>            
        </div>
        
        <div>
            
            <div class="banner-content-wrapper">

                <div class="banner-content">

                    <div class="container-fluid padding">
                        
                        <div class="row mc">
                            

                            <div class="col-md-4 text-center-phone">
                                <div class="">
                                    <div class="fx-spin-wrapper">
                                        <h1 class="color-white text-right text-shadow">
                                           <div class="xs-fx-spin-text dp  font-size-xl" data-trigger=".banner-content" ,
                                        data-mod = "rev">TnZ's Team</div>
                                    </h1>
                                    </div>
                                   
 <!--                                  
                                   <div class="fx-spin-wrapper">
                                    <p class=" xs-fx-spin-text lead xl light color-white text-center-phone "  
                                        data-type="chars" 
                                        data-style="fd" 
                                        data-trigger=".banner-content"
                                        data-trigger-start="top 60%"
                                        data-delay="2",
                                        data-stagger=".05">
                                            A dedicated group of skilled professionals driven by Collaboration, Innovation, and Problem-solving.                                           
                                   
                                    </p>
                                    </div>
-->

                                </div>
                            </div>  <!-- col-6 -->
                            
                            
                            <div class=" offset-mde-1 col-md-8">
                                
                                    <div class="row">
                                        <?php echo print_team_member(      
                                            col:'9 offset-md-2 wow fadeInRight',
                                            des : "CEO",
                                            title:"Taimur Baig",
                                            dec : "As the CEO of T&Z International, I value building strong and meaningful relationships with my team and clients."
                                        ) ?>
                                    </div><!-- Row -->                                         
                                   
                                
                            </div>
                                
                          
                            
                        </div>
                        
                    </div>

                </div>
                <!-- banner content -->

            </div>

        </div>
        
        
       

    </div>



    <div class="text-center section read-more-down abs c-w sm wow fadeInDown hide-phone" data-wow-delay=".72s">
		<?php # print_read_fancy('#srv-area', 'x-scroll-to c-w') ?>
    </div>
    
</div>


