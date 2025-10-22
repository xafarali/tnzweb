<?php
	include('../../include/config.php');
	global $root_path;
	
	$page_title = "Web Hosting";
	
	//https://dcnetworks.ie/cloud-solutions/benefits-of-a-bespoke-cloud-solutions-partner-vs-azure-or-aws-for-irish-development-companies/
	get_head();
	//---------------------------------------------------------------------------------------------------------------------//
	body_open( 'page-srv-hosting full-width ', $root_path . 'template/header/header-hosting.php'  );

?>
 
	<!-- Tag -->
	<div class="auto-scroll-wrapper section  fs no-padding-top srv-abt-cloud  " id="srv-area">
       
        <div class="container">
            <div class="section sm">
                <div class="row mc text-center section-slider-phone  srv-logo-wrapper ">
                    <div class="col-md-3"><img src="/images/logo-magento.svg" alt="" /></div>
                    <div class="col-md-3"><img src="/images/logo-googlecloud.svg" alt="" /></div>
                    <div class="col-md-3"><img src="/images/logo-cloudflare.svg" alt="" /></div>
                    <div class="col-md-3"><img src="/images/logo-wordpress.svg" alt="" /></div>
                </div>
            </div>
        </div>


        <hr>
        <div class="container-xl text-center">
            <h2 class=" font-light padding">Choose Your Web Hosting Plan</h2>
            <p class="lead">There's no one-size-fits-all solution for web hosting. So we've got specific plans to fit your specific needs.</p>
            
            <div class="row hosting-price-wrap">
                
                
                <div class="col-md-3 wow fadeInUp">
                    
                    <div class="card">
                        
                        <div class="content">
                           
                            <h2 class="lbl-host">Shared Hosting</h2>
                            <p class="sm">Ideal solution for beginners</p>
                            <p class="lbl-starts-from">starts from</p>
                            <h3 class="host-price-tag">
                                <sup>$</sup>
                                <span class="_price">3</span>
                                <sup>.99</sup>
                                <sub>/mo</sub>
                            </h3>
                            
                            
                            <div class="list">
                                <ul class="check">
                                    <li>1GB Disk Space</li>
                                    <li>8GB Bandwidth</li>
                                    <li>1 Domain</li>
                                    <li>10 Email Accounts</li>
                                </ul>
                            </div>
                            
                            <a href="https://support.sepiahost.com/cart.php?gid=1" target="_blank" class="read-more sm">Signup</a>
                            
                            
                        </div>

                      
                    </div>
                    
                    
                </div>


                <div class="col-md-3 wow fadeInUp" data-wow-delay="0.25s">

                    <div class="card">

                        <div class="content">

                            <h2 class="lbl-host">Cloud Hosting</h2>
                            <p class="sm">The power of dedicated servers</p>
                            <p class="lbl-starts-from">starts from</p>
                            <h3 class="host-price-tag">
                                <sup>$</sup>
                                <span class="_price">54</span>
                                <sup>.99</sup>
                                <sub>/mo</sub>
                            </h3>


                            <div class="list">
                                <ul class="check">
                                    <li>1 vCPU 2.4 GHz</li>
                                    <li>1GB Memory</li>
                                    <li>25GB Storage</li>
                                    <li>3000GB Bandwidth</li>
                                </ul>
                            </div>

                            <a href="https://support.sepiahost.com/cart.php?gid=7"  target="_blank" class="read-more sm">Signup</a>


                        </div>


                    </div>


                </div>


                <div class="col-md-3 wow fadeInUp" data-wow-delay="0.5s">

                    <div class="card">

                        <div class="content">

                            <h2 class="lbl-host">Dedicated Server</h2>
                            <p class="sm">Take complete control of your servers!</p>
                            <p class="lbl-starts-from">starts from</p>
                            <h3 class="host-price-tag">
                                <sup>$</sup>
                                <span class="_price">89</span>
                                <sup>.99</sup>
                                <sub>/mo</sub>
                            </h3>


                            <div class="list">
                                <ul class="check">
                                    <li>Core2Duo</li>
                                    <li>2GB RAM</li>
                                    <li>250GB Storage</li>
                                    <li>Control Panel</li>
                                </ul>
                            </div>

                            <a href="https://support.sepiahost.com/cart.php?gid=4" class="read-more sm">Signup</a>


                        </div>


                    </div>


                </div>


                <div class="col-md-3 wow fadeInUp" data-wow-delay="0.75s">

                    <div class="card">

                        <div class="content">

                            <h2 class="lbl-host">Enterprise Email</h2>
                            <p class="sm">Ideal solution for beginners</p>
                            <p class="lbl-starts-from">starts from</p>
                            <h3 class="host-price-tag">
                                <sup>$</sup>
                                <span class="_price">3</span>
                                <sup>.99</sup>
                                <sub>/mo</sub>
                            </h3>


                            <div class="list">
                                <ul class="check">
                                    <li>1GB Disk Space</li>
                                    <li>Push Email Support</li>
                                    <li>Free Device Collaboration</li>
                                    <li>10 Email Accounts</li>
                                </ul>
                            </div>

                            <a href="#" class="read-more sm">Signup</a>


                        </div>


                    </div>


                </div>
                
                
            </div>
        </div>
        
    
	</div>
	
	
	
	
