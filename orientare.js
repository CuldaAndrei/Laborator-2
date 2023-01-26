window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
    const absolute = event.absolute;
    const alpha = event.alpha;
    const beta = event.beta;
    const gamma = event.gamma;
  
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var centru = {x:canvas.width/2, y:canvas.height/2}
    var latura_patrat = 50;
    
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0,0,canvas.width, canvas.height);
    context.translate(centru.x/2, centru.y/2);
    context.rotate(alpha * Math.PI / 180);
    context.beginPath();
    context.rect(-latura_patrat/2,-latura_patrat/2, latura_patrat, latura_patrat);
    context.stroke();
  }

