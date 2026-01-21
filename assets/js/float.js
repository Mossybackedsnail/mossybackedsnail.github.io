document.addEventListener('DOMContentLoaded', function() {
    if(localStorage.getItem("animated")){
        animated = localStorage.getItem("animated")
    } else {
        animated = true;
        localStorage.setItem("animated", animated);
    }
    floating();
});

elements = document.getElementsByClassName("floating")

const values = [...elements].map(el => {
    el.style.animationDelay = `${Math.random() * 200}ms`;
  return {
    el,
    freqX: 0.0008 + Math.random() * 0.0006,
    freqY: 0.0008 + Math.random() * 0.0006,
    phaseX: Math.random() * Math.PI * 2,
    phaseY: Math.random() * Math.PI * 2
  };
});

function floating(time) {
    if(!animated) return;

    for (const box of values) {
        const offsetX = Math.sin(time * box.freqX + box.phaseX) * 5;
        const offsetY = Math.cos(time * box.freqY + box.phaseY) * 5;
        box.el.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px)`
    };
    requestAnimationFrame(floating);

}
