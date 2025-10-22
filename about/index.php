<?php
	include ('../include/config.php');
	global $root_path;
	
	$page_title = "About Us";
	
	
	get_head();
	//---------------------------------------------------------------------------------------------------------------------//
	body_open('page-about-us',$root_path . 'template/header/header-about.php');
	
?>
    <!-- Tag -->
    <div class="auto-scroll-wrapper">
        <div class="section auto-scroll mc ">
            <div class="row">
                <div class="col-md-5">
                    <h4 class="h-tag line sm">Who we are</h4>
                </div>
            </div>
            
            <div class="row mc">
                <div class="col-md-7 col-lg-5">
                    <h2 class="h1 color-secondary">
                        Our <br> Methodology
                    </h2>
                  
                    <div class="padding-left-3x-desktop">
                        <p class="lead xl light">
                            Doing what it takes to help achieve your <strong>GOALS</strong>
                        </p>
                        <p class=" condensed">From the moment you contact us with an idea, to the last moment of delivering the result to you, we keep in touch with you and keep you aware of everything going on. When you contact us, a number of things take place: we have meetings with you as well as exchange a number of documents in which the project proposal, and the discovery document are the major ones. Making these the base of the project we give you an end result, which is exactly what you have imagined it to be, it holds your ideas down to the last pixel.</p>
                    </div>
                    
                </div>
                
                <div class="col-md-5 offset-lg-2 col-lg-4">
                    <div class="method-wrap">
                        <div class="section-slider" data-slide="1" >
                            
                            <div class="slider-box">
                                <h3>Research</h3>
                                <div class="padding-left-2x-large padding-left-desktop">
                                    <p>Using the adventurous spirit that we have, we launch ourselves into the world of the internet to search for any and all kinds of options and features, giving the user experience and ease of use much importance, but also assessing every aspect possible and exploring all angles.</p>
                                </div>
                            </div>

                            <div class="slider-box">
                                <h3>Strategy</h3>
                                <div class="padding-left-2x-desktop">
                                    <p>Planning how to go about a specific task is essential for its success. After finalizing the wireframe, we start to plan how to go about executing it, i.e. how to go about bringing the idea depicted in the wireframe to life. Since we are creating for you your online identity, we need to make sure that it is a true reflection of you and your business.</p>
                                </div>
                                
                            </div>

                            <div class="slider-box">
                                <h3>Design</h3>
                                <div class="padding-left-2x-desktop">
                                    <p>Where on one hand our developers dig into their programming tools and make sure you get an error free web presence; on the other hand, our savvy designers make sure the design reflects your business as well as has something unique that shall increase traffic to your site. This site shall fulfil all your requirements and more. A site without content is like an empty canvas</p>
                                </div>
                            </div>

                            <div class="slider-box">
                                <h3>Quality Assurance</h3>
                                <div class="padding-left-2x-desktop">
                                    <p>Though our quality engineers work side by side with the software builders and designers, full-fledged testing is also performed after the project is completely developed and the GUI ready. We then focus on making the application completely error free and technically sound, so that it gives you no problems. We thoroughly test the application, using latest and standard testing techniques, including black- and white-box testing.</p>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
    </div>


    <!-- About  -->
    <div class="auto-scroll-wrapper">
        
        <div class="wrap-screen-full">
            
            <div class="section fs auto-scroll bg-abt-who-we plx-container">
                <div class="anim-float-p1"  style="position: absolute;height: 100%;width: 100%"><div class="bg-circle itm-plx" data-parallex="-40"  data-parallex-y="1.5"></div></div>
                <div class="container">
                    
                    <div class="row mc">
                    
                        <div class="col-md-4 text-right">
                            <h4 class="h-tag sm light line">Get to know us</h4>
                            <h2 class="size-h1 color-text-light text-center-phone">who<br class="hide-phone"/> we<br class="hide-phone"/> are?</h2>
                            <div class="hash-tag-wrap">
                                <p>
                                    <span class="hash-tag">#Experienced</span><span class="hash-tag">#Fast_thinkers</span><br><span class="hash-tag">#Creative</span><span class="hash-tag">#Tech_oriented</span>
                                </p>
                            </div>
                            
                        </div>
                        
                        
                        <div class="col-md-7 offset-md-1 clr-light">
                            
                            <p class="lead light xl clr-light" id="add">
                                Our team is made up of industry experts in their respective fields. We all live and breathe digital and approach each project as our own.
                            </p>
                            <p>In the beginning, we started building simple websites and are now creating awesome all-encompassing online solutions. These solutions include online platforms to complex e-commerce solutions.</p>
                            <p>We are able to achieve this by gaining a deep understanding of our client's needs and target market, then combining insight-driven strategy & ideation with the highest levels of execution.</p>
                            <p>Based on our vast experience, we have created our own strategic approach methodology. This methodology allows us to vet</p>

                        </div>

                    </div>
                </div>
               

            </div>
            
        </div>
        

    </div>



   
    
    
    <div class="auto-scroll-wrapper">
        <div class="section">
            <div class="container-xl text-center">
                <h3 class="size-h2 clr-p-dull">We boast of domain knowledge and coverage in different industrial sectors: retail and professional service providers</h3>

                <div class="section sm">
                    <div class="row mc text-center  srv-logo-wrapper section-slider-phone">
                        <div class="col-md-3"><img src="/images/logo-microsoft.svg" alt=""></div>
                        <div class="col-md-3"><img src="/images/logo-google.svg" alt=""></div>
                        <div class="col-md-3"><img src="/images/logo-aws.svg" alt=""></div>
                        <div class="col-md-3"><img src="/images/logo-digital-ocean.svg" alt=""></div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>



<div class="wrap-screen-full">
	<?php get_contact() ?>
</div>









<?php
	// ------------------------------------------------------------------------------------ //
	body_close();




