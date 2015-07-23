var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext('2d');

var timeObj = new Date();

var startX = parseFloat(canvas.width/2);
var startY = parseFloat(canvas.height/2);

var drawSecondHand = function(){
  var seconds = timeObj.getSeconds();
  var angle = (Math.PI*2) * (seconds/60) - (Math.PI*0.5);
  var hyp = 175;
  var endX = parseFloat(Math.cos(angle)*hyp);
  var endY = parseFloat(Math.sin(angle)*hyp);

  setLineOptions(5,'black','round','round');

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + endX, startY + endY);
  ctx.stroke();
};

var drawMinuteHand = function(){
  var minutes = timeObj.getMinutes();
  var angle = (Math.PI*2) * (minutes/60) - (Math.PI*0.5);
  var hyp = 145;
  var endX = parseFloat(Math.cos(angle)*hyp);
  var endY = parseFloat(Math.sin(angle)*hyp);

  setLineOptions(10,'black','round','round');

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + endX, startY + endY);
  ctx.stroke();
};

var drawHourHand = function(){
  var minutes = timeObj.getMinutes();
  var hours = timeObj.getHours();
  if(hours > 12){hours = hours - 12}
  var minuteOffset = (Math.PI*2*(1/12)) * (minutes/60);
  var angle = (Math.PI*2) * (hours/12) - (Math.PI*0.5) + minuteOffset;
  var hyp = 105;
  var endX = parseFloat(Math.cos(angle)*hyp);
  var endY = parseFloat(Math.sin(angle)*hyp);

  setLineOptions(15,'black','round','round');

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + endX, startY + endY);
  ctx.stroke();
};

var drawDots = function(){
  setLineOptions(5,'black','round','round');
  ctx.lineWidth = 5;
  ctx.strokeStyle = "black";
  ctx.lineCap = 'round';
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

var setLineOptions = function(width,style,cap,join){
  ctx.lineWidth = width;
  ctx.strokeStyle = style;
  ctx.lineCap = cap;
  ctx.lineJoin = join;
};

drawDots();
drawSecondHand();
drawMinuteHand();
drawHourHand();
