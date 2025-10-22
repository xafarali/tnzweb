<?php
	include('../include/config.php');
	global $root_path;
	
	$page_title = "Contact";
	
	
	get_head();
	//---------------------------------------------------------------------------------------------------------------------//
	body_open( 'page-contact-us theme-dark', $root_path . 'template/header/header-contact.php' );

?>
    <!-- Tag -->
    <div class="auto-scroll-wrapper ">
        <div class="section auto-scroll">

            <div class="row">
          
                <div class="col-md-4">

                    <div class="contact-body">
                        <section class=" wow fadeInUp">
                            <div class="_card">
                                <div class="content">
                                    <h3 class="-h2 font-light"><i class="fa fa-envelope-open-o"></i>info@sepiasolutions.com
                                    </h3>
                                    <h3 class="-h2 font-light"><i class="fa fa-phone"></i>+1 646 7094216</h3>

                                </div>
                            </div>
                        </section>

                        <hr>

                        <section class=" wow fadeInUp" data-wow-delay=".25s">
                            <div class="row mc contact-social">
                                <div class="col-md-3">
                                    <h4 class="font-size-h3"><a href="#"><i class="fa fa-facebook"></i></a></h4>
                                </div>
                                <div class="col-md-3">
                                    <h4 class="font-size-h3"><a href="#"><i class="fa fa-twitter"></i></a></h4>
                                </div>
                                <div class="col-md-3">
                                    <h4 class="font-size-h3"><a href="#"><i class="fa fa-linkedin"></i></a></h4>
                                </div>
                            </div>
                        </section>
                        
                        
                    </div>

                </div>
           
                
               
           
            </div>
            
        </div>
        
    </div>


<?php
	// ------------------------------------------------------------------------------------ //
	body_close();




