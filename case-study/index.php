<?php
	include ('../include/config.php');
	global $root_path;
	
	$page_title = "Case Study ";
	
	
	get_head();
	//---------------------------------------------------------------------------------------------------------------------//
	body_open('page-case-study',$root_path . 'template/header/header-case-study-1.php');
	
?>
    <!-- Tag -->
    <div class="auto-scroll-wrapper">
        <div class="auto-scroll  no-padding">
            <div class="">
          
                  <div class="row">
                    <div class="col-md-2">
                        <h4 class="h3 font-light color-secondary text-right-desktop">
                            Solution:
                        </h4>
                    </div>

                    <div class="col-md-10">
                        <ul class="check area-solution">
                            <li>Built a centralized lakehouse architecture using Databricks</li>
                            <li>Configured Delta Lake for optimized storage</li>
                            <li>Developed ingestion pipelines using Databricks Workflows</li>
                            <li>Implemented transformation logic using PySpark</li>
                            <li>Built curated tables for analytics consumption</li>
                            <li>Added Unity Catalog for governance and controlled access</li>
                        </ul>
                    </div>

                  </div> <!-- Solutions -->
                   
                   <div class="spacer"></div>
                   
                   <div class="col-md-10 offset-md-1 card glossy">
                          <div class="row">

                            <div class="col-md-4">
                                <h4 class="h3 color-primary-600">Tools and Stack</h4>
                                <ul class="arrow strong">
                                    <li>Databricks</li>
                                    <li>Delta Lake</li>
                                    <li>PySpark</li>
                                    <li>Databricks Workflows</li>
                                    <li>Azure Data Lake</li>
                                    <li>Unity Catalog</li>
                                    <li>Power BI for downstream reporting</li>
                                </ul>
                            </div>
                            
                            <div class="col-md-4">
                                <h4 class="h3 color-primary-600">Technology</h4>

                                <ul class="arrow strong">
                                    <li><strong>Data Warehousing</strong></li>
                                    <li><strong>Databricks Lakehouse Platform</strong></li>                                
                                </ul>

                            </div>

                            <div class="col-md-4">
                                <h4 class="h3 color-primary-600">Success &amp; Impact</h4>
                                <ul class="arrow strong">
                                    <li>Improved estimation accuracy by <span class="h2 color-secondary fr clearfix">40%</span></li>
                                    <li>Increased visibility into refresh costs by <span class="h2 color-secondary fr clearfix">60%</span></strong></li>                                
                                    <li>Enhanced reporting scalability by <span class="h2 color-secondary fr clearfix">50%</span></strong></li>                                
                                </ul>
                            </div>

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




