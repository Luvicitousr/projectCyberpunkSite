const h1glitchedbefore = document.querySelector('h1.cyberpunk.glitched');
var on = false;
var ms = 3000;

var update = function(){
    if(on){
        $("p.cyberpunk.glitched").css("animation-name", "glitched");
        $("h1.cyberpunk.glitched").css("animation-name", "glitched");
        ms = 900;
    }else{
        $("p.cyberpunk.glitched").css("animation-name", "nothing");
        $("h1.cyberpunk.glitched").css("animation-name", "nothing");
        ms = 3000;
    }

    h1glitchedbefore.style.setProperty('--glitched-animation', (on) ? 'beforeglitched' : 'nothing');

    on = !on;
    setTimer();
    
}

var setTimer = function(){
    setTimeout(function(){
        requestAnimationFrame(update);
    }, ms);
};

setTimer();