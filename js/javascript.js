/**
 * Created by Briar on 11/13/2016.
 */

// Background image slider :) it works nicely 
$(function() {
    $('#maximage').maximage({
        cycleOptions: {
            fx: 'fade',
            //sync: false,
            speed: 1000,
            timeout: 4000,
            prev: '#arrow_left',
            next: '#arrow_right',
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



