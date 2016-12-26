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


    // $(window).resize(function() {
    //     windowsize = $(window).width();
    //     if ($('#navyy').is(":visible")) {
    //         if (windowsize < 768) {
    //             //if the window is greater than 440px wide then turn on jScrollPane..
    //             $('#wrapper').css('background-color', 'rgba(166,166,166,0.4)');
    //         }
    //         else {
    //             $('#wrapper').css('background-color', 'transparent');
    //         }
    //     }
    // });

    // $(window).scroll(function() {
    // if ($('#after').is(':visible')) {
    //     $('.in-slide-content').fadeOut('500');
    // }
    // else {
    //     $('.in-slide-content').fadeIn('500');
    // }
    // });


$('#clicktest').on('click', function() {
    // verified onclick works for each nav bar item.
});

    // smooth scrolling to anchors
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1600);
                    return false;
                }
            }
        });
    });

    // var eventPosition = 550; // This is the height position you want the event to fire on.
    // $(window).scroll(function(e) {
    //     if ((window.scrollY + 900) >= 1300) {
    //         window.scrollTo(0, 100);
    //     }
    // });

    var divs = $('#initial-content');
    $(window).on('scroll', function() {
        if ($('#after').is(':visible')) {
            $('.in-slide-content').fadeOut(800);
        }
        if (!($('#after').is(':visible'))) {
            $('.in-slide-content').fadeIn(800);
        }
        if (window.scrollY > 500) {
            $('#after').animate({scrollTop:$('#after').offset().top}, 2000);
        }
        var st = $(this).scrollTop();
        divs.css({ 'opacity' : (1 - st/974) });
        $('#after').css('opacity', st/974);
    });

});


