Erin Flint, 50

[file:///Users/admin/Downloads/HW-7/index.html]


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

The original code was written to show an ellipse moving across the screen at an angle. When you click on the mouse you can change its trajectory.

The first block of code at the top of the window is setting the various variables that are used throughout the rest of the code.
Next is the code that creates the movement:
**ball.x += ball.delta_x * ball.scale_x;
ball.y += ball.delta_y * ball.scale_y;**
The first line with "ball.x" governs the movement of the ball.x variable.
The second governs the movement of the ball.y variable.

After these lines we see two if() statements. These are used to keep the moving ball within the height and width of the canvas. In these code lines we see that one deals with the height of the canvas and the other with the width.

The next group of code works with the **mousePressed()** function. This function is what allows for the ellipse to respond to the clicking of the mouse.

## How did you alter the sketch?

I changed the background of the sketch by using the random function. I also added an ellipse on top of the original one to make the moving shape look like Saturn. I also added two other moving ellipses.
