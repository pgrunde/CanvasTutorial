var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext('2d');

ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.lineCap = 'round';

var angle = Math.PI/6;

var startX = parseFloat(canvas.width/2);
var startY = parseFloat(canvas.height/2);
var hyp = 175;

var endX = parseFloat(Math.cos(angle)*hyp);
var endY = parseFloat(Math.sin(angle)*hyp);

ctx.beginPath();
ctx.moveTo(startX, startY);
ctx.lineTo(startX + endX, startY + endY);
ctx.stroke();