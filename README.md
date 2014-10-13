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
   
Next let us draw a second line of another color. To accomplish this, set a new stroke style and begin a new path in your brand new color. We'll draw a V back up to the top with a blue line.

```
ctx.strokeStyle = '#0000ff';
ctx.beginPath();
ctx.moveTo(250, 400);
ctx.lineTo(500, 0);
ctx.stroke();
```

