document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('anim-toggle');
    if(localStorage.getItem("animated")){
        animated = localStorage.getItem("animated")
    } else {
        animated = "true";
        localStorage.setItem("animated", animated);
    }
    if(animated == "true"){
        toggleButton.textContent = ">";
    }
    else{
        toggleButton.textContent = "<";
    }
        toggleButton.addEventListener('click', () => {
        if(animated == "true"){
            animated = "false";
            floating();
            toggleButton.textContent = "<";
            localStorage.setItem("animated", animated);
        }
        else{
            animated = "true";
            floating();
            toggleButton.textContent = ">";
            localStorage.setItem("animated", animated);
        }
        });
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

    for (const box of values) {
        if(localStorage.getItem("animated") == "false"){
            box.el.style = 'transition-duration: 0ms';
            box.el.style.transform = 'none';
        }
        else{
            const offsetX = Math.sin(time * box.freqX + box.phaseX) * 3;
            const offsetY = Math.cos(time * box.freqY + box.phaseY) * 3;
            box.el.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px)`;
        }
    };
    requestAnimationFrame(floating);

}
