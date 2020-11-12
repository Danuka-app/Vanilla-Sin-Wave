/*
 * Wave text
 */
/*for extra learn*/
var startTime = new Date().getTime();
var waveLetters = 'Your text here';
var waveTarget = document.getElementsByClassName('animated-wave')[0];
for (let i = 0; i < waveLetters.length; i++) {
    $(`<span class="letter">${ waveLetters[i] }</span>`).appendTo(waveTarget);
}
function runWave() {
    var width = $(window).width();
    var letterSpacing = width > 900 ? 24 : 16;
    var elapsed = new Date().getTime() - startTime;
    var pos = elapsed * 0.05;
    $('.animated-wave .letter').each(function(index, letter) {
        var posx = width - (pos - letterSpacing * index) % width;
        var posy = Math.sin(posx / 40) * 20;
        $(letter).css('left', posx + 'px');
        $(letter).css('top', posy + 'px');
    });
}
setInterval(runWave, 30);