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
            jQuery('#maximage').show();
            $('#after').show();
            $('#menu-icon').on('click', function() {
                $('#navyy').fadeIn('400');
                $('#menu-icon').fadeOut('400');
            });
        }
    });

});


$(document).mouseup(function (e)
{
    var container = $("#navyy");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('#menu-icon').fadeIn('400');
        container.fadeOut('400');
    }
});


    $(window).resize(function() {
        windowsize = $(window).width();
        if ($('#navyy').is(":visible")) {
            if (windowsize < 768) {
                //if the window is greater than 440px wide then turn on jScrollPane..
                $('#wrapper').css('background-color', 'rgba(166,166,166,0.4)');
            }
            else {
                $('#wrapper').css('background-color', 'transparent');
            }
        }
    });





});


