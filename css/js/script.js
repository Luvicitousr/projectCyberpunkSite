var glitched = document.querySelector('.glitched');
var on = false;

var update = function(){
    glitched.setAttribute('animation-name', (on) ? 'glitched' : '');
    on = !on;
    setTimer();
}

var setTimer = function(){
    setTimeout(function(){
        requestAnimationFrame(update);
    }, 3000);
};

setTimer();