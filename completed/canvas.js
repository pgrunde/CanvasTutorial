var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext('2d');

ctx.lineWidth = 5;
ctx.strokeStyle = "#ff00ff";
ctx.lineCap = 'round';

var startX = 50;
var startY = 50;

var endX = 50;
var endY = 150;

var dx = 2;

var init = function(){
  setInterval(drawCanvas, 20)
};

var drawCanvas = function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(startX,startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();

  startX += dx;
  endX += dx;
};

init();