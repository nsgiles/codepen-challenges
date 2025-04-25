const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 514;
canvas.height = 514;

let vertices = JSON.parse(document.getElementById('vertices').value);

let distance = parseFloat(document.getElementById("distance").value);

let pen = {x: 256, y: 256}
ctx.fillStyle = "#0c7";

let drawing = null;

function start() {
  vertices = JSON.parse(document.getElementById('vertices').value);
  let distance = parseFloat(document.getElementById("distance").value);
  
  if(!drawing) {
    drawing = setInterval(function() {
      const nextVertex = Math.floor(Math.random() * vertices.length)
      pen.x = pen.x * (1 - distance) + vertices[nextVertex].x * distance;
      pen.y = pen.y * (1 - distance) + vertices[nextVertex].y * distance;     
      ctx.fillRect(pen.x, pen.y, 1, 1);
    }, 1); 
  }
}
document.getElementById('start-btn').addEventListener('click', start);

function stop() {
  clearInterval(drawing);
  drawing = null;
}
document.getElementById('stop-btn').addEventListener('click', stop);

function reset() {
  stop();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawVertices();
}
document.getElementById('reset-btn').addEventListener('click', reset);

function drawVertices() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  vertices = JSON.parse(document.getElementById('vertices').value);
  ctx.fillStyle = "#f00";
  vertices.forEach((vertex) => {
    ctx.fillRect(vertex.x, vertex.y, 2, 2);
  });
  ctx.fillStyle = "#0c7";
}

function init() {
  drawVertices();
  start();
}
init();


function triangle() {
  document.getElementById('vertices').value = `[
  {"x": 256, "y": 39},
  {"x": 6, "y": 472},
  {"x": 506, "y": 472}
]`
  document.getElementById('distance').value = 0.5;
  drawVertices();
}
document.getElementById('triangle-btn').addEventListener('click', triangle);

function square() {
  document.getElementById('vertices').value = `[
  {"x": 0, "y": 0},
  {"x": 512, "y": 0},
  {"x": 512, "y": 512},
  {"x": 0, "y": 512}
]`
  document.getElementById('distance').value = 0.67;
  drawVertices();
}
document.getElementById('square-btn').addEventListener('click', square);

function pentagon() {
  document.getElementById('vertices').value = `[
  {"x": 256, "y": 0},
  {"x": 0, "y": 186},
  {"x": 98, "y": 487},
  {"x": 414, "y": 487},
  {"x": 512, "y": 186}
]`
  document.getElementById('distance').value = 0.618;
  drawVertices();
}
document.getElementById('pentagon-btn').addEventListener('click', pentagon);

function hexagon() {
  document.getElementById('vertices').value = `[
  {"x": 256, "y": 0},
  {"x": 34, "y": 128},
  {"x": 34, "y": 384},
  {"x": 256, "y": 512},
  {"x": 477, "y": 384},
  {"x": 477, "y": 128}
]`
  document.getElementById('distance').value = 0.667;
  drawVertices();
}
document.getElementById('hexagon-btn').addEventListener('click', hexagon);

function heptagon() {
  document.getElementById('vertices').value = `[
  {"x": 256, "y": 6},
  {"x": 51, "y": 105},
  {"x": 0, "y": 327},
  {"x": 142, "y": 505},
  {"x": 370, "y": 505},
  {"x": 512, "y": 327},
  {"x": 461, "y": 105}
]`
  document.getElementById('distance').value = 0.692;
  drawVertices();
}
document.getElementById('heptagon-btn').addEventListener('click', heptagon);

function octagon() {
  document.getElementById('vertices').value = `[
  {"x": 256, "y": 0},
  {"x": 75, "y": 75},
  {"x": 0, "y": 256},
  {"x": 75, "y": 437},
  {"x": 256, "y": 512},
  {"x": 437, "y": 437},
  {"x": 512, "y": 256},
  {"x": 437, "y": 75}
]`
  document.getElementById('distance').value = 0.707;
  drawVertices();
}
document.getElementById('octagon-btn').addEventListener('click', octagon);

function nonagon() {
  document.getElementById('vertices').value = `[
  {"x": 256, "y": 4},
  {"x": 89, "y": 65},
  {"x": 0, "y": 219},
  {"x": 31, "y": 394},
  {"x": 167, "y": 508},
  {"x": 345, "y": 508},
  {"x": 481, "y": 394},
  {"x": 512, "y": 219},
  {"x": 423, "y": 65}
]`
  document.getElementById('distance').value = 0.742;
  drawVertices();
}
document.getElementById('nonagon-btn').addEventListener('click', nonagon);

function decagon() {
  document.getElementById('vertices').value = `[
  {"x": 256, "y": 0},
  {"x": 106, "y": 49},
  {"x": 13, "y": 178},
  {"x": 13, "y": 335},
  {"x": 106, "y": 463},
  {"x": 256, "y": 512},
  {"x": 407, "y": 463},
  {"x": 500, "y": 335},
  {"x": 500, "y": 177},
  {"x": 407, "y": 49}
]`
  document.getElementById('distance').value = 0.764;
  drawVertices();
}
document.getElementById('decagon-btn').addEventListener('click', decagon);

function carpet() {
  document.getElementById('vertices').value = `[
  {"x": 0, "y": 0},
  {"x": 256, "y": 0},
  {"x": 512, "y": 0},
  {"x": 512, "y": 256},
  {"x": 512, "y": 512},
  {"x": 256, "y": 512},
  {"x": 0, "y": 512},
  {"x": 0, "y": 256}
]`
  document.getElementById('distance').value = 0.67;
  drawVertices();
}
document.getElementById('carpet-btn').addEventListener('click', carpet);

function vicsek() {
  document.getElementById('vertices').value = `[
  {"x": 0, "y": 0},
  {"x": 512, "y": 0},
  {"x": 512, "y": 512},
  {"x": 0, "y": 512},
  {"x": 256, "y": 256}
]`
  document.getElementById('distance').value = 0.67;
  drawVertices();
}
document.getElementById('vicsek-btn').addEventListener('click', vicsek);
