$(document).ready(function () {

    // display first two images in slideshow by default
    document.getElementById("left-img").style.display = 'flex';
    document.getElementById("right-img").style.display = 'flex';

});

// image slideshow
function prevImg() {
    $('#val-img img:first').next().fadeOut();
    $('#val-img img:last').fadeIn(1000).prependTo('#val-img')
}

function nextImg() {
    $('#val-img img:first').fadeOut().appendTo('#val-img');
    $('#val-img img:first').next().fadeIn(800);
}