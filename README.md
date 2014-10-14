# HTML5 Canvas Tutorial

HTML5 Canvas is a super-cool tool for drawing, animating, making games, and more. No Gems, no libraries, just straight up HTML and JavaScript to get things done. Let's get started with the setup:

```
<html>
    <head>

    </head>

    <body>
        <canvas id="my-canvas" width="500" height="500"></canvas>
        <script src="canvas.js"></script>
    </body>
</html>
```

You may wish to add a border around your canvas to clearly see it. In your javascript file, hook up a variable to the context of the canvas to begin drawing. We're going to use the "2d" context, though there is an experimental "webgl" context that is only on browsers running WebGL. 

```
var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext('2d');
```
## Line
Now we're ready to begin drawing our first line! Paths all have a beginning, movement, and an end. They also have some options that must be set before drawing a line on the path. This includes things like a width, color, and style for a path end. In the javascript file continue writing: 

```
ctx.lineWidth = 10;
ctx.strokeStyle = "#ff0000";
ctx.lineCap = 'round';
```

`lineWidth` sets the width, `strokeStyle` is the color, and `lineCap` sets the line end styling (`round`, `square`, and `butt` are the `lineCap` options). Now we will start the path at a point, move to a new point, and stroke on the line we just made. Continue writing:

```
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(250, 400);
ctx.stroke();
```

Yay a line! First `beginPath()` starts a new path. The starting location is defined with `moveTo(x,y)`. **It is important to note that y increases as you go down the page while x increases from left to right.** `lineTo(x,y)` sets the way we draw a line and to which location we will draw. Finally we stroke the line we just set.
   
Next let us draw a second line of another color. To accomplish this, set a new stroke style and begin a new path in your brand new color. We'll draw a V back up to the top with a blue line (afterwards, play around with the `lineCap` property to see how they look with this setup)

```
ctx.strokeStyle = '#0000ff';
ctx.beginPath();
ctx.moveTo(250, 400);
ctx.lineTo(500, 0);
ctx.stroke();
```

Great! Two separate lines- but I what if I draw one line with an angle in it, not two separate lines? I'll need that to make the angle look nice. Let us all remember Bob Ross and put a happy little angle in our line. Continue writing:

```
ctx.strokeStyle = '#00ff00';
ctx.beginPath();
ctx.moveTo(150,150);
ctx.lineTo(250,50);
ctx.lineTo(350,150);
ctx.lineJoin = 'round';
ctx.stroke();
```

Here we see two consecutive `lineTo(x,y)` to draw our angle. Next is the new `lineJoin` property which accepts `'round'`, `'miter'`, and `'bevel'`. Test each to see how they look then we'll move on.

## Arc

We're going to look at circular arcs. The `arc` method draws portions of a circle- let us draw one at the center of canvas. It takes a [center x,y coordinate, a radius, a start and end angle, and a stroke direction](http://www.html5canvastutorials.com/demos/tutorials/html5-canvas-arcs/html5-canvas-arcs-diagram.png). Since this is javascript, let us start passing variables into our method arguments to see what *that* looks like.

```
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 75;
var startAngle = 1.1 * Math.PI;
var endAngle = 0.9 * Math.PI;
var counterClockwise = false;

ctx.lineWidth = 25;
ctx.strokeStyle = "red";
ctx.lineCap = "round";

ctx.beginPath();
ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
ctx.stroke();
```

Notice how we can get the center of the canvas via `canvas.width` and `canvas.height`, and that the start and end angles are all based on [radians](http://en.wikipedia.org/wiki/Radian). Radians measure angles starting at 0 and up to 2π, while degrees measure from 0 to 360. If you want a perfect circle, pass `0` and `2*Math.PI` for your start and end angles.  Change the multiplier for start and end angles between 0 and 2 to see the effect on the arc, playing with the direction boolean as you go.

## Quadratic Curve

I don't want some circley shaped ne'er-do-well plebeian curve. I want to bend it any which way I want- so I'll need it to [take a beginning point, a control point, and an end point](http://www.html5canvastutorials.com/demos/tutorials/html5-canvas-quadratic-curves/html5-canvas-quadratic-curves-diagram.png) to define my very own quadratic curve. Play around with the points to see how they work, then draw your own curve coming out of the first- don't forget to set the `lineJoin`.
 
```
var contextX = 240;
var contextY = 50;
var controlX = 275;
var controlY = 220;
var endX = 310;
var endY = 50;

ctx.beginPath();
ctx.moveTo(contextX, contextY);
ctx.quadraticCurveTo(controlX, controlY, endX, endY);

ctx.lineWidth = 25;
ctx.strokeStyle = 'purple';
ctx.lineCap = 'round';
ctx.stroke();
```
 
## Bezier Curve

A single control point is alright. Pretty cool I guess. Two is where it is at, and that is precisely what `bezierCurveTo` takes- [two control point coordinates and an ending point](http://www.html5canvastutorials.com/demos/tutorials/html5-canvas-bezier-curves/html5-canvas-bezier-curves-diagram.png). This enables more nuanced curves with bubbles and contractions all over. Try to use two bezier curves to create a familiar shape, like a tooth or an eye or a ping pong paddle. 
 
```
var contextX = 240;
var contextY = 50;
var controlOneX = 75;
var controlOneY = 220;
var controlTwoX = 475;
var controlTwoY = 420;
var endX = 310;
var endY = 25;

ctx.beginPath();
ctx.moveTo(contextX, contextY);
ctx.bezierCurveTo(controlOneX, controlOneY, controlTwoX, controlTwoY, endX, endY);

ctx.lineWidth = 25;
ctx.strokeStyle = '#cccccc';  
ctx.lineCap = 'round';
ctx.stroke();
```

## Fills, Rects[,](http://en.wikipedia.org/wiki/Serial_comma) and Other Shapes

Just as you can stroke a path, you can fill one too. I will demonstrate with a new method `rect(x, y, width, height)` that makes rectangles if given a starting coordinate, width, and height. Note that `fillStyle` sets a color while `fill()` does the coloring.

```
var x = 50;
var y = 50;
var width = 200;
var height = 100;

ctx.beginPath();
ctx.rect(x, y, width, height);
ctx.fillStyle = 'orange';
ctx.fill();
ctx.lineWidth = 7;
ctx.strokeStyle = 'yellow';
ctx.stroke();
```

How do you fill a funny shaped path? `closePath()` to the rescue! This method takes wherever your current context is located and draws a line to the very first context of your path. Here an arc is closed to form a semicircle:

```
var x = 100;
var y = 100;
var radius = 70;
var startAngle = Math.PI/2.5;

ctx.lineWidth = 5;
ctx.fillStyle = 'pink';
ctx.strokeStyle = '#550000';

ctx.beginPath();
ctx.arc(x, y, radius, startAngle, startAngle + Math.PI, false);
ctx.closePath();
ctx.fill();
ctx.stroke();
```

Let's show an example with a bezier curve connected to a quadratic curve that is closed shut and filled. Note the final context point of 50,75 drawing a vertical 25px line to the starting context point 50,50. Once you think you grasp how it works, create your own shape, anything you want to draw, then close and fill it.

```
ctx.lineWidth = 30;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'lightblue';

ctx.beginPath();
ctx.moveTo(50,50);
ctx.bezierCurveTo(400,200,150,150,460,30);
ctx.quadraticCurveTo(250,450,50,75);
ctx.closePath();
ctx.stroke();
ctx.fill();
```

