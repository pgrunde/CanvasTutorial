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

You may wish to add a border around your canvas to clearly see it. In your javascript file, hook up a variable to the context of the canvas to begin drawing:

```
var canvas = document.getElementById('my-canvas');
var context = canvas.getContext('2d');
```