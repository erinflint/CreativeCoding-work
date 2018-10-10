

let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, 400);
    frameRate (80)

}



function draw() {

  let red = floor( random(256) );
  let green = floor(random(256) );
  let blue = floor( random(256) );
  background( red, green, blue );

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;



    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    fill('yellow');
    ellipse( ball.x, ball.y, ball.width, 60 );
    ellipse( ball.x, ball.y, 150, 20 );
    fill('red');
    ellipse( ball.x, 20, 40, 60 );
    fill('blue');
    ellipse( 20, ball.y, 40, 60 );


}

function mousePressed() {
    ball.scale_x = map(mouseX, 5, width, 1, 20);
    ball.scale_y = map(mouseY, 5, height, 1, 20);
}
