/**
 * Created by Briar on 11/13/2016.
 */

// Cycle through background images

window.setInterval(function () {
    $("#home-background").delay(2000);
    $("#home-background").attr('src', 'imgs/kittty.jpg');//.fadeOut(500);
    $("#home-background").attr('src', 'imgs/space1.jpg').fadeIn(500);
    $("#home-background").delay(2000);
    $("#home-background").attr("src", "imgs/space1.jpg").fadeOut(500);
    $("#home-background").attr("src", "imgs/nice tree.jpg").fadeIn(500);
    $("#home-background").delay(2000);
    $("#home-background").attr("src", "imgs/nice tree.jpg").fadeOut(500);
    $("#home-background").attr("src", "imgs/tiger.jpg").fadeIn(500);
    $("#home-background").delay(2000);
    $("#home-background").attr("src", "imgs/tiger.jpg").fadeOut(500);
    $("#home-background").attr("src", "imgs/kittty.jpg").fadeIn(500);
    $("#home-background").attr('src', 'imgs/kittty.jpg');
    
}, 9000);

