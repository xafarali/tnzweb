<?php
	/**
	 * Author : xafaR
	 * Created at: 12 01, 2020
	 * Description : File belongs to sepiasol2
	 */
	
	GLOBAL $root_path;
	/**
	 * Prints Meta and Head
	 * @param bool $end
	 */
	function get_head ($end = false) {
		
		global $root_path;
		
		if ( ! $end ) {
			include ( $root_path . 'template/header-meta.php');
		}
		else {
			include ($root_path . 'template/header-meta-close.php');
		}
		
	}
	
	
	/**
	 * Get All Scripts
	 */
	function get_script () {
		global $root_path;
		include ( $root_path . 'template/scripts.php');
	}
	
	
	
	/**
	 * Get All Scripts
	 */
	function get_css () {
		global $root_path;
		include ( $root_path . 'template/css.php');
	}
	
	
	
	function get_header( $path = '' ) {
		
		global $root_path;
		global $header_path;
		include ( $root_path . '/template/header.php');
	}
	
	
	function get_header_menu () {
		global $root_path;
		include ($root_path . 'template/menu-header.php');
	}
	
	
	
	function body_open ($body_class_raw = '', $banner_path = '') {
		
		global $root_path;
		global $body_class;
		$body_class = $body_class_raw;
		include ( $root_path . 'template/body-open.php');
	}
	
	
	function body_close () {
		global $root_path;
		include ( $root_path . 'template/body-close.php');
		
		
	}
	
	
	function get_footer () {
		global $root_path;
		include ( $root_path . 'template/footer.php');
	}
	
	
	function get_contact ($name = 1) {
		global $root_path;
		include ( $root_path . 'template/contact-us-'.$name.'.php');
	}
	
	
	//=========================================================================
	//=========================================================================
	//  UTILITY
	//=========================================================================
	//=========================================================================
	function get_svg ($path = '') {
		
		if ( trim($path ) == '' ) exit;
		
		
		$html = file_get_contents( $path );
		
		return $html;
	}
	
	
	
	function print_read_fancy ($url='#',  $css='', $text='Scroll Down' ) {
	
		echo "<a href='${url}' class=\"more-fancy ${css}\"><span>${text}</span></a>";
		
	}





	// Anchor printer
	function print_anchor_btn($url='#' , $css='read-more', $text='Link Name', $icon='') {
		if ($icon != "" ) {
			$icon_text = "<span class='fa fa-${icon}'></span>"; 
			$css  = $css . " has-icon";
		}
		else { $icon_text = '';}
		echo "<a href='${url}' class=\"${css}\" >${text} ${icon_text}</a>";
	}