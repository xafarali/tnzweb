/**
 * Template Interface relatex functions
 */

$ = jQuery;
jQuery(document).ready(function ($) {




function get_template ($template_path, $postfix) {
    
    $postfix = $postfix | true;

    var partial = jQuery.get(parsePath($template_path));
    document.write(partial);
    return;

}



// Path is given as Laravel style . DOT notation.
function parsePath($path, $prefix, $postfix ) {
    // director.path.
    // will be directory/path.html

    $postfix = $postfix | true;

    

    $html_ext = $postfix ? ".html" : "";

    var path_raw = $.trim($path).split('.');
    var html_file = "/template-" + $.trim(path_raw.pop()) + $html_ext;

    var path_format = path_raw.join('/') + html_file;

    return path_format;
}





// Replace all template tags .. 
$('template').each( function (i, v) {
    
    var $this = $(this);

    var path = $this.attr('url');

    var _repeat = $this.attr('repeat');
   
    var _section = $this.attr('section');

    path = parsePath(path);

    // grab with jquery
    $.ajax( {
        url: path,
        dataType: 'html',

        success: function (data ) {
       
            // Loop
            if( _repeat  ) {
               _repeat = parseInt(_repeat);

                var tmp_data = data;
                  
                for( var a=1; a < _repeat; a++ ) {
                    
                    tmp_data += data;                    
                 }
                
                data = tmp_data;
            }

            $(data).insertAfter($this);
            
            // $this.hide().remove()
        }
    });

        // $('template:eq(' + i + ')').remove();
});
     
    
   

})

