<?php
    global $page_title;
	global $_company;
	$title = isset( $page_title) ? $page_title . $_company : "Current Page";
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title><?php echo $title ?></title>
	
	<?php
		get_css();
		
		get_script();
	?>
	
	
	<!--<link rel="stylesheet" href="assets/css/animate.css">-->

    <script>
        
        var xash = {
            debug :true
        };

        var root = document.getElementsByTagName( 'html' )[0].setAttribute( 'class', 'loading-content' );
            //root;
        
    </script>
    
	
</head>