<!--	FIND DOMAIN-->
    <div class="auto-scroll-wrapper  area-domain wrap-screen-full bg-lightgray plx-container">
        <div class="anim-float-p1"  style="position: absolute;height: 100%;width: 100%"><div class="bg-circle itm-plx" data-parallex="-40"  data-parallex-y="1.5"></div></div>
        
        <div class="section">
            <div class="container-lg text-center">
                <h3>Find the perfect domain name</h3>
                <p>Enter domain name of your choice and pick any extension name on the next step (choose between .com, .xyz, .online, .tech, .site, .net and many more)</p>
                
                <div class="domain-search">
                    <form action="">
                        <div class="input-box">
                            <div class="row">
                                <div class="col-md-10 no-padding-right-desktop">
                                    <input type="text"  class="text lg" placeholder="Enter your desired domain name" />
                                </div>
                                
                                <div class="col-md-2 col-xs-12 no-padding-left-desktop">
                                    <button class="btn btn-secondary lg" style="width: 100%">Submit</button>
                                </div>
                            </div>
                           
                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
 
    

    
<!--    Web Creation -->
    <div class="auto-scroll-wrapper section theme-dark pr">
        <div class="bg-circle"></div>
        <div class="container-xl">
            
            <div class="row mc">

                <div class="col-md-6 col-lg-5 offset-lg-1 grid-order-1-desktop">

                    <div class="scroll-parallex">

                        <div class="x-wrap anim-bubble-px">
                            <div class="ele-dots-square pos-abs right-2x-n top-2x-n hei ght-full width-half plx-item"  data-parallex="-20"></div>
                        </div>
                        <img src="/images/web-snap-hosting.jpg" alt="" />

                    </div>

                </div>
                
                <div class="col-md-6 col-lg-5 offset-lg-1 section-top  text-right-desktop">
                    <h4 class="h5 -h-tag sm --light margin-top-phone line">SIMPLE AND INTUITIVE</h4>
                    <h3 class="h2 color-light">Easy to setup</h3>
                    <p>
                        Getting your website live is as simple as a click of a button. Everything you need - provided in a clear way.
                    </p>
                </div>
                
              
                
            </div>
            
            <div class="spacer lg"></div>
            

            <div class="row mc">

                <div class="col-md-6 col-lg-5 offset-lg-1">
                    <div class="scroll-parallex">

                        <div class="x-wrap anim-bubble-px">
                            <div class="ele-dots-square pos-abs left-2x-n top-2x-n hei ght-full width-half plx-item" data-parallex="-30"></div>
                        </div>

                    </div>

                    <img src="/images/img-host-score.jpg" alt="" class="pr"/>
                    
                </div>


                <div class="col-md-6 col-lg-5 offset-lg-1">
                    <h4 class="h5 sm --light li-ne margin-top-phone">PERFORMANCE AND SPEED</h4>
                    <h3 class="h2 color-light">Simply fast websites</h3>
                    <p>
                        Website speed can slow or grow your business. Delight your visitors with a lightning fast website.
                    </p>
                </div>

            </div>



            <div class="spacer lg"></div>



            <div class="row mc">

                <div class="col-md-6 col-lg-5 offset-lg-1 grid-order-1-desktop">
                    <div class="scroll-parallex">

                        <div class="x-wrap anim-bubble-px">
                            <div class="ele-dots-square pos-abs left-2x top-2x-n hei ght-full width-half plx-item" data-parallex="-20"></div>
                        </div>
                        <img src="/images/img-host-support.jpg" alt="" class="pr" />

                    </div>

                </div>
                

                <div class="col-md-6 col-lg-5 offset-lg-1  text-right-desktop">
                    <h4 class="h5 sm --light li-ne margin-top-phone">PROFESSIONAL AND HANDS-ON</h4>
                    <h3 class="h2 color-light">24/7/365 Chat Support</h3>
                    <p>
                        Our team of experts will solve technical issues to get your websites up and running. Anytime.
                    </p>
                </div>
                

                


                

            </div>


            <div class="spacer lg "></div>

            <div class="row mc">

                <div class="col-md-6 col-lg-5 offset-lg-1">
                    <div class="scroll-parallex">

                        <div class="x-wrap anim-bubble-px">
                            <div class="ele-dots-square pos-abs left-2x-n top-2x-n hei ght-full width-half plx-item" data-parallex="-20"></div>
                        </div>

                    </div>

                    <img src="/images/img-host-revenue.png" alt="" class="pr" />

                </div>


                <div class="col-md-6 col-lg-5 offset-lg-1">
                    <h4 class="h5 sm --light li-ne margin-top-phone">FLEXIBLE AND SCALABLE</h4>
                    <h3 class="h2 color-light">From micro to large-scale</h3>
                    <p>
                        Different projects require different technologies. Pick a plan that matches your current needs, then upgrade and scale as your website grows.
                    </p>
                </div>

            </div>
    
        </div>
        
    </div>

    
    
    
