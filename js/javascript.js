/**
 * Created by Briar on 11/13/2016.
 */
// $('#menu-icon').show();
$(document).ready(function(){
$('#navyy').hide();
    $('#after').hide();
    var height = $('#initial-content').height();
    $('#after').css('top', height);
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

    // var page = $('html, body');
    // page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
    //     page.stop();
    // });
    //
    // page.animate({ scrollTop: $(this).position().top }, 'slow', function(){
    //     page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
    // });

    // $('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function(e){
    //     if ( e.which > 0 || e.type == "mousedown" || e.type == "mousewheel"){
    //         $("html,body").stop();
    //     }
    // });

    var divs = $('#initial-content');
    var lastScrollTop = 0;
    $(window).on('scroll', function() {

            var st = $(this).scrollTop();
            if (st > lastScrollTop){
                // downscroll code
                clearTimeout($.data(this, 'scrollTimer'));
                $.data(this, 'scrollTimer', setTimeout(function() {
                    // do something
                    if (window.scrollY < (height / 2) && window.scrollY > 0) {
                        $('html, body').animate({
                            scrollTop: $("#after").offset().top
                        }, 1600, function () {
                            $('html, body').stop(true);
                        });
                    }
                    console.log("Haven't scrolled in 250ms!");
                }, 250));
            } else {
                // upscroll code
                clearTimeout($.data(this, 'scrollTimer'));
                $.data(this, 'scrollTimer', setTimeout(function() {
                    // do something
                    if (window.scrollY < (height * (2/3)) && window.scrollY > (height /2)) {
                        $('html, body').animate({
                            scrollTop: 0
                        }, 1600, function() {
                            $('html, body').stop(true);
                        });
                    }
                    console.log("Haven't scrolled in 250ms!");
                }, 250));
            }
            lastScrollTop = st;

        if ($('#after').isOnScreen()) {
            $('.in-slide-content').fadeOut(700);
        }
        if (!($('#after').isOnScreen())) {
            $('.in-slide-content').fadeIn(700);
        }
        var st = $(this).scrollTop();
        divs.css({ 'opacity' : (1 - st/height) });
        $('#after').css('opacity', st/height);
    });

    $.fn.isOnScreen = function(){

        var win = $(window);

        var viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    };



});


