/*
 * Wave text
 */
const startTime = new Date().getTime();
const waveLetters = 'Your text here';
const waveTarget = document.getElementsByClassName('animated-wave')[0];
for (let i = 0; i < waveLetters.length; i++) {
    $(`<span class="letter">${ waveLetters[i] }</span>`).appendTo(waveTarget);
}
function runWave() {
    const width = $(window).width();
    const letterSpacing = width > 900 ? 24 : 16;
    const elapsed = new Date().getTime() - startTime;
    const pos = elapsed * 0.05;
    $('.animated-wave .letter').each(function(index, letter) {
        const posx = width - (pos - letterSpacing * index) % width;
        const posy = Math.sin(posx / 40) * 20;
        $(letter).css('left', posx + 'px');
        $(letter).css('top', posy + 'px');
    });
}
setInterval(runWave, 30);