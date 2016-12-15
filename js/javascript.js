/**
 * Created by Briar on 11/13/2016.
 */
// Background image slider :) it works nicely 
$(function() {
    $('#maximage').maximage({
        cycleOptions: {
            fx: 'fade',
            //sync: false,
            speed: 4000,
            timeout: 8000,
            pager: '#cycle-nav ul',
            pagerAnchorBuilder: function(idx, slide) {
                return '<li><a href="#"></a></li>';
            }
        },
        onFirstImageLoaded: function() {
            jQuery('#maximage').fadeIn('fast');
        }
    });
    
    $('.toggle').bind('click', function(e){
        e.preventDefault();
        $('#maximage').cycle('fx: fade');
    });
});

//$('#navyy').hide();




