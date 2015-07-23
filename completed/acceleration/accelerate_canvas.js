var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext('2d');

ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.lineCap = 'round';

var angle = Math.random() * Math.PI*2;

var startX = parseFloat(canvas.width/2);
var startY = parseFloat(canvas.height/2);
var hyp = 175;

var endX = parseFloat(Math.cos(angle)*hyp);
var endY = parseFloat(Math.sin(angle)*hyp);

var dang = Math.random() * (0.75-0.1);
var accelerate = -0.002;

var init = function(){
  setInterval(drawCanvas, 10)
};

var drawCanvas = function(){
  console.log("loopin");
  ctx.clearRect(0,0, canvas.width, canvas.height);

  angleCalc();

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + endX, startY + endY);
  ctx.stroke();
};

var angleCalc = function(){
  angle += dang;
  dang += accelerate;

  if(dang <= 0){
    dang = 0;
    accelerate = 0;
  }

  if(angle > Math.PI*2){angle = 0}
  endX = parseFloat(Math.cos(angle)*hyp);
  endY = parseFloat(Math.sin(angle)*hyp);
};

init();