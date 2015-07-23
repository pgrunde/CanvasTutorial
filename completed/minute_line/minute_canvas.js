var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext('2d');

ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.lineCap = 'round';

var angle = Math.PI*1.5;

var startX = parseFloat(canvas.width/2);
var startY = parseFloat(canvas.height/2);
var hyp = 175;

var endX = parseFloat(Math.cos(angle)*hyp);
var endY = parseFloat(Math.sin(angle)*hyp);

var dang = (Math.PI*2)/60;

var angleCalc = function(){
  angle += dang;
  endX = parseFloat(Math.cos(angle)*hyp);
  endY = parseFloat(Math.sin(angle)*hyp);
};

// optional styling to show dots
var drawDots = function(){
  var twelve = Math.PI*1.5;
  var increment = (Math.PI*2)/12;
  console.log();
  for(i=1;i<=13;i++){
    var thisAng = twelve + (i * increment);
    var offset = 0.01;
    if(i%3 == 0){offset+=0.05}else{offset=0.01}
    ctx.beginPath();
    ctx.arc(startX, startY, 190, thisAng - offset, thisAng + offset, false);
    ctx.stroke();
  }
};

var init = function(){
  setInterval(drawCanvas, 1000)
};

var drawCanvas = function(){
  ctx.clearRect(0,0, canvas.width, canvas.height);

  angleCalc();

  drawDots();

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + endX, startY + endY);
  ctx.stroke();
};


init();