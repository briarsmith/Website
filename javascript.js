/**
 * Created by Briar on 11/13/2016.
 */

// Cycle through background images
$('#img2').hide();
$('#img3').hide();
$('#img4').hide();

window.setInterval(function () {
    $('#home-container :first-child').fadeOut(4000, function(){
        $('#home-container :first-child').next('img').fadeIn(4000).delay(1000).end().appendTo('#home-container');
    })
    /*$('#home-container :first-child').fadeOut();
    $('#home-container :first-child').delay(1000);
    $('#home-container :first-child').next('img').fadeIn(3000).end().appendTo('#home-container');*/
}, 9000);

