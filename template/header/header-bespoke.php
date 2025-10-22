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
    <div class="banner-wrapper section fs auto-scroll plx-container bg-abs-1">

        <div class="bg-plate cloudy" style="position:absolute; top: 0;width: 100%; ">
            <div class="bg-plate-base">
                <img src="<?php echo $images ?>/header-home-banner-2.jpg" alt="" class="imgFit"/>
            </div>


            <div class="huge-heading itm-plx hide-device"  data-parallex="20">
                <h3 class="font-light">Solutions</h3>
            </div>
            <div class="chit-wrap" style="display: none;">
                <!-- v-stripe -->
                <div class="chit">
                    <p>Clients</p>
                </div>

                <!-- card -->
                <div class="chit ">
                    <p>Applications</p>
                </div>

                <div class="chit">
                    <p>Services</p>
                </div>

                <div class="chit ">
                    <p>Platform</p>
                </div>


                <div class="chit">
                    <p>Storage</p>
                </div>

                <div class="chit ">
                    <p>Infrastructure</p>
                </div>


            </div>


            <div class="ele-grid pos-abs middle right-2x itm-plx hide-device" data-parallex="20"></div>
            <div class="ele-dots pos-abs top-2x right itm-plx hide-device" data-parallex="10"></div>

        </div>

        <div>

            <div class="banner-content-wrapper">

                <div class="banner-content">

                    <div class="container">

                        <div class="row">

                            <div class="col-md-12">

                                <div class="branding-box">
                                    <!--                                    <h1 class="font-h1 clr-p">-->
                                    <!--                                       BESPOKE-->
                                    <!--                                    </h1>-->


                                </div>

                                <div class="col-md-12 text-center">
                                    <h1 class="font-xxl color-secondary bold wow fadeInUp" data-wow-delay=".15s"><span
                                                class="_anim-bubble-px db ">Bespoke</span></h1>
                                    <p class="h1 font-light-color-white hide-desktop text-center">Solutions</p>
                                </div>

                                <div class="slide-anim-slide-3 wow fadeInUp" data-wow-delay=".20s">
                                    <div class="col-md-6"><p class="lead margin-top-3x-desktop xl font-light">Investing
                                            in your own IT infrastructure is <span class="taq sqr">expensive</span></p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <!-- banner content -->

            </div>

        </div>

    </div>

</div>
<div class="text-center read-more-down section sm wow fadeInDown" data-wow-delay="1.72s">
	<?php print_read_fancy('#srv-about', 'x-scroll-to') ?>
</div>