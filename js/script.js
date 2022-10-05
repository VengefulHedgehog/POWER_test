// ------------------slider---------------------

$(document).ready(function(){
    $('.slider').slick();
});

// ------------------timer---------------------

let time = 1800;
const timer = document.querySelector('.timer__display');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const min = Math.floor(time/60);
    let sec = time % 60;
    sec = sec < 10 ? "0" + sec: sec;
    timer.innerHTML = `${min} : ${sec}`;
    time--;
}