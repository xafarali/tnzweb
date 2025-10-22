<?php
    if ( isset($path) && trim( $path ) != '' )
    {
        $get_header_banner = $path ;
    }
    
    global $css_asset;
    global $_company;
?>
<div id="header-wrapper">

    <header class="top-menu-wrapper">

        <div class="header-primary">

            <div class="container-fluid">

                <div class="row  mc">

                    <div class="col-6 logo-wrapper">
                        <div class="logo-wr_apper">
                            <!-- logo comes here -->
                            <h1 class="site-title">
                                <a href="/" rel="bookmark">
                                    <span class="site-name"><?php echo $_company ?></span>
                                    <?php echo get_svg( $css_asset . "/images/tnz-logo.svg")?>
                                </a>

                            </h1>
                        </div>
                    </div>

                    <div class="col-6 ">
                       

                        <div class="col-md-12  area-menu">
                             <div class="area-menu-button">
                                <a href="#" class="btn">MENU</a>
                                <a href="#" class="btn primary text-uppercase icon">Lets Talk <span>
                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 10.625V8.375H8.55L14.175 2.75H11.25V0.5H18V7.25H15.75V4.325L9.45 10.625H0ZM11.25 18.5V16.25H14.175L10.575 12.7063L12.2063 11.075L15.75 14.675V11.75H18V18.5H11.25Z" fill="#CB2026"/>
                                    </svg>
                                </span></a>
                            </div>

                            <div class="menu-button hide-desktop">
                                <button class="menu-burger menu-btn">
                                    <span class="smb-wrap">
                                        <i class="mbfrst">&nbsp;</i>
                                        <i class="mbmid">&nbsp;</i>
                                        <i class="mblast">&nbsp;</i>
                                    </span>
                                </button>
                            </div>
                        </div>
                        

                        <!--CURTAIN MENU-->
                        <div class="menu-wrapper ">
                            <div class="main-navigation">
                                <?php
                                    get_header_menu();
                                ?>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>


    </header>


    <!-- conditional if page header -->
    
    <?php
        if ( isset($get_header_banner)  && $get_header_banner != "" ) {
         ?>
            <section class="page-custom-header">
        
                <?php
                    //echo file_get_contents($get_header_banner);
                    include($get_header_banner);
                ?>
            
            </section>
    <?php
        }
    ?>
    
    
   


</div>