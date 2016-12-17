/**
 * Created by Briar on 11/13/2016.
 */
// $('#menu-icon').show();
$(document).ready(function(){
$('#navyy').hide();
    $('#after').hide();
// $('#navyy').hide();
// Background image slider :) it works nicely
$(function() {
    $('.toggle').bind('click', function(e){
        e.preventDefault();
        $('#maximage').cycle('toggle');
    });
    $('#maximage').maximage({
        cycleOptions: {
            fx: 'fadeZoom',
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

            $('#menu-icon').on('click', function() {
                $('#navyy').show();
                $('#menu-icon').hide();
            });
        }
    });

});


//$(document).mouseup(function (e)
// {
//     var container = $("#navyy");
//
//     if (!container.is(e.target) // if the target of the click isn't the container...
//         && container.has(e.target).length === 0) // ... nor a descendant of the container
//     {
//         $('#menu-icon').show();
//         container.hide();
//     }
// });
//


});


