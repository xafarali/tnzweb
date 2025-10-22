<?php
	include('../../include/config.php');
	global $root_path;
	
	$page_title = "Clouds";
	
	//https://dcnetworks.ie/cloud-solutions/benefits-of-a-bespoke-cloud-solutions-partner-vs-azure-or-aws-for-irish-development-companies/
	get_head();
	//---------------------------------------------------------------------------------------------------------------------//
	body_open( 'page-srv-cloud full-width ', $root_path . 'template/header/header-cloud.php'  );

?>
 
	<!-- Tag -->
	<div class="auto-scroll-wrapper section no-padding-top srv-abt-cloud  " id="srv-area">
       
        <div class="container-xl">
            <div class="section sm">
                <div class="row mc text-center section-slider-phone  srv-logo-wrapper ">
                    <div class="col-md-3"><img src="/images/logo-google.svg" alt="" /></div>
                    <div class="col-md-3"><img src="/images/logo-digital-ocean.svg" alt="" /></div>
                    <div class="col-md-3"><img src="/images/logo-aws.svg" alt="" /></div>
                    <div class="col-md-3"><img src="/images/logo-wordpress.svg" alt="" /></div>
                </div>
            </div>
        </div>


        <hr>
        <div class="container-xl">
            <h2 class=" size_-h1 font-light padding  text-center">Cloud computing with <strong>SepiaSolutions</strong></h2>
            <p class="lead">At Sepia we understand and recognise the needs and requirements of a modern IT department while it responsibly manages and maintain company data and other assets, taking care of security, compliance, privacy as well as reliablity , availablity and accessibility benchmarks.</p>
            <p>When you decide to trust our expertise, you become our partners, and the purpose of the project becomes to deliver the best results. We don't just suggest solutions for you, we study and assess the current scenario, making a complete analysis of what woudl be best for the growth of yoru enterprises as well as your pocket.</p>
        </div>


        <div class="text-center section read-more-down ab s c-w sm hide-phone">
			<?php print_read_fancy('#area-cloud-info', 'x-scroll-to', "keep reading...") ?>
        </div>
        
	</div>
	
	
    
    <!-- WHY CLOUD 2 -->
    <div class="auto-scroll-wrapper section fs bg-light-blue area-cloud-info" id="area-cloud-info">
        <div class="container">
            <h2 class="text-center h1 font-light">Why <strong>Cloud</strong> After All?</h2>
            <div class="row">
                
                <div class="col-md-3 mc _offset-md-1 gri_d-order-1-desktop">
                    <div class="text-right-desktop">
                      
                        <h3 class="font-size-h2">Deploy and scale seamlessly</h3>
                        <p>
                            Our optimized configuration process saves your team time when running and scaling distributed applications, AI & machine learning workloads, hosted services, client websites, or CI/CD environments.
                        </p>
                    </div>
                </div>
                
                
                
                <div class="col-md-8 offset-md-1">
                    <div class="container">

                        <div class="cloud-desc-wrap">

                            <div class="row">

                                <div class="col-md-12 hide-phone">
                                    <div class="pager-cloud-feature _v2">
                                        <ul>
                                            <li class="active"><span>Deploy</span></li>
                                            <li><span>Scale</span></li>
                                            <li><span>Store</span></li>
                                            <li><span>Secure</span></li>
                                            <li><span>Monitor</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-md-12 -offset-md-1">

                                    <div class="cloud-features section-slider" data-slide="1" data-slide-pager-static=".pager-cloud-feature > ul" data-slide-parent=".section-slider.cloud-features" data-slide="1">

                                        <div class="cf-row">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <img src="/images/cloud/icon-config.svg" alt="" class="srv-ico">
                                                    <h4>Virtual Machine in minutes</h4>
                                                    <p>Spin up a managed Kubernetes cluster in just a few clicks. Simply specify the size and location of your worker nodes.</p>
                                                </div>

                                                <div class="col-md-4 offset-md-2">
                                                    <img src="/images/cloud/icon-cpu.svg" alt="" class="srv-ico">
                                                    <h4>Flexible compute range</h4>
                                                    <p>Spin up a managed VM cluster in just a few clicks. Simply specify the size and location of your worker nodes.</p>
                                                </div>
                                            </div>


                                            <div class="row">
                                                <div class="col-md-4">
                                                    <img src="/images/cloud/icon-marketplace.svg" alt="" class="srv-ico">
                                                    <h4>1-Click App Marketplace</h4>
                                                    <p>Quickly deploy projects using one of our preconfigured 1-Click Apps, like LAMP, Docker, and WordPress.</p>
                                                </div>

                                                <div class="col-md-4 offset-md-2">
                                                    <img src="/images/cloud/icon-global.svg" alt="" class="srv-ico">
                                                    <h4>Global availability</h4>
                                                    <p>Deploy to any of our data center locations – New York, SF, London, Amsterdam, Bangalore, and more.</p>
                                                </div>
                                            </div>
                                        </div> <!-- cf row -->


                                        <div class="cf-row">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <img src="/images/cloud/icon-resize.svg" alt="" class="srv-ico">
                                                    <h4>Resize</h4>
                                                    <p>Quickly scale up, scale down, or migrate to different Droplet types to meet the demands of your customers.</p>
                                                </div>

                                                <div class="col-md-4 offset-md-2">
                                                    <img src="/images/cloud/ico-load-balance.svg" alt="" class="srv-ico">
                                                    <h4>Load Balancers</h4>
                                                    <p>Keep your application up and running smoothly by distributing traffic across Droplets, including those running as Kubernetes worker nodes.</p>
                                                </div>
                                            </div>


                                            <div class="row">
                                                <div class="col-md-4">
                                                    <img src="/images/cloud/ico-ip.svg" alt="" class="srv-ico">
                                                    <h4>Floating IPs</h4>
                                                    <p>Redirect network traffic between your VM using a Floating IP.</p>
                                                </div>

                                                <div class="col-md-4 offset-md-2">
                                                    <img src="/images/cloud/ico-payment.svg" alt="" class="srv-ico">
                                                    <h4>Pay for what you use</h4>
                                                    <p>With hourly billing, only pay for the resources that you actually use.</p>
                                                </div>

                                            </div>

                                        </div> <!-- cf row -->


                                        <div class="cf-row">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <img src="/images/cloud/ico-database.svg" alt="" class="srv-ico">
                                                    <h4>Managed Databases</h4>
                                                    <p>Provision MySQL, Redis, and PostgreSQL databases in just a few clicks. We’ll handle setting up, backing up, and updating – so you can focus on building great apps.</p>
                                                </div>

                                                <div class="col-md-4 offset-md-2">
                                                    <img src="/images/cloud/ico-store-download.svg" alt="" class="srv-ico">
                                                    <h4>Object Storage</h4>
                                                    <p>Store and retrieve any amount of data, including audio, video, images, and log files using DigitalOcean Spaces.</p>
                                                </div>
                                            </div>


                                            <div class="row">
                                                <div class="col-md-4">
                                                    <img src="/images/cloud/ico-ssd.svg" alt="" class="srv-ico">
                                                    <h4>Block Storage</h4>
                                                    <p>Attach additional SSD-based storage to your Droplets for your databases or file storage.</p>
                                                </div>

                                                <div class="col-md-4 offset-md-2">
                                                    <img src="/images/cloud/ico-snapshot.svg" alt="" class="srv-ico">
                                                    <h4>Backups &amp; Snapshots</h4>
                                                    <p>Capture backups and snapshots of your Droplets to store server images or automatically scale your system.</p>
                                                </div>

                                            </div>

                                        </div> <!-- cf row -->


                                        <div class="cf-row">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <img src="/images/cloud/ico-firewall.svg" alt="" class="srv-ico">
                                                    <h4>Cloud Firewalls</h4>
                                                    <p>Easily secure your infrastructure and instantly define what services are visible on all of your Droplets.</p>
                                                </div>

                                                <div class="col-md-4 offset-md-2">
                                                    <img src="/images/cloud/ico-networking.svg" alt="" class="srv-ico">
                                                    <h4>Private Networking</h4>
                                                    <p>Enable communication between VM in the same datacenter.</p>
                                                </div>
                                            </div>


                                            <div class="row">
                                                <div class="col-md-4">
                                                    <img src="/images/cloud/ico-team.svg" alt="" class="srv-ico">
                                                    <h4>Team management</h4>
                                                    <p>Invite team members to collaborate, ensure security with two-factor auth, and control your resources with centralized billing.</p>
                                                </div>

                                            </div>

                                        </div> <!-- cf row -->


                                        <div class="cf-row">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <img src="/images/cloud/ico-integrate.svg" alt="" class="srv-ico">
                                                    <h4>Natively integrated</h4>
                                                    <p>Monitor system-level metrics in the same place you manage your infrastructure – at no additional cost.</p>
                                                </div>

                                                <div class="col-md-4 offset-md-2">
                                                    <img src="/images/cloud/ico-resource.svg" alt="" class="srv-ico">
                                                    <h4>Resource metrics</h4>
                                                    <p>View summary stats and time series graphs of resource usage for your VM cluster, database, or individual VM nodes.</p>
                                                </div>
                                            </div>


                                            <div class="row">
                                                <div class="col-md-4">
                                                    <img src="/images/cloud/ico-alert.svg" alt="" class="srv-ico">
                                                    <h4>Real-time alerts</h4>
                                                    <p>Receive alerts via Slack or email whenever a metric crosses your specified threshold and critical issues arise in your infrastructure.</p>
                                                </div>

                                            </div>

                                        </div> <!-- cf row -->

                                    </div>

                                </div>

                            </div>


                        </div>


                    </div>
                </div>
                
            </div>
            
        </div>


        


    </div>
    
    
    
    
    
    
    
    
