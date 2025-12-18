<?php
include ('./include/config.php');
global $root_path;
global $_company;

$page_title = "Welcome to " . $_company;
    
    get_head();
    
    body_open('homepage dir-left lg-light',$root_path . 'template/header/header-homepage.php');
    
    ?>
    <!-- About -->
     <?php include( $root_path . 'template/section/about-section.php' );?>
    <!-- ABOUT END -->

    
   <!-- TESTIMONIAL CLIENTELE AREA -->
    <?php include($root_path . 'template/section/client-section.php'); ?>
   <!-- TESTIMONIAL END -->
    
    
    
   <!-- DIALOG AREA -->
    <?php include($root_path . 'template/section/tagline-section.php'); ?>
   <!-- DIALOG END -->



   <!-- SERVICES AREA -->
    <?php include($root_path . 'template/section/services-section.php'); ?>
    <!-- SERVICES END -->


    <?php get_contact() ?>
   
    
    

    
    
    
    
    
    
    
    
<?php
    // ------------------------------------------------------------------------------------ //
    body_close();




