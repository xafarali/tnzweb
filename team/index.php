<?php
	include ('../include/config.php');
	global $root_path;
	
	$page_title = "Team";
	
	
	get_head();
	//---------------------------------------------------------------------------------------------------------------------//
	body_open('page-team',$root_path . 'template/header/header-team.php');
	
?>
    <!-- Tag -->
    <div class="auto-scroll-wrapper">
        <div class="section auto-scroll mc no-padding-bottom">
            <div class="container">
          
                    <div class="row">
                        <?php echo print_team_member(      
                            col:'4',
                            des : "Director of Strategy and Execution",
                            title:"Hammad",
                            // dec : "As the CEO of T&Z International, I value building strong and meaningful relationships with my team and clients."
                        ) ?>

                        <?php echo print_team_member(      
                            col:'4',
                            des : "Director of Business Development",
                            title:"Chris"                                            
                        ) ?>

                        <?php echo print_team_member(      
                            col:'4',
                            des : "Director of Staff Augmentation",
                            title:"Ahsan" ,
                            img:"https://i0.wp.com/tnzinternational.com/wp-content/uploads/2024/03/profile-pic.png?w=600&ssl=1"                                           
                        ) ?>        

                    </div>
                   
                   <div class="spacer"></div>
                    <div class="row">
                        <?php echo print_team_member(      
                            col:'4',
                            des : "Director of Strategy and Execution",
                            title:"Hammad",
                            // dec : "As the CEO of T&Z International, I value building strong and meaningful relationships with my team and clients."
                        ) ?>

                        <?php echo print_team_member(      
                            col:'4',
                            des : "Director of Business Development",
                            title:"Chris"                                            
                        ) ?>

                        <?php echo print_team_member(      
                            col:'4',
                            des : "Director of Staff Augmentation",
                            title:"Ahsan" ,
                            img:"https://i0.wp.com/tnzinternational.com/wp-content/uploads/2024/03/profile-pic.png?w=600&ssl=1"                                           
                        ) ?>        

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