<!--    <!-- WHY CLOUD -->-->
<!--    <div class="auto-scroll-wrapper section fs bg-light-blue area-cloud-info" id="_area-cloud-info">-->
<!--        <div class="container">-->
<!--            <div class="text-center">-->
<!--                <h3 class="h-tag">Why Cloud?</h3>-->
<!--                <h2 class="font-size-h2">Deploy and scale seamlessly</h2>-->
<!--                <p class="container-lg">-->
<!--                    Our optimized configuration process saves your team time when running and scaling distributed applications, AI & machine learning workloads, hosted services, client websites, or CI/CD environments.-->
<!--                </p>-->
<!--            </div>-->
<!--        </div>-->
<!--        -->
<!--        -->
<!--        <div class="container">-->
<!--            -->
<!--            <div class="cloud-desc-wrap">-->
<!---->
<!--                <div class="row">-->
<!---->
<!--                    <div class="col-md-2 hide-phone">-->
<!--                        <div class="page_r-cloud-feature">-->
<!--                            <ul>-->
<!--                                <li class="active"><span>Deploy</span></li>-->
<!--                                <li><span>Scale</span></li>-->
<!--                                <li><span>Store</span></li>-->
<!--                                <li><span>Secure</span></li>-->
<!--                                <li><span>Monitor</span></li>-->
<!--                            </ul>-->
<!--                        </div>-->
<!--                    </div>-->
<!---->
<!--                    <div class="col-md-9 offset-md-1">-->
<!--                        -->
<!--                        <div class="cloud-features section-slider" data-slide="1" data-slide-pager-static=".pager-cloud-feature > ul" data-slide-parent=".section-slider.cloud-features" data-slide="1">-->
<!--                            -->
<!--                            <div class="cf-row">-->
<!--                                <div class="row">-->
<!--                                    <div class="col-md-4">-->
<!--                                        <img src="/images/cloud/icon-config.svg" alt="" class="srv-ico">-->
<!--                                        <h4>Virtual Machine in minutes</h4>-->
<!--                                        <p>Spin up a managed Kubernetes cluster in just a few clicks. Simply specify the size and location of your worker nodes.</p>-->
<!--                                    </div>-->
<!---->
<!--                                    <div class="col-md-4 offset-md-2">-->
<!--                                        <img src="/images/cloud/icon-cpu.svg" alt="" class="srv-ico">-->
<!--                                        <h4>Flexible compute range</h4>-->
<!--                                        <p>Spin up a managed VM cluster in just a few clicks. Simply specify the size and location of your worker nodes.</p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                -->
<!--                                -->
<!--                                <div class="row">-->
<!--                                    <div class="col-md-4">-->
<!--                                        <img src="/images/cloud/icon-marketplace.svg" alt="" class="srv-ico">-->
<!--                                        <h4>1-Click App Marketplace</h4>-->
<!--                                        <p>Quickly deploy projects using one of our preconfigured 1-Click Apps, like LAMP, Docker, and WordPress.</p>-->
<!--                                    </div>-->
<!---->
<!--                                    <div class="col-md-4 offset-md-2">-->
<!--                                        <img src="/images/cloud/icon-global.svg" alt="" class="srv-ico">-->
<!--                                        <h4>Global availability</h4>-->
<!--                                        <p>Deploy to any of our data center locations – New York, SF, London, Amsterdam, Bangalore, and more.</p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div> <!-- cf row -->-->
<!--                            -->
<!---->
<!--                            <div class="cf-row">-->
<!--                                <div class="row">-->
<!--                                    <div class="col-md-4">-->
<!--                                        <img src="/images/cloud/icon-resize.svg" alt="" class="srv-ico">-->
<!--                                        <h4>Resize</h4>-->
<!--                                        <p>Quickly scale up, scale down, or migrate to different Droplet types to meet the demands of your customers.</p>-->
<!--                                    </div>-->
<!---->
<!--                                    <div class="col-md-4 offset-md-2">-->
<!--                                        <img src="/images/cloud/ico-load-balance.svg" alt="" class="srv-ico">-->
<!--                                        <h4>Load Balancers</h4>-->
<!--                                        <p>Keep your application up and running smoothly by distributing traffic across Droplets, including those running as Kubernetes worker nodes.</p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!---->
<!---->
<!--                                <div class="row">-->
<!--                                    <div class="col-md-4">-->
<!--                                        <img src="/images/cloud/ico-ip.svg" alt="" class="srv-ico">-->
<!--                                        <h4>Floating IPs</h4>-->
<!--                                        <p>Redirect network traffic between your VM using a Floating IP.</p>-->
<!--                                    </div>-->
<!---->
<!--                                    <div class="col-md-4 offset-md-2">-->
<!--                                        <img src="/images/cloud/ico-payment.svg" alt="" class="srv-ico">-->
<!--                                        <h4>Pay for what you use</h4>-->
<!--                                        <p>With hourly billing, only pay for the resources that you actually use.</p>-->
<!--                                    </div>-->
<!--                                    -->
<!--                                </div>-->
<!--                                -->
<!--                            </div> <!-- cf row -->-->
<!---->
<!---->
<!--                            <div class="cf-row">-->
<!--                                <div class="row">-->
<!--                                    <div class="col-md-4">-->
<!--                                        <img src="/images/cloud/ico-database.svg" alt="" class="srv-ico">-->
<!--                                        <h4>Managed Databases</h4>-->
<!--                                        <p>Provision MySQL, Redis, and PostgreSQL databases in just a few clicks. We’ll handle setting up, backing up, and updating – so you can focus on building great apps.</p>-->
<!--                                    </div>-->
<!---->
<!--                                    <div class="col-md-4 offset-md-2">-->
<!--                                        <img src="/images/cloud/ico-store-download.svg" alt="" class="srv-ico">-->
<!--                                        <h4>Object Storage</h4>-->
<!--                                        <p>Store and retrieve any amount of data, including audio, video, images, and log files using DigitalOcean Spaces.</p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!---->
<!---->
<!--                                <div class="row">-->
<!--                                    <div class="col-md-4">-->
<!--                                        <img src="/images/cloud/ico-ssd.svg" alt="" class="srv-ico">-->
<!--                                        <h4>Block Storage</h4>-->
<!--                                        <p>Attach additional SSD-based storage to your Droplets for your databases or file storage.</p>-->
<!--                                    </div>-->
<!---->
<!--                                    <div class="col-md-4 offset-md-2">-->
<!--                                        <img src="/images/cloud/ico-snapshot.svg" alt="" class="srv-ico">-->
<!--                                        <h4>Backups &amp; Snapshots</h4>-->
<!--                                        <p>Capture backups and snapshots of your Droplets to store server images or automatically scale your system.</p>-->
<!--                                    </div>-->
<!---->
<!--                                </div>-->
<!---->
<!--                            </div> <!-- cf row -->-->
<!---->
<!---->
<!--                            <div class="cf-row">-->
<!--                                <div class="row">-->
<!--                                    <div class="col-md-4">-->
<!--                                        <img src="/images/cloud/ico-firewall.svg" alt="" class="srv-ico">-->
<!--                                        <h4>Cloud Firewalls</h4>-->
<!--                                        <p>Easily secure your infrastructure and instantly define what services are visible on all of your Droplets.</p>-->
<!--                                    </div>-->
<!---->
<!--                                    <div class="col-md-4 offset-md-2">-->
<!--                                        <img src="/images/cloud/ico-networking.svg" alt="" class="srv-ico">-->
<!--                                        <h4>Private Networking</h4>-->
<!--                                        <p>Enable communication between VM in the same datacenter.</p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!---->
<!---->
<!--                                <div class="row">-->
<!--                                    <div class="col-md-4">-->
<!--                                        <img src="/images/cloud/ico-team.svg" alt="" class="srv-ico">-->
<!--                                        <h4>Team management</h4>-->
<!--                                        <p>Invite team members to collaborate, ensure security with two-factor auth, and control your resources with centralized billing.</p>-->
<!--                                    </div>-->
<!--                              -->
<!--                                </div>-->
<!---->
<!--                            </div> <!-- cf row -->-->
<!---->
<!---->
<!--                            <div class="cf-row">-->
<!--                                <div class="row">-->
<!--                                    <div class="col-md-4">-->
<!--                                        <img src="/images/cloud/ico-integrate.svg" alt="" class="srv-ico">-->
<!--                                        <h4>Natively integrated</h4>-->
<!--                                        <p>Monitor system-level metrics in the same place you manage your infrastructure – at no additional cost.</p>-->
<!--                                    </div>-->
<!---->
<!--                                    <div class="col-md-4 offset-md-2">-->
<!--                                        <img src="/images/cloud/ico-resource.svg" alt="" class="srv-ico">-->
<!--                                        <h4>Resource metrics</h4>-->
<!--                                        <p>View summary stats and time series graphs of resource usage for your VM cluster, database, or individual VM nodes.</p>-->
<!--                                    </div>-->
<!--                                </div>-->
<!---->
<!---->
<!--                                <div class="row">-->
<!--                                    <div class="col-md-4">-->
<!--                                        <img src="/images/cloud/ico-alert.svg" alt="" class="srv-ico">-->
<!--                                        <h4>Real-time alerts</h4>-->
<!--                                        <p>Receive alerts via Slack or email whenever a metric crosses your specified threshold and critical issues arise in your infrastructure.</p>-->
<!--                                    </div>-->
<!---->
<!--                                </div>-->
<!---->
<!--                            </div> <!-- cf row -->-->
<!--                       -->
<!--                        </div>-->
<!---->
<!--                    </div>-->
<!---->
<!--                </div>-->
<!--                -->
<!--                -->
<!--            </div>-->
<!--            -->
<!--            -->
<!--        </div>-->
<!--        -->
<!--       -->
<!--    </div>-->



    <!--   SEPIA PRICES-->
    <div class="auto-scroll-wrapper section isvs-price bg-secondary">
        <div class="container-xl">
            <div class="text-center-desktop">
                <h2>Sepia Packages for ISVS</h2>
                <p class="lead">
                    The Cloud has hidden features that can benefit the growth of your organization.
                    Partner with us to know how
                </p>
                <div class="row hosting-price-wrap">


                    <div class="col-md-4 wow fadeInUp">

                        <div class="card">

                            <div class="content">

                                <h2 class="lbl-host">Host Your Code</h2>

                                <p class="lbl-starts-from">starts from</p>
                                <h3 class="host-price-tag">
                                    <sup>$</sup>
                                    <span class="_price">39</span>
                                    <sup>.99</sup>
                                    <sub>/mo</sub>
                                </h3>


                                <div class="list">
                                    <ul class="check">
                                        <li>Azure VSTS for upto 10 users</li>
                                        <li>Free Assessment</li>
                                        <li>Free Support</li>
                                        <li>2Hrs Technical Advisory</li>
                                        <li>Flexible Billing</li>
                                    </ul>
                                </div>

                                <a href="https://support.sepiahost.com/cart.php?gid=1" target="_blank" class="read-more sm">Signup</a>


                            </div>


                        </div>


                    </div>


                    <div class="col-md-4 wow fadeInUp" data-wow-delay="0.25s">

                        <div class="card">

                            <div class="content">

                                <h2 class="lbl-host">Host Your Web</h2>
                                <p class="lbl-starts-from">starts from</p>
                                <h3 class="host-price-tag">
                                    <sup>$</sup>
                                    <span class="_price">49</span>
                                    <sup>.99</sup>
                                    <sub>/mo</sub>
                                </h3>


                                <div class="list">
                                    <ul class="check">
                                        <li>Azure App Services: Hosting Wordpress/Open Source</li>
                                        <li>WebsiteAzure DB: Hosting of MySQL Database</li>
                                        <li>Azure Global DNS</li>
                                        <li>Free Assessment</li>
                                        <li>Free Support</li>
                                        <li>2Hrs Technical Advisory</li>
                                        <li>Flexible Billing</li>
                                    </ul>
                                </div>

                                <a href="https://support.sepiahost.com/cart.php?gid=7"  target="_blank" class="read-more sm">Signup</a>


                            </div>


                        </div>


                    </div>


                    <div class="col-md-4 wow fadeInUp" data-wow-delay="0.5s">

                        <div class="card">

                            <div class="content">

                                <h2 class="lbl-host">Host Your App</h2>
                                <p class="lbl-starts-from">starts from</p>
                                <h3 class="host-price-tag">
                                    <sup>$</sup>
                                    <span class="_price">99</span>
                                    <sup>.99</sup>
                                    <sub>/mo</sub>
                                </h3>


                                <div class="list">
                                    <ul class="check">
                                        <li>Azure VM: Hosting .NET/Php Application</li>
                                        <li>Azure SQL: Hosting of MSSQL Database</li>
                                        <li>Free Assessment</li>
                                        <li>Free Support</li>
                                        <li>2Hrs Technical Advisory</li>
                                        <li>Flexible Billing</li>
                                    </ul>
                                </div>

                                <a href="https://support.sepiahost.com/cart.php?gid=4" class="read-more sm">Signup</a>


                            </div>


                        </div>


                    </div>


                </div>

            </div>

        </div>

    </div>
    
    
    

    <!--  CUSTOMER ENGAGEMENT-->
    <div class="auto-scroll-wrapper fs section customer-flow">
        
        <div class="container">
            
            <div class="row">
                
                <div class="col-md-3 text-right-desktop">
                    
                    <div class="text-area">
                        <h2 class="font-size-h 3 font-light">Customer Engagement Flow</h2>
                        <p>Moving to the cloud may sound intimidating. But it becomes very easy when all you have to do is make the decision, while we do all the major work. Trust is our expertise as we skillfully guide you from the first step to the last, starting from professional advice, tailoring a solution for your business and giving it a competent completion.</p>
                    </div>
                    
                </div>
                
                
                <div class="col-md-9 illus-custom-eng">
                    
                    <div class="content">
                        
                        <div class="area-illus">
                            <img src="/images/cloud/illus-customer-engage.svg" alt="" class="svg-import illus-custom-eng-img" style="width: 100%">
                        </div>
                        
                        
                        <div class="detail-entry">
                            
                            <div class="box">
                                <div class="meta">
                                    <span class="">1</span>
                                    <img src="/images/icon-list.svg" alt="" class="ico" />
                                </div>
                                
                                <h4 class="h3">Assessment</h4>
                                <ul class="check wow fadeInUp" data-wow-delay=".65s">
                                    <li>Analyze existing environment</li>
                                    <li>Report of Change Impact</li>
                                    <li>Professional Advice</li>
                                    <li>Proof of Concept</li>
                                </ul>
                            </div>


                            <div class="box">
                                <div class="meta">
                                    <span>2</span>
                                    <img src="/images/icon-list.svg" alt="" class="ico" />
                                </div>
                                
                                <h4 class="h3">Service Estimation</h4>
                                <ul class="check">
                                    <li>Compute</li>
                                    <li>Storage</li>
                                    <li>Database</li>
                                    <li>VS Team System</li>
                                    <li>Network &amp; Bandwidth</li>
                                    <li>Performance</li>
                                </ul>
                            </div>


                            <div class="box">
                                <div class="meta">
                                  <span>3</span>
                                    <img src="/images/icon-list.svg" alt="" class="ico" />
                                </div>
                                
                                <h4 class="h3">Subscription Activation</h4>
                                <ul class="check">
                                    <li>Agreement</li>
                                    <li>Provisioning</li>
                                    <li>Administration</li>
                                    <li>Limits &amp; Billing</li>
                                </ul>
                            </div>


                            <div class="box">
                                <div class="meta">
                                    <span>4</span>
                                    <img src="/images/icon-list.svg" alt="" class="ico" />
                                </div>

                                <h4 class="h3">Deployment</h4>
                                <ul class="check">
                                    <li>Deployment</li>
                                    <li>Test Solution</li>
                                    <li>Go Live</li>
                                </ul>
                            </div>


                            <div class="box">
                                <div class="meta">
                                    <span>5</span>
                                    <img src="/images/icon-list.svg" alt="" class="ico" />
                                </div>

                                <h4 class="h3">Operations</h4>
                                <ul class="check">
                                    <li>Monitoring</li>
                                    <li>Optimization</li>
                                    <li>Value Added Service</li>
                                </ul>
                            </div>

                           
                            
                        </div>
                        
                    </div>
                  
                    
                </div>
                
                
            </div>
           
        </div>
    </div>


    

    
    
    
<?php get_contact() ?>
    
<?php
 
	// ------------------------------------------------------------------------------------ //
	body_close();


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