<!--    EASY USER INTERFACE-->
    <div class="auto-scroll-wrapper _ssection bg-white">
        <div class="container">
            <div class="row mc">
                
                <div class="col-md-6 fs hide-phone">
                    <div class="wrap-screen-half">
                        <img src="/images/img-host-cp.jpg" alt="" class="lg-side-img wow fadeInUp">
                    </div>
                </div>
                
                <div class="col-md-5 offset-md-1">
                    <div class="content padding-2x-phone">
                        <div class="row margin-bottom-2x-desktop">
                            <div class="col-md-2 hide-phone">
                                <div class="card square">
                                    <div class="content text-center">
                                        <i class="fa fa-user-o font-size-h4" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-10">
                                <h3 class="color-secondary">Ease of Use</h3>

                                <p>Plesk Panel is extremely user-friendly and can be used by those with little experience in website development.</p>
                            </div>
                        </div>



                        <div class="row margin-bottom-2x-desktop">
                            <div class="col-md-2 hide-phone">
                                <div class="card square">
                                    <div class="content text-center">
                                        <i class="fa fa-line-chart font-size-h4" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-10">
                                <h3 class="color-secondary">Powerful</h3>

                                <p>A wide variety of tools to satisfy advanced user and website developer needs.</p>
                            </div>
                        </div>


                        <div class="row margin-bottom-2x-desktop">
                            <div class="col-md-2 hide-phone">
                                <div class="card square">
                                    <div class="content text-center">
                                        <i class="fa fa-wordpress font-size-h4" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-10">
                                <h3 class="color-secondary">WordPress Optimized</h3>

                                <p>Get more speed, better SEO, visitor retention and conversions with our custom-built WP optimization stack and LiteSpeed cache.</p>
                            </div>
                        </div>
                   
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
    </div>
    
    
    
    
    
    <div class="auto-scroll-wrapper section faq-home bg-lightgray">
        <div class="container-xl">
            
            <h2 class="h1_ text-center">Frequently Asked Questions</h2>
            
            <div class="faq-wrapper">
                
                
                <div class="panel">
                    <div class="faq-heading">
                        <div class="panel-title">
                            <span>What makes Sepia Solutions different from other website hosting providers?</span>
                        </div>
                    </div>
                    
                    <div class="faq-content collapsed"><p>Sepia Solutions has remained one of the top trusted website hosting providers since 2005. With over 2 million websites utilizing our platforms, we have maintained our commitment to providing the best in website hosting services and management tools. Sepia Solutions distinguishes itself from competitors by focusing on innovation at all levels; including customer support, infrastructure, security, and our suite of web tools.</p></div>
                </div>

                
                <div class="panel">
                    <div class="faq-heading">
                        <div class="panel-title">
                            <span>Does Sepia Solutions provide domain names with web hosting?</span>
                        </div>

                    </div>

                    <div class="faq-content collapsed"><p>Shared web hosting services receive a free domain name upon new account creation. Customers of Sepia Solutions can select a .com, .org, or .net domain name as part of creating their website with us.</p></div>
                </div>

                
                <div class="panel">
                    <div class="faq-heading">
                        <div class="panel-title">
                            <span>Do I get an email address with my web hosting account?</span>
                        </div>

                    </div>

                    <div class="faq-content collapsed"><p>Yes, regardless of what platform you choose with Sepia Solutions, email is included. You can create an email address that is directly tied to your domain name. [Yourname]@[yourdomain].com</p></div>
                </div>
                
                
                <div class="panel">
                    <div class="faq-heading">
                        <div class="panel-title">
                            <span>Can I transfer my existing domain name to Sepia Solutions?</span>
                        </div>

                    </div>

                    <div class="faq-content collapsed"><p>Yes, transferring your existing domain to Sepia Solutions is easy to do within the customer dashboard. Simply navigate to the domain management section of the dashboard and follow the on-screen instructions to begin the transfer of your domain records.</p></div>
                </div>
                
                
                
                <div class="panel">
                    <div class="faq-heading">
                        <div class="panel-title">
                            <span>How do I migrate to Sepia Solutions?</span>
                        </div>

                    </div>

                    <div class="faq-content collapsed"><p>Sepia Solutions provides a concierge migration service to help ensure your site and all its files are transferred correctly and securely. Site migration can be time consuming and complex, however Sepia Solutions makes migrating your site easy. Complete a site migration form located on this page, and our team of experts will reach out to you to begin the process.</p></div>
                </div>
                
                
            </div>
            
        </div>
    </div>
    
    
<?php get_contact() ?>
    
<?php
 
	// ------------------------------------------------------------------------------------ //
	body_close();


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